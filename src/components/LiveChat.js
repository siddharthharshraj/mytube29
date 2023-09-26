import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    dispatch(
      addMessage({
        name: "Siddharth",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="flex flex-col h-[600px] bg-slate-200 rounded-lg p-4">
      <h1 className="font-bold border-b-2 border-black p-2">Live Chat</h1>
      <div className="flex flex-col-reverse flex-1 overflow-y-scroll">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="flex border-t border-black mt-4"
        onSubmit={handleSendMessage}
      >
        <input
          className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Type your message in LIVE CHAT..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
