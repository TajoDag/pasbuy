import React, { Suspense } from "react";
import Layout from "../layouts/Layout";
import { routes_here } from "./routes";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";
import AppNotification from "../components/AppNotification/index";
import AppLoading from "../components/AppLoading/index";
import { useSelector } from "react-redux";

export default function AppRoutes() {
  const loading = useSelector((state) => state.loading.loading);
  const notificationProps = useSelector((state) => state.notification);
  const isAuthenticated = true;

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
    </Suspense>
  );
}
