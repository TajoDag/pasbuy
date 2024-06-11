import { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../api/endpoint"; // Đảm bảo rằng đường dẫn này đúng

const useSocket = (isAuthenticated, dataUser) => {
  const [forceLogoutUserId, setForceLogoutUserId] = useState(null);
  const navigate = useNavigate();
  const socketRef = useRef(null); // Đảm bảo rằng useRef được sử dụng đúng cách

  const handleLogout = useCallback(() => {
    window.localStorage.clear();
    navigate("/login");
    window.location.reload();
  }, [navigate]);

  useEffect(() => {
    if (isAuthenticated && dataUser && dataUser._id) {
      if (!socketRef.current) {
        const newSocket = io(SOCKET_URL);
        socketRef.current = newSocket;

        newSocket.on("connect", () => {
          console.log("Socket connected");
          newSocket.emit("addNewUser", {
            userId: dataUser._id,
            role: dataUser.role,
          });
        });

        newSocket.on("forceLogout", ({ userId }) => {
          console.log("Force logout received for user:", userId);
          if (userId === dataUser._id) {
            handleLogout();
            setForceLogoutUserId(null); // Reset forceLogoutUserId khi logout
          }
        });

        newSocket.on("receiveForceLogoutUserId", (data) => {
          console.log("Received forceLogoutUserId", data.userId);
          setForceLogoutUserId(data.userId);
        });

        newSocket.on("disconnect", () => {
          console.log("Socket disconnected");
        });

        // Emit getForceLogoutUserId only once when socket connects
        newSocket.emit("getForceLogoutUserId");
      }

      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
          socketRef.current = null;
          console.log("Socket disconnected and cleaned up");
        }
      };
    }
  }, [isAuthenticated, dataUser, handleLogout, navigate]);

  return { forceLogoutUserId };
};

export default useSocket;
