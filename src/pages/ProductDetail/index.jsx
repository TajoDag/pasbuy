import React from "react";
import { SlickSlider } from "./SlickSlider";
import { ImgProduct } from "./ImgProduct";
import { InforProduct } from "./InforProduct";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../utils/responsive";

import { Tabs } from "antd";
import { Reviews } from "./Reviews";
import { Descriptions } from "./Descriptions";
import { Recomend } from "./Recomend";
import { RelatedProduct } from "./RelatedProduct";
import { ProductQuries } from "./ProductQuries";

const items = [
  {
    key: "1",
    label: <h3>Descriptions</h3>,
    children: <Descriptions />,
  },
  {
    key: "2",
    label: <h3>Reviews</h3>,
    children: <Reviews />,
  },
];
export default () => {
  const [srcImg, setSrcImg] = React.useState(
    "https://s-cf-tw.shopeesz.com/file/59ad6855d8088686cb6f1b9969b353d0"
  );

  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <div className="wrapper">
      <div
        className="detail_container"
        style={isTablet || isMobile ? { display: "block", width: "100%" } : {}}
      >
        <div
          className="slide_slick"
          style={{ display: `${isTablet || isMobile ? "none" : "flex"}` }}
        >
          <SlickSlider setSrcImg={setSrcImg} />
        </div>
        <div
          className="wrapper_infor"
          style={
            isTablet || isMobile ? { display: "block", width: "100%" } : {}
          }
        >
          <div
            className="product_img"
            style={
              isTablet || isMobile ? { display: "block", width: "100%" } : {}
            }
          >
            <ImgProduct srcImg={srcImg} />
          </div>
          <div
            style={
              isTablet || isMobile
                ? { display: "flex", width: "100%" }
                : { display: "none" }
            }
          >
            <SlickSlider setSrcImg={setSrcImg} />
          </div>
          <div
            className="infor"
            style={
              isTablet || isMobile ? { display: "block", width: "100%" } : {}
            }
          >
            <InforProduct />
          </div>
        </div>
      </div>
      <div
        className="wrap_decription"
        style={isTablet || isMobile ? { display: "block" } : {}}
      >
        <div
          className="recommend"
          style={isTablet || isMobile ? { display: "none" } : {}}
        >
          <Recomend />
        </div>
        <div className="decription">
          <div className=" detail_decription">
            <Tabs defaultActiveKey="1" items={items} />
          </div>
          <div className="related_product detail_decription">
            <RelatedProduct />
          </div>
          <div
            className="detail_decription"
            style={
              isTablet || isMobile ? { display: "block" } : { display: "none" }
            }
          >
            <Recomend />
          </div>
          <div className="detail_decription">
            <ProductQuries />
          </div>
        </div>
      </div>
    </div>
  );
};
