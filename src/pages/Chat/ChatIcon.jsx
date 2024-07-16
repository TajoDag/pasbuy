import React, { useContext, useEffect, useRef, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import Chat from "./Chat";
import { ChatContext } from "../../context/ChatContext";

const ChatIcon = () => {
  const {
    userChats,
    updateCurrentChat,
    isChatOpen,
    setIsChatOpen,
    createChat,
  } = useContext(ChatContext);

  const chatIconRef = useRef(null);
  const [position, setPosition] = useState({
    top: "auto",
    bottom: "20px",
    left: "auto",
    right: "20px",
  });

  useEffect(() => {
    const chatIcon = chatIconRef.current;
    if (chatIcon) {
      chatIcon.addEventListener("mousedown", onMouseDown);
      chatIcon.addEventListener("touchstart", onTouchStart);
    }
    return () => {
      if (chatIcon) {
        chatIcon.removeEventListener("mousedown", onMouseDown);
        chatIcon.removeEventListener("touchstart", onTouchStart);
      }
    };
  }, []);

  const toggleChat = async () => {
    if (userChats && userChats.length < 1) {
      await createChat();
      setIsChatOpen((prev) => !prev);
    } else {
      await updateCurrentChat(userChats[0]);
      setIsChatOpen((prev) => !prev);
    }
  };
  const onMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({
      top: e.clientY - 30 + "px",
      bottom: "auto",
      left: e.clientX - 30 + "px",
      right: "auto",
    });
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (e) => {
    e.preventDefault();
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
  };

  const onTouchMove = (e) => {
    setPosition({
      top: e.touches[0].clientY - 30 + "px",
      bottom: "auto",
      left: e.touches[0].clientX - 30 + "px",
      right: "auto",
    });
  };

  const onTouchEnd = () => {
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
  };
  return (
    <>
      {/* <div className="chat-icon" onClick={toggleChat}>
        <FiMessageCircle size={30} color="#fff" />
      </div>
      {isChatOpen && (
        <div className="chat-window">
          <Chat toggleChat={toggleChat} />
        </div>
      )} */}
      <div
        className="chat-icon"
        ref={chatIconRef}
        style={{ ...position }}
        onClick={toggleChat}
      >
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
