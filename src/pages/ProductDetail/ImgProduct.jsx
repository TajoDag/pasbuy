import React from "react";
import ReactImageMagnify from "react-image-magnify";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../utils/responsive";

export const ImgProduct = ({ srcImg }) => {
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <div>
      {isTablet || isMobile ? (
        <img className="img" src={srcImg} />
      ) : (
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "",
              isFluidWidth: true,
              src: srcImg,
            },
            largeImage: {
              src: srcImg,
              width: 1200,
              height: 1800,
            },
          }}
        />
      )}
    </div>
  );
};
