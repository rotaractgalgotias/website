"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from '@ai-sdk/react';
import { Streamdown } from 'streamdown';
import type { UIMessage } from 'ai';
import { Message } from "@/components/ai-elements/message";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";
import "./_components/style/Chatbot.css";

export default function Chatbot() {
  const [minimize, setMinimize] = useState(true);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState('');


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

  const messageContainer = useRef<HTMLDivElement>(null);

  const handleSendBotQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status !== 'ready') return;
    sendMessage({ text: input });
    setInput('');
  };

  useEffect(() => {
    if (messageContainer.current) {
      const container = messageContainer.current;
      // Smooth scroll to bottom when new messages arrive
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  // Also scroll to bottom when status changes (loading starts/ends)
  useEffect(() => {
    if (messageContainer.current && status !== 'ready') {
      const container = messageContainer.current;
      setTimeout(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [status]);

  return (
    <div className={`z-[90] fixed ${minimize ? 'bottom-4 right-4' : 'top-0 right-0 w-full h-full'}`}>
      {minimize ? (
        <Button
          onClick={() => setMinimize(false)}
          className="z-50 h-14 w-14 sm:w-auto px-4 bg-primary hover:bg-primary/90 text-white shadow-lg rounded-full transition-all duration-200 hover:scale-105"
          aria-label="Open chatbot"
          title="Need help? Chat with ROTABOT!"
        >
          <MessageCircle className="sm:mr-2 size-6" />
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium">Need help?</span>
            <span className="text-xs opacity-80">Chat with ROTABOT</span>
          </div>
        </Button>
      ) : (
        <div
          className={`z-[90] ${
            isMobile 
              ? 'fixed inset-0 w-full h-full' 
              : 'fixed bottom-4 right-4 w-[420px] h-[650px]'
          } bg-background shadow-2xl flex flex-col ${
            isMobile ? 'border-0' : 'border border-border rounded-2xl'
          }`}
           style={{
             ...(isMobile ? {
               height: '100dvh',
               maxHeight: '100dvh',
             } : {})
           }}
        >
          {/* Header */}
          <div 
            className={`flex items-center justify-between p-4 border-b bg-primary text-primary-foreground flex-shrink-0 ${
              isMobile ? 'sticky top-0' : 'rounded-t-2xl'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">ROTABOT</h3>
                <p className="text-xs opacity-80">AI Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMinimize(true)}
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

           {/* Messages Container */}
           <div 
             className={`flex-1 overflow-y-auto p-4 space-y-4 ${isMobile ? 'mobile-messages-container' : ''}`}
             ref={messageContainer}
             style={{
               ...(isMobile ? {
                 paddingBottom: 'calc(80px + max(0px, env(keyboard-inset-height, 0px)))',
               } : {})
             }}
           >
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Welcome to ROTABOT! 🤖</h3>
                  <p className="text-muted-foreground max-w-sm">
                    I'm your friendly guide to the Rotaract Club of Galgotias Educational Institutions. 
                    Feel free to ask me anything! 🎉
                  </p>
                </div>
              </div>
            )}
            
            {messages.map((message: UIMessage) => (
              <Message
                key={message.id}
                from={message.role}
                className="animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
              >
                <div className="flex flex-col gap-2 overflow-hidden rounded-lg text-sm max-w-[80%] px-3 py-2 bg-secondary text-foreground">
                  {message.parts
                    .filter((part: any) => part.type === 'text')
                    .map((part: any, index: number) => (
                        <Streamdown key={index} className="px-2">{part.text}</Streamdown>
                    ))}
                </div>
              </Message>
            ))}
            
            {status !== 'ready' && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl p-4 max-w-xs">
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                    <span className="text-sm text-muted-foreground">ROTABOT is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

           {/* Input Area */}
           <div
             className={`border-t bg-background p-4 flex-shrink-0 ${
               isMobile ? 'absolute bottom-0 left-0 right-0 mobile-input-area' : 'rounded-b-2xl relative'
             }`}
             style={{
               zIndex: isMobile ? 100 : 'auto',
               ...(isMobile ? {
                 bottom: 'max(0px, env(keyboard-inset-height, 0px))',
               } : {})
             }}
           >
            <form onSubmit={handleSendBotQuery} className="flex gap-2">
              <div className="flex-1 relative">
                 <textarea
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   placeholder="Ask ROTABOT anything about Rotaract..."
                   className={`w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px] max-h-32 ${
                     isMobile ? 'mobile-input' : ''
                   }`}
                  rows={1}
                  disabled={status !== 'ready'}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendBotQuery(e);
                    }
                  }}
                  onFocus={() => {
                    if (isMobile && messageContainer.current) {
                      setTimeout(() => {
                        messageContainer.current?.scrollTo({
                          top: messageContainer.current.scrollHeight,
                          behavior: 'smooth'
                        });
                      }, 300);
                    }
                  }}
                />
              </div>
              <Button
                type="submit"
                disabled={status !== 'ready' || !input.trim()}
                className="h-11 px-4"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
