import React from "react";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../utils/responsive";
export const SlickSlider = ({ setSrcImg }) => {
  const [itemPick, setItemPick] = React.useState(null);
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const array = [
    {
      id: 1,
      src: "https://s-cf-tw.shopeesz.com/file/59ad6855d8088686cb6f1b9969b353d0",
    },
    {
      id: 2,
      src: "https://s-cf-tw.shopeesz.com/file/ab4d9bf7275405b278628110d1199a80",
    },
    {
      id: 3,
      src: "https://s-cf-tw.shopeesz.com/file/75cf85b69f731f581c94266336e5ef66",
    },
    {
      id: 4,
      src: "https://s-cf-tw.shopeesz.com/file/56a763fe110a8ae6c9519bcf8155b8ac",
    },
    {
      id: 5,
      src: "https://s-cf-tw.shopeesz.com/file/f6b8f0b0a6487b769de300245e3963c9",
    },
    {
      id: 6,
      src: "https://s-cf-tw.shopeesz.com/file/56a763fe110a8ae6c9519bcf8155b8ac",
    },
    {
      id: 7,
      src: "https://s-cf-tw.shopeesz.com/file/f6b8f0b0a6487b769de300245e3963c9",
    },
    {
      id: 8,
      src: "https://s-cf-tw.shopeesz.com/file/75cf85b69f731f581c94266336e5ef66",
    },
  ];
  const handlePick = (item) => {
    setSrcImg(item.src);
    setItemPick(item.id);
  };
  return (
    <div
      className="custom_scroll"
      style={
        isTablet || isMobile
          ? { display: "flex", overflowY: "auto", width: "100%" }
          : { overflowY: "auto", height: "500px", direction: "rtl" }
      }
    >
      {array.map((item) => (
        <div
          className="img_slider"
          key={item.id}
          style={
            isTablet || isMobile
              ? {
                  border: `${
                    itemPick === item.id ? "2px solid red" : "1px solid #ccc"
                  }`,
                  width: "70px",
                }
              : {
                  border: `${
                    itemPick === item.id ? "2px solid red" : "1px solid #ccc"
                  }`,
                }
          }
          onClick={() => handlePick(item)}
        >
          <img src={item.src} alt="" />
        </div>
      ))}
    </div>
  );
};
