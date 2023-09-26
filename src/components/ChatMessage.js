import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-7"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4za-gwBM2h9DeD08Vz3NmcPzrbNo4fLDS6g&usqp=CAU"
      />
      <span className="font-serif font-bold px-2">{name}</span>
      <span className="font-serif font-light">{message}</span>
    </div>
  );
};

export default ChatMessage;
