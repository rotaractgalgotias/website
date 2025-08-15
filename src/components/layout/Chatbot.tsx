import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Chatbot() {
  const [chats, setChat] = useState([
    { from: "bot", message: "Hello! How can I help you?" },
  ]);
  const userInput = useRef<HTMLTextAreaElement>(null);
  const handleSendBotQuery = () => {
    const userinput = userInput.current?.value;
    if (!userinput)
      return toast.error("Message failed!", {
        description: "Something went wrong.",
        cancel: {
          label: "Cancel",
          onClick: () => {
            console.log("User canceled");
          },
        },
      });
    setChat((prev) => [...prev, { from: "user", message: userinput }]);
    userInput.current.value = "";
    userInput.current.focus();
  };
  return (
    <div
      className="fixed bottom-0 right-0 sm:right-4 sm:bottom-4 bg-white shadow-lg flex flex-col 
                    w-full h-[600px] sm:w-[400px] border rounded-none sm:rounded-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-blue-600 text-white p-3">
        <img
          src="/chatbot.png"
          alt="Chatbot"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold">RTR_GEI BOT</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
        {chats.map((chat, key) => (
          <div
            key={key}
            className={`flex justify-${chat.from == "bot" ? "start" : "end"}`}
          >
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
              {chat.message}
            </div>
          </div>
        ))}
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
  );
}
