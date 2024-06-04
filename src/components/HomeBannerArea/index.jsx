import SidebarLeft from "../SidebarLeft";
import SidebarRight from "../SidebarRight";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import anh1 from "@assets/images/img_category/dress.png";
import anh2 from "@assets/images/img_category/vest.png";
import anh3 from "@assets/images/img_category/pcI.png";
import anh4 from "@assets/images/img_category/baby.jpg";
import anh5 from "@assets/images/img_category/sport.png";
import anh6 from "@assets/images/img_category/car.png";
import anh7 from "@assets/images/img_category/watch.png";
import anh8 from "@assets/images/img_category/phone.jpg";
import anh9 from "@assets/images/img_category/home.png";
import TranslateTing from "../Common/TranslateTing";
import { useEffect, useState } from "react";
import { getBanner } from "../../api/utils/banner";
import { useNavigate } from "react-router-dom";

const contentStyle = {
  height: "315px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const HomeBannerArea = () => {
  const navigate = useNavigate()
  const categoriesR = [
    {
      img: anh1,
      name: "Women's Clothing & Fashion",
    },
    {
      img: anh2,
      name: "Men's Clothing & Fashion",
    },
    {
      img: anh3,
      name: "Computer & Accessories",
    },
    {
      img: anh4,
      name: "Kids & Toy",
    },
    {
      img: anh5,
      name: "Sports & Outdoor",
    },
    {
      img: anh6,
      name: "Automobile & Motorcycle",
    },
    {
      img: anh7,
      name: "Watches",
    },
    {
      img: anh8,
      name: "Phone Accessories",
    },
    {
      img: anh9,
      name: "Home Decoration & Appliance",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-slick-prev`}
        style={{ ...style, display: "block", left: "10px" }}
        onClick={onClick}
      >
        <LeftOutlined style={{ color: "black", fontSize: "16px" }} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-slick-next`}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      >
        <RightOutlined style={{ color: "black", fontSize: "16px" }} />
      </div>
    );
  };

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const getAllBanner = async () => {
      try {
        const rp = await getBanner("6657d48c85a9f04ae59d06b8");

        if (rp.result && rp.result.images) {
          const imageUrls = rp.result.images.map((image) => ({
            url: image.url,
          }));
          setFileList(imageUrls);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllBanner();
  }, []);

  return (
    <div className="home_banner_area">
      <SidebarLeft />
      <div className="container">
        <Carousel
          autoplay
          dots
          infinite={true}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
        >
          {fileList.map((item, ix) => (
            <div key={ix}>
              <div
                style={{
                  ...contentStyle,
                  backgroundImage: `url(${item.url})`,
                }}
              />
            </div>
          ))}
        </Carousel>
        <div className="categories">
          {categoriesR.map((item, index) => (
            <div key={index} className="card" onClick={() => navigate('/products')}>
              <div className="img_cate">
                <img src={item.img} alt="" />
              </div>
              <div className="name_cate">
                <TranslateTing text={`${item.name}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <SidebarRight />
    </div>
  );
};

export default HomeBannerArea;
