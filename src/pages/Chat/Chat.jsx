import React, { useEffect, useState } from "react";
import { FiX, FiImage, FiSend } from "react-icons/fi";
import io from "socket.io-client";
import {
  createChat,
  addMessageToChat,
  getUserChats,
} from "../../api/utils/chat";

const socket = io("http://localhost:4000");

const Chat = ({ toggleChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [chatId, setChatId] = useState(null);
  const user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const userChats = await getUserChats(user._id);
        if (userChats.length > 0) {
          setChatId(userChats[0]._id);
          setMessages(userChats[0].messages);
          socket.emit("joinRoom", { chatId: userChats[0]._id });
        } else {
          const newChat = await createChat({
            participants: [user._id, "ADMIN_ID"],
            message: { sender: user._id, content: "" }
          });
          setChatId(newChat._id);
          socket.emit("joinRoom", { chatId: newChat._id });
        }
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();

    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [user._id]);

  const handleSendMessage = async () => {
    const formData = new FormData();
    formData.append("chatId", chatId);
    formData.append("sender", user._id);
    formData.append("content", newMessage);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const response = await addMessageToChat(formData);
      const message = response.data;
      socket.emit("sendMessage", { chatId, message });
      setNewMessage("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

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
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg.imageUrl && <img src={`/${msg.imageUrl}`} alt="attachment" />}
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
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
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-input"
          placeholder="Compose your message..."
        />
        <button onClick={handleSendMessage} className="send-button">
          <FiSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
