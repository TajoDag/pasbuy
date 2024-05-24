import React, { useEffect } from "react";
import { SlickSlider } from "./SlickSlider";
import { ImgProduct } from "./ImgProduct";
import { InforProduct } from "./InforProduct";
import {
  useIsLaptopOrDesktop,
  useIsMobile,
  useIsTablet,
} from "../../utils/responsive";
import { useDispatch } from "react-redux";
import { startLoading } from "@redux/loadingReducer";
import { stopLoading } from "@redux/loadingReducer";

import { Tabs } from "antd";
import { Reviews } from "./Reviews";
import { Descriptions } from "./Descriptions";
import { Recomend } from "./Recomend";
import { RelatedProduct } from "./RelatedProduct";
import { ProductQuries } from "./ProductQuries";
import { getDetailProduct } from "./utils/service";
import { useParams } from "react-router-dom";
import TranslateTing from "../../components/Common/TranslateTing";

export default () => {
  const dispatch = useDispatch();
  const [imgSlick, setImgSlick] = React.useState([]);
  const [srcImg, setSrcImg] = React.useState("");
  const [detail, setDetail] = React.useState({});
  const isLaptopOrDesktop = useIsLaptopOrDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const params = useParams();
  const id = params._id;
  const items = [
    {
      key: "1",
      label: <h3><TranslateTing text="Descriptions" /></h3>,
      children: <Descriptions detail={detail} />,
    },
    {
      key: "2",
      label: <h3><TranslateTing text="Reviews" /></h3>,
      children: <Reviews detail={detail} />,
    },
  ];
  useEffect(() => {
    dispatch(startLoading());
    getDetailProduct(id)
      .then((res) => {
        setDetail(res.result);
        setImgSlick(
          res.result.images.map((item) => ({
            ...item,
            key: item.public_id,
          }))
        );
        setSrcImg(res.result.images[0].url);
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  }, [id]);
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
          <SlickSlider setSrcImg={setSrcImg} imgSlick={imgSlick} />
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
            <SlickSlider setSrcImg={setSrcImg} imgSlick={imgSlick} />
          </div>
          <div
            className="infor"
            style={
              isTablet || isMobile ? { display: "block", width: "100%" } : {}
            }
          >
            <InforProduct detail={detail} />
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
          <Recomend detail={detail} />
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
