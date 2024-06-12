import React, { useContext, useEffect, useRef, useState } from "react";
import { FiX, FiImage, FiSend } from "react-icons/fi";
import { ChatContext } from "../../context/ChatContext";
import DateTimeComponent from "../../utils/DateTimeComponent";

const Chat = ({ toggleChat }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [message, setMessage] = useState("");
  const {
    currentChat,
    messages,
    isMessagesLoading,
    sendTextMessage,
    updateCurrentChat,
    userChats,
  } = useContext(ChatContext);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    e.blur();
    await sendTextMessage(message, user._id, currentChat?._id, setMessage);
  };

  if (isMessagesLoading) {
    return <p>Loading chat ...</p>;
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-title">Chat</div>
          <button className="close-button" onClick={toggleChat}>
            <FiX size={20} />
          </button>
        </div>
        <div className="chat-support-status">
          <div className="support-dot"></div>
          Support is online
        </div>
      </div>
      <div className="chat-messages">
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className={`message-item ${
                message.senderId === user._id ? "own" : "recipient"
              }`}
            >
              <div className="message-content">{message.text}</div>
              <div className="message-timestamp">
                <DateTimeComponent dateString={message.createdAt} />
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-input-container" onSubmit={handleSendMessage}>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          style={{ display: "none" }}
          id="file-upload"
        />
        <label htmlFor="file-upload" className="upload-button">
          <FiImage size={24} />
        </label>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="chat-input"
          placeholder="Compose your message..."
        />
        <button type="submit" className="send-button">
          <FiSend size={24} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
