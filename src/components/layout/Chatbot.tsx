import { useEffect, useRef, useState } from "react";
import "./_components/style/Chatbot.css";
import AiLoad from "./_components/AiLoad";
import { LaptopMinimal } from "lucide-react";

type ChatMessage = {
  from: "user" | "bot";
  message: string;
};

export default function Chatbot() {
  const [chats, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [minimize, setMinimize] = useState(true);

  const handleSend = async (prompt: string) => {
    if (!prompt.trim()) return null;
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, lastResponse: response }),
      });
      const data = await res.json();
      setResponse(data.text);
      return data.text;
    } catch (err: any) {
      throw new Error(err.message || "Failed to get Gemini response");
    }
  };

  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Run only on client
    const logViewportHeight = () => {
      const newHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      const newWidth = window.visualViewport
        ? window.visualViewport.width
        : window.innerWidth;
      setHeight(newHeight);
      setWidth(newWidth);
    };

    // Initial height set
    logViewportHeight();

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", logViewportHeight);
      return () => {
        window.visualViewport?.removeEventListener("resize", logViewportHeight);
      };
    } else {
      window.addEventListener("resize", logViewportHeight);
      return () => {
        window.removeEventListener("resize", logViewportHeight);
      };
    }
  }, []);

  useEffect(() => {
    console.log(height);
  }, [height]);

  useEffect(() => {
    if (minimize) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [minimize]);

  const userInput = useRef<HTMLTextAreaElement>(null);
  const messageContainer = useRef<HTMLDivElement>(null);

  const handleSendBotQuery = async () => {
    const userinput = userInput.current?.value;
    if (!userinput || loading) return;
    setLoading(true);

    setChat((prev) => [...prev, { from: "user", message: userinput }]);
    userInput.current.value = "";

    try {
      const data = await handleSend(userinput);
      const botMessage =
        typeof data === "string" ? data : "Sorry, I didn't understand.";
      setChat((prev) => [...prev, { from: "bot", message: botMessage }]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { from: "bot", message: "Something went wrong! ❌" },
      ]);
    }
    setLoading(false);
    userInput.current.focus();
  };

  useEffect(() => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="rac_chatbot z-50">
      {minimize ? (
        <div
          className="fixed z-50 bottom-4 right-4 flex items-center gap-2 justify-center bg-primary text-white 
             shadow-lg rounded-full p-3 cursor-pointer hover:scale-105 transition-transform chatbot-button animate-pulse"
          onClick={() => setMinimize(false)}
          role="button"
          aria-label="Open chatbot"
          title="Need help? Chat with us!"
        >
          <img
            width={40}
            src="/chatbot.png"
            alt="Chatbot Icon"
            className="chatbot_icon"
          />
          <span className="hidden md:inline text-sm font-medium">
            Chat with us
          </span>
        </div>
      ) : (
        <div
          className={`fixed ${height < 500 ? "top-0" : "bottom-0"} right-0 sm:right-4 sm:bottom-4 bg-card text-card-foreground shadow-xl 
             flex flex-col w-full sm:h-[600px] sm:w-[400px] border border-border rounded-none sm:rounded-2xl overflow-hidden`}
          style={{
            height:
              width < 640 ? (height < 600 ? `${height}px` : "100%") : "600px",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary text-primary-foreground p-3 relative">
            <img
              src="/chatbot.png"
              alt="Chatbot"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <span className="font-semibold text-lg tracking-wide">ROTABOT</span>
            <button
              className="ml-auto text-xl hover:scale-125 transition-transform"
              onClick={() => setMinimize(true)}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-3 space-y-3 bg-muted/30 backdrop-blur-sm"
            ref={messageContainer}
          >
            {chats.map((chat, key) => {
              const cleanMessage = chat.message
                .replace(/^```[a-z]*\n/, "")
                .replace(/```$/, "");
              return (
                <div
                  key={key}
                  className={`flex ${chat.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl shadow-sm max-w-[75%] text-sm animate-fadeIn 
                      ${
                        chat.from === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: cleanMessage }} />
                  </div>
                </div>
              );
            })}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl bg-muted text-muted-foreground shadow-sm">
                  <AiLoad />
                </div>
              </div>
            )}
            {chats.length === 0 && (
              <div className="flex w-full h-full items-center justify-center">
                <div className="text-center px-6 sm:px-10 py-8">
                  <div className="flex justify-center mb-6">
                    <LaptopMinimal className="w-12 h-12 text-[#00000040]" />
                  </div>
                  <p className="text-base text-muted-foreground">
                    I’m your friendly guide 🤝 <br />
                    Feel free to ask me anything 🎉
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 p-3 border-t border-border bg-background">
            <textarea
              className="flex-1 border border-input rounded-xl p-2 text-sm resize-none focus:ring-2 
                         focus:ring-primary focus:outline-none transition"
              placeholder="Type your message..."
              rows={1}
              ref={userInput}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendBotQuery();
                }
              }}
            />
            <button
              className="bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-sm 
                         hover:bg-primary/90 transition"
              onClick={handleSendBotQuery}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
