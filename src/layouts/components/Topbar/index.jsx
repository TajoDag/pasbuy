import React from 'react';
import TopbarH from './ScreenDevice/TopbarH';
import TopbarM from './ScreenDevice/TopbarM';
import TopbarL from './ScreenDevice/TopbarL';
import { useIsLaptopOrDesktop, useIsMobile, useIsTablet } from '../../../utils/responsive';

const Topbar = () => {
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <>
      {isLaptopOrDesktop && <TopbarH />}
      {isTablet && <TopbarM />}
      {isMobile && <TopbarL />}
    </>
  );
};

export default Topbar;
