"use client";

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
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

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


  const isMobile = typeof window !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Track viewport height changes for mobile keyboard
  useEffect(() => {
    if (!isMobile) return;

    const updateViewportHeight = () => {
      const currentHeight = window.visualViewport?.height || window.innerHeight;
      const fullHeight = window.innerHeight;
      const calculatedKeyboardHeight = Math.max(0, fullHeight - currentHeight);
      
      
      setViewportHeight(currentHeight);
      setKeyboardHeight(calculatedKeyboardHeight);
    };

    // Initial setup
    updateViewportHeight();

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportHeight);
      return () => {
        window.visualViewport?.removeEventListener('resize', updateViewportHeight);
      };
    } else {
      // Fallback for older browsers
      window.addEventListener('resize', updateViewportHeight);
      return () => {
        window.removeEventListener('resize', updateViewportHeight);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (!minimize) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [minimize]);

  // Handle browser back button to close chat
  useEffect(() => {
    let isClosingViaBack = false;

    if (!minimize) {
      // Push a new state when chat opens
      window.history.pushState({ chatOpen: true }, '', window.location.href);
      
      const handlePopState = (event: PopStateEvent) => {
        // Close chat when back button is pressed
        isClosingViaBack = true;
        setMinimize(true);
      };

      window.addEventListener('popstate', handlePopState);
      
      return () => {
        window.removeEventListener('popstate', handlePopState);
        // When chat is closed normally (not via back button), 
        // remove the chat state from history
        if (!isClosingViaBack && window.history.state?.chatOpen) {
          window.history.back();
        }
      };
    }
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
    userInput.current?.focus();
  };

  useEffect(() => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="z-[90] h-full fixed top-0 right-0 w-full h-full">
      {minimize ? (
        <div
          className="fixed z-50 bottom-4 right-4 flex items-center gap-2 justify-center bg-primary text-white 
             shadow-lg rounded-full p-3 cursor-pointer hover:scale-105 chatbot-button transition-transform"
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
          <div className="hidden md:flex h-full justify-center items-center">
            <div className="text-center">
              <p className="text-[#ffffffcc] text-sm font-medium">Need help?</p>
              <p className="text-[#ffffff99] text-[12px]">Chat with Rotabot</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`z-[90] ${
            isMobile 
              ? 'fixed inset-0 w-full mobile-chatbot-container' 
              : 'fixed bottom-4 right-4 w-[400px]'
          } bg-card text-card-foreground shadow-xl flex flex-col ${
            isMobile ? 'border-0' : 'border border-border rounded-2xl'
          }`}
          style={{
            height: isMobile ? `${viewportHeight}px` : '600px',
            maxHeight: isMobile ? `${viewportHeight}px` : '600px',
          }}
        >
          <div 
            className={`flex items-center gap-3 bg-primary text-primary-foreground p-3 flex-shrink-0 ${
              isMobile ? 'sticky top-0' : 'relative'
            }`}
            style={{
              height: '70px', // Fixed height for header
            }}
          >
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

          <div 
            className={`p-3 space-y-3 bg-muted/30 backdrop-blur-sm custom-scrollbar overflow-y-auto ${
              isMobile ? 'mobile-messages-container' : 'flex-1'
            }`}
            ref={messageContainer}
            style={{
              ...(isMobile ? {
                height: `${viewportHeight - 70 - 70}px`, // Total height - header (70px) - input area (70px)
                paddingBottom: '20px',
              } : {})
            }}
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
                      ${chat.from === "user"
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
                    I'm your friendly guide 🤝 <br />
                    Feel free to ask me anything 🎉
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={`flex items-center gap-2 p-3 border-t border-border bg-background flex-shrink-0 ${
              isMobile ? 'absolute bottom-0 left-0 right-0 mobile-input-area mobile-safe-area' : 'relative'
            }`}
            style={{ 
              overflow: 'hidden',
              zIndex: isMobile ? 100 : 'auto',
              height: '70px', // Fixed height for input area
            }}
          >
            <textarea
              className={`flex-1 border border-input rounded-xl p-2 text-sm resize-none focus:ring-2 
                         focus:ring-primary focus:outline-none transition ${
                           isMobile ? 'mobile-input' : ''
                         }`}
              placeholder="Type your message..."
              rows={1}
              ref={userInput}
              onFocus={() => {
                // Scroll to bottom when input is focused on mobile
                if (isMobile && messageContainer.current) {
                  setTimeout(() => {
                    messageContainer.current?.scrollTo({
                      top: messageContainer.current.scrollHeight,
                      behavior: 'smooth'
                    });
                  }, 300);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendBotQuery();
                }
              }}
              style={{
                overflow: 'hidden',
                maxHeight: '100px',
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
