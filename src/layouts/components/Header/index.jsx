import React, { useState } from "react";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../../utils/responsive";
import HeaderH from "./ScreenDevice/HeaderH";
import HeaderL from "./ScreenDevice/HeaderL";

const Header = () => {
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <>
      {(isLaptopOrDesktop || isTablet) && <HeaderH />}
      {isMobile && <HeaderL />}
    </>
  );
};
export default Header;
