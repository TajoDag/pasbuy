import React, { Suspense } from "react";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import { routes_here } from "./routes";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";

export default function AppRoutes() {
  const isAuthenticated = true;

  const renderRoute = (route, isAuthenticated) => {
    if (route.isPrivate || isAuthenticated) {
      return route.element;
    }
  };

  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <React.Fragment>
        <ScrollTop />
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
      </React.Fragment>
    </Suspense>
  );
}
