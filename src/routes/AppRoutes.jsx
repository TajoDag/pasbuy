import React, { Suspense, useEffect, useRef, useState } from "react";
import Layout from "../layouts/Layout";
import { routes_here } from "./routes";
import { Route, Routes, useNavigate } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";
import AppNotification from "../components/AppNotification/index";
import AppLoading from "../components/AppLoading/index";
import { useSelector } from "react-redux";
import { getLiveChat } from "../api/utils/livechat";
import CrispWidget from "../utils/CrispWidget";
import LiveChatWidget from "../utils/LiveChatWidget";
import ChatIcon from "../pages/Chat/ChatIcon";
import { ChatContextProvider } from "../context/ChatContext";
import { getUser } from "../api/utils/auth";
import { SOCKET_URL } from "../api/endpoint";
import { io } from "socket.io-client";
import useSocket from "../hooks/useSocket";

const getLicenseIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2]; // Lấy phần tử thứ hai từ cuối cùng
};
export default function AppRoutes() {
  const loading = useSelector((state) => state.loading.loading);
  const notificationProps = useSelector((state) => state.notification);
  const isAuthenticated = JSON.parse(localStorage.getItem("isLogin"));
  const [dataUser, setDataUser] = useState({});
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated && isAuthenticated !== null) {
      const getUserDt = async () => {
        try {
          const rp = await getUser();
          if (rp.status) {
            setDataUser(rp.result);
          }
        } catch (err) {}
      };
      getUserDt();
      // const newSocket = io(SOCKET_URL);

      // newSocket.on("forceLogout", () => {
      //   window.localStorage.clear();
      //   window.location.href = "/login";
      // });

      // return () => {
      //   newSocket.disconnect();
      // };
    }
  }, [isAuthenticated, SOCKET_URL]);
 
  const renderRoute = (route, isAuthenticated) => {
    if (route.isPrivate || isAuthenticated) {
      return route.element;
    }
  };
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <ScrollTop />
      {notificationProps && <AppNotification {...notificationProps} />}
      {loading && <AppLoading />}
      <ChatContextProvider user={dataUser && dataUser}>
        <Routes>
          {routes_here.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              element={
                <Layout>
                  <Suspense fallback={<h1>Loading....</h1>}>
                    {renderRoute(route, true)}
                  </Suspense>
                </Layout>
              }
            />
          ))}
        </Routes>
        {isAuthenticated === true && (
          // <CrispWidget keyLiveChat="53744e9b-2ccf-4378-b4a2-e6f6e2d7be58" />
          // <LiveChatWidget license={keyLiveChat} />
          // <ChatIcon />
          <ChatIcon initialMessage={`Product link: ${window.location.href}`} />
        )}
      </ChatContextProvider>
    </Suspense>
  );
}
