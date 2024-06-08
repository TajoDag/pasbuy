import React, { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import Chat from "./Chat";

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="chat-icon" onClick={toggleChat}>
        <FiMessageCircle size={30} color="#fff" />
      </div>
      {isChatOpen && (
        <div className="chat-window">
          <Chat toggleChat={toggleChat} />
        </div>
      )}
    </>
  );
};

export default ChatIcon;
