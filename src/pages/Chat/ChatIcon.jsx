import React, { useContext, useEffect, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import Chat from "./Chat";
import { ChatContext } from "../../context/ChatContext";

const ChatIcon = () => {
  const {
    userChats,
    updateCurrentChat,
    isChatOpen, setIsChatOpen,
    createChat,

  } = useContext(ChatContext);



  const toggleChat = async () => {
    if (userChats && userChats.length < 1) {
      await createChat();
      setIsChatOpen(true);
    } else {
      await updateCurrentChat(userChats[0]);
      setIsChatOpen((prev) => !prev);
    }

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
