import React, { Suspense, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { routes_here } from "./routes";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";
import AppNotification from "../components/AppNotification/index";
import AppLoading from "../components/AppLoading/index";
import { useSelector } from "react-redux";
import CrispWidget from "../utils/CrispWidget";
import { getLiveChat } from "../api/utils/livechat";

export default function AppRoutes() {
  const loading = useSelector((state) => state.loading.loading);
  const notificationProps = useSelector((state) => state.notification);
  const [keyLiveChat, setKeyLiveChat] = useState("");
  const isAuthenticated = true;

  const renderRoute = (route, isAuthenticated) => {
    if (route.isPrivate || isAuthenticated) {
      return route.element;
    }
  };

  useEffect(() => {
    const getKey = async () => {
      try {
        const rp = await getLiveChat("665461c54715f752a552f7a2");
        if (rp && rp) {
          setKeyLiveChat(rp.result.keyLive);
        }
      } catch (error) {
        console.error("Error fetching live chat key:", error);
      }
    };

    getKey();
  }, []);
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <ScrollTop />
      {notificationProps && <AppNotification {...notificationProps} />}
      {loading && <AppLoading />}
      <Routes>
        {routes_here.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={
              <Layout>
                <Suspense fallback={<h1>Loading....</h1>}>
                  {renderRoute(route, isAuthenticated)}
                </Suspense>
              </Layout>
            }
          />
        ))}
      </Routes>
      <CrispWidget keyChat={keyLiveChat} />
    </Suspense>
  );
}
