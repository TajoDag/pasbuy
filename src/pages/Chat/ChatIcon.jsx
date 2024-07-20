import React, { useContext, useEffect, useRef, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import Chat from "./Chat";
import { ChatContext } from "../../context/ChatContext";

const ChatIcon = () => {
  // const {
  //   userChats,
  //   updateCurrentChat,
  //   isChatOpen,
  //   setIsChatOpen,
  //   createChat,
  // } = useContext(ChatContext);
  // const chatIconRef = useRef(null);
  // const [position, setPosition] = useState({
  //   top: "auto",
  //   bottom: "20px",
  //   left: "auto",
  //   right: "20px",
  // });

  // useEffect(() => {
  //   const chatIcon = chatIconRef.current;
  //   if (chatIcon) {
  //     chatIcon.addEventListener("mousedown", onMouseDown);
  //     chatIcon.addEventListener("touchstart", onTouchStart);
  //   }
  //   return () => {
  //     if (chatIcon) {
  //       chatIcon.removeEventListener("mousedown", onMouseDown);
  //       chatIcon.removeEventListener("touchstart", onTouchStart);
  //     }
  //   };
  // }, []);

  // const toggleChat = async () => {
  //   if (userChats && userChats.length < 1) {
  //     await createChat();
  //     setIsChatOpen((prev) => !prev);
  //   } else {
  //     await updateCurrentChat(userChats[0]);
  //     setIsChatOpen((prev) => !prev);
  //   }
  // };

  // const onMouseDown = (e) => {
  //   e.preventDefault();
  //   document.addEventListener("mousemove", onMouseMove);
  //   document.addEventListener("mouseup", onMouseUp);
  // };

  // const onMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   const { innerWidth, innerHeight } = window;
  //   const iconSize = 60; // Assuming icon size is 60px

  //   let newLeft = clientX - iconSize / 2;
  //   let newTop = clientY - iconSize / 2;

  //   if (newLeft < 0) newLeft = 0;
  //   if (newTop < 0) newTop = 0;
  //   if (newLeft + iconSize > innerWidth) newLeft = innerWidth - iconSize;
  //   if (newTop + iconSize > innerHeight) newTop = innerHeight - iconSize;

  //   setPosition({
  //     top: newTop + "px",
  //     bottom: "auto",
  //     left: newLeft + "px",
  //     right: "auto",
  //   });
  // };

  // const onMouseUp = () => {
  //   document.removeEventListener("mousemove", onMouseMove);
  //   document.removeEventListener("mouseup", onMouseUp);
  // };

  // const onTouchStart = (e) => {
  //   e.preventDefault();
  //   document.addEventListener("touchmove", onTouchMove);
  //   document.addEventListener("touchend", onTouchEnd);
  // };

  // const onTouchMove = (e) => {
  //   const { clientX, clientY } = e.touches[0];
  //   const { innerWidth, innerHeight } = window;
  //   const iconSize = 60; // Assuming icon size is 60px

  //   let newLeft = clientX - iconSize / 2;
  //   let newTop = clientY - iconSize / 2;

  //   if (newLeft < 0) newLeft = 0;
  //   if (newTop < 0) newTop = 0;
  //   if (newLeft + iconSize > innerWidth) newLeft = innerWidth - iconSize;
  //   if (newTop + iconSize > innerHeight) newTop = innerHeight - iconSize;

  //   setPosition({
  //     top: newTop + "px",
  //     bottom: "auto",
  //     left: newLeft + "px",
  //     right: "auto",
  //   });
  // };

  // const onTouchEnd = () => {
  //   document.removeEventListener("touchmove", onTouchMove);
  //   document.removeEventListener("touchend", onTouchEnd);
  // };
  const {
    userChats,
    updateCurrentChat,
    isChatOpen,
    setIsChatOpen,
    createChat,
  } = useContext(ChatContext);
  const chatIconRef = useRef<HTMLDivElement>(null);
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

  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const iconSize = 60; // Assuming icon size is 60px

    let newLeft = clientX - iconSize / 2;
    let newTop = clientY - iconSize / 2;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft + iconSize > innerWidth) newLeft = innerWidth - iconSize;
    if (newTop + iconSize > innerHeight) newTop = innerHeight - iconSize;

    setPosition({
      top: newTop + "px",
      bottom: "auto",
      left: newLeft + "px",
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
    const { clientX, clientY } = e.touches[0];
    const { innerWidth, innerHeight } = window;
    const iconSize = 60; // Assuming icon size is 60px

    let newLeft = clientX - iconSize / 2;
    let newTop = clientY - iconSize / 2;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft + iconSize > innerWidth) newLeft = innerWidth - iconSize;
    if (newTop + iconSize > innerHeight) newTop = innerHeight - iconSize;

    setPosition({
      top: newTop + "px",
      bottom: "auto",
      left: newLeft + "px",
      right: "auto",
    });
  };

  const onTouchEnd = () => {
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
  };

  return (
    <>
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
