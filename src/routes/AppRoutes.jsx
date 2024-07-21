import React, { Suspense, useEffect, useRef, useState } from "react";
import Layout from "../layouts/Layout";
import { routes_here } from "./routes";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";
import AppNotification from "../components/AppNotification/index";
import AppLoading from "../components/AppLoading/index";
import { useSelector } from "react-redux";
import ChatIcon from "../pages/Chat/ChatIcon";
import { ChatContextProvider } from "../context/ChatContext";
import { getUser } from "../api/utils/auth";
import { SOCKET_URL } from "../api/endpoint";

const getLicenseIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};
export default function AppRoutes() {
  const loading = useSelector((state) => state.loading.loading);
  const notificationProps = useSelector((state) => state.notification);
  const isAuthenticated = JSON.parse(localStorage.getItem("isLogin"));
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    if (isAuthenticated && isAuthenticated !== null) {
      const getUserDt = async () => {
        try {
          const rp = await getUser();
          if (rp.status) {
            setDataUser(rp.result);
          }
        } catch (err) { }
      };
      getUserDt();
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
        {/* {isAuthenticated === true && (
          <ChatIcon initialMessage={`Product link: ${window.location.href}`} />
        )} */}
      </ChatContextProvider>
    </Suspense>
  );
}
