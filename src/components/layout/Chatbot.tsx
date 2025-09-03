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
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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

  const [isInputFocused, setIsInputFocused] = useState(false);

  // Keyboard detection for mobile
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Chrome/i.test(
      navigator.userAgent
    );
    
    if (!isMobile) return;

    // Ensure proper viewport setup for mobile
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    const originalViewport = viewportMeta.getAttribute('content');
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');

    let initialViewportHeight = window.innerHeight;
    let currentViewportHeight = window.innerHeight;

    const handleViewportChange = () => {
      currentViewportHeight = window.innerHeight;
      const heightDiff = initialViewportHeight - currentViewportHeight;
      
      // Keyboard is likely open if height difference is significant (>150px)
      const keyboardOpen = heightDiff > 150;
      
      setIsKeyboardOpen(keyboardOpen);
      setKeyboardHeight(keyboardOpen ? heightDiff : 0);
    };

    // Use visualViewport API if available (modern browsers)
    if (window.visualViewport) {
      const handleVisualViewportChange = () => {
        const heightDiff = initialViewportHeight - window.visualViewport!.height;
        const keyboardOpen = heightDiff > 150;
        
        setIsKeyboardOpen(keyboardOpen);
        setKeyboardHeight(keyboardOpen ? heightDiff : 0);
        
        // Force reflow to prevent layout issues
        if (keyboardOpen) {
          document.body.style.height = `${window.visualViewport!.height}px`;
        } else {
          document.body.style.height = "100%";
        }
      };

      window.visualViewport.addEventListener('resize', handleVisualViewportChange);
      return () => {
        window.visualViewport?.removeEventListener('resize', handleVisualViewportChange);
        // Restore original viewport
        if (originalViewport && viewportMeta) {
          viewportMeta.setAttribute('content', originalViewport);
        }
        document.body.style.height = "";
      };
    } else {
      // Fallback for older browsers
      const handleViewportChangeImproved = () => {
        const currentHeight = window.innerHeight;
        const heightDiff = initialViewportHeight - currentHeight;
        const keyboardOpen = heightDiff > 150;
        
        setIsKeyboardOpen(keyboardOpen);
        setKeyboardHeight(keyboardOpen ? heightDiff : 0);
        
        // Update body height for proper backdrop coverage
        if (keyboardOpen) {
          document.body.style.height = `${currentHeight}px`;
        } else {
          document.body.style.height = "100%";
        }
      };

      window.addEventListener('resize', handleViewportChangeImproved);
      return () => {
        window.removeEventListener('resize', handleViewportChangeImproved);
        // Restore original viewport
        if (originalViewport && viewportMeta) {
          viewportMeta.setAttribute('content', originalViewport);
        }
        document.body.style.height = "";
      };
    }
  }, []);

  useEffect(() => {
    if (!minimize) {
      document.body.style.overflow = "hidden";
      // Prevent scrolling issues on mobile
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
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
    
    // Ensure input stays focused and visible after sending
    setTimeout(() => {
      userInput.current?.focus();
      if (isKeyboardOpen && userInput.current) {
        userInput.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end' 
        });
      }
    }, 100);
  };

  useEffect(() => {
    if (messageContainer.current) {
      // Smooth scroll to bottom, especially important when keyboard is open
      messageContainer.current.scrollTo({
        top: messageContainer.current.scrollHeight,
        behavior: isKeyboardOpen ? 'smooth' : 'auto'
      });
    }
  }, [chats, isKeyboardOpen]);

  return (
    <div className="rac_chatbot z-50">
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
        <>
          {/* Mobile backdrop to prevent main page showing through */}
          <div 
            className="fixed inset-0 bg-card z-40 sm:hidden"
            style={{
              top: isKeyboardOpen ? `${keyboardHeight}px` : '0',
              backgroundColor: 'var(--card, #ffffff)',
            }}
          />
          
          <div
            className={`fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[400px] 
                        bg-card text-card-foreground shadow-xl flex flex-col border-0 sm:border border-border 
                        rounded-none sm:rounded-2xl overflow-hidden z-50`}
            style={{
              // Proper mobile positioning
              height: typeof window !== 'undefined' && window.innerWidth < 640 
                ? (isKeyboardOpen ? `calc(100vh - ${keyboardHeight}px)` : '100vh')
                : '600px',
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
            className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-3 bg-muted/30 backdrop-blur-sm"
            ref={messageContainer}
            style={{
              // Ensure messages don't get cut off by keyboard
              paddingBottom: isKeyboardOpen ? '20px' : '12px',
              minHeight: 0, // Allows flex child to shrink
              maxHeight: '100%', // Prevent overflow issues
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
          <div 
            className={`flex items-center gap-2 p-3 border-t border-border bg-background transition-all duration-200 ${
              isKeyboardOpen ? 'relative z-10' : ''
            }`}
            style={{
              // Ensure input area is always visible above keyboard
              transform: isKeyboardOpen ? 'translateY(0)' : 'none',
            }}
          >
            <textarea
              className={`flex-1 border border-input rounded-xl p-2 text-sm resize-none focus:ring-2 
                         focus:ring-primary focus:outline-none transition-all duration-200 ${
                           isKeyboardOpen ? 'shadow-lg' : ''
                         }`}
              placeholder="Type your message..."
              rows={1}
              ref={userInput}
              onFocus={() => {
                setIsInputFocused(true);
                // Scroll to input on focus for better UX
                setTimeout(() => {
                  userInput.current?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'end' 
                  });
                }, 300); // Delay to allow keyboard animation
              }}
              onBlur={() => setIsInputFocused(false)}
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
        </>
      )}
    </div>
  );
}
