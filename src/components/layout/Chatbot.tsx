import { useEffect, useRef, useState } from "react";
import "./_components/style/Chatbot.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
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
    <div>
      {minimize ? (
        <div
          className="fixed bottom-4 right-4 chatbot-initiator"
          onClick={() => {
            setMinimize(false);
          }}
        >
          <img width={100} src="chatbot.png" />
        </div>
      ) : (
        <div
          className="fixed bottom-0 right-0 sm:right-4 sm:bottom-4 bg-white shadow-lg flex flex-col 
                    w-full h-[600px] sm:w-[400px] border rounded-none sm:rounded-lg chatbot-container"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-blue-600 text-white p-3 relative">
            <img
              src="/chatbot.png"
              alt="Chatbot"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">RTR_GEI BOT</span>
            <button
              className="text-white ml-auto"
              onClick={() => {
                setMinimize(true);
              }}
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50"
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
                    className={`px-4 py-2 rounded-lg max-w-xs ${
                      chat.from === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: cleanMessage }} />
                  </div>
                </div>
              );
            })}
            {loading ? (
              <div className={`flex justify-start`}>
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs bg-gray-200 text-gray-800`}
                >
                  <AiLoad />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 p-3 border-t">
            <textarea
              className="flex-1 border rounded p-2 text-sm resize-none focus:outline-none"
              placeholder="Type your message..."
              rows={1}
              ref={userInput}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
