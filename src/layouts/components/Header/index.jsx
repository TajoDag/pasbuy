import React, { useEffect, useState } from "react";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../../utils/responsive";
import HeaderH from "./ScreenDevice/HeaderH";
import HeaderL from "./ScreenDevice/HeaderL";
import { getLogoHeader } from "../../../api/utils/logo";

const Header = () => {
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const [detailLogoHeader, setDetailLogoHeader] = useState();
  useEffect(() => {
    const getDetailLogoHeader = async () => {
      try {
        const rp = await getLogoHeader("6656784a2de1279e93bcc91a");
        if (rp.status) {
          setDetailLogoHeader(rp.result.images.url);
        }
      } catch (err) {
      }
    };
    getDetailLogoHeader();
  },[])
  return (
    <>
      {(isLaptopOrDesktop || isTablet) && <HeaderH img={detailLogoHeader}/>}
      {isMobile && <HeaderL img={detailLogoHeader}/>}
    </>
  );
};
export default Header;
