import { useEffect, useRef, useState } from "react";
import "./_components/style/Chatbot.css";
import AiLoad from "./_components/AiLoad";

export default function Chatbot() {
  const [chats, setChat] = useState([
    { from: "bot", message: "Hello! How can I help you?" },
  ]);
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
          className="fixed z-50 bottom-4 right-4 flex items-center justify-center text-primary-foreground 
                     shadow-lg rounded-full p-3 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setMinimize(false)}
        >
          <img
            width={60}
            src="/chatbot.png"
            alt="Chatbot"
            className="chatbot_icon"
          />
        </div>
      ) : (
        <div
          className="fixed bottom-0 right-0 sm:right-4 sm:bottom-4 bg-card text-card-foreground shadow-xl 
                     flex flex-col w-full h-full sm:h-[600px] sm:w-[400px] border border-border rounded-none sm:rounded-2xl overflow-hidden"
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
