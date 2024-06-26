import React, { useContext, useEffect, useRef, useState } from "react";
import { FiX, FiImage, FiSend } from "react-icons/fi";
import { ChatContext } from "../../context/ChatContext";
import DateTimeComponent from "../../utils/DateTimeComponent";
import { Image } from "antd";

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const Chat = ({ toggleChat }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(false);
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
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      setImage(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    const convertFileToBase64 = async () => {
      const base64Image = await fileToBase64(selectedFile);
      setImage(base64Image);
    };

    convertFileToBase64();

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await sendTextMessage(
      message,
      user._id,
      currentChat?._id,
      setMessage,
      setKey,
      image,
      setImage,
      setPreview,
      setSelectedFile
    );
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSendMessage(e);
    }
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
              className={`message-item ${message.senderId === user._id ? "own" : "recipient"
                }`}
            >
              <div className="message-content-image">

                {message?.images?.url && (
                  <Image src={message?.images.url} alt="Image" />
                )}
              </div>

              {message?.text && (
                <div className="message-content">{message?.text}</div>
              )}

              <div className="message-timestamp">
                <DateTimeComponent dateString={message.createdAt} />
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>
      {preview && (
        <div className="image-preview">
          <Image src={preview} alt="Preview" />
        </div>
      )}
      <div className="chat-input-container">
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
          onKeyPress={handleKeyPress}
          className="chat-input"
          placeholder="Compose your message..."
        />
        <button
          disabled={key}
          onClick={(e) => handleSendMessage(e)}
          className="send-button"
        >
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
