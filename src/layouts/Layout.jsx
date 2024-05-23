import React from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import { useIsMobile, useIsTablet } from "../utils/responsive";
import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Service from "./components/ServiceSection";

export default function Layout({ children }) {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <>
      <Topbar />
      <div className="header_main">
        <Header />
        <HeaderNav />
      </div>

      {children}
      <Service />
      {(isTablet || isMobile) && <BottomNav />}
      <Footer />
    </>
  );
}
