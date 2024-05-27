import { IoMdStar } from "react-icons/io";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import React from "react";
import TranslateTing from "../../components/Common/TranslateTing";
import { formatPrice } from "../../utils";
import { useCurrency } from "../../context/CurrencyContext";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const array = [
  {
    id: 1,
    src: "https://s-cf-tw.shopeesz.com/file/59ad6855d8088686cb6f1b9969b353d0",
  },
  {
    id: 2,
    src: "https://s-cf-tw.shopeesz.com/file/b0a108528b0719628466793a89cc6a69",
  },
  {
    id: 3,
    src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
  },
  {
    id: 4,
    src: "https://s-cf-tw.shopeesz.com/file/991caab4081ff3d03a0da1a54c1b607e",
  },
  {
    id: 5,
    src: "https://s-cf-tw.shopeesz.com/file/f6b8f0b0a6487b769de300245e3963c9",
  },
  {
    id: 6,
    src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
  },
  {
    id: 7,
    src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
  },
  {
    id: 8,
    src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
  },
  {
    id: 9,
    src: "https://s-cf-tw.shopeesz.com/file/e0d3bdeea637bf94b4962ccdff1cdf00",
  },
];

export const RelatedProduct = () => {
  const { currency } = useCurrency();

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-arrow-next`}
        style={{ ...style }}
        onClick={onClick}
      >
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-arrow-prev`}
        style={{ ...style }}
        onClick={onClick}
      >
        <IoIosArrowBack />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="border_bottom">
        <h2>
          <TranslateTing text="Related Products" />
        </h2>
      </div>
      <Slider {...settings} className="related_wrap">
        {/* <div className="related_wrap"> */}
        {array.map((item) => (
          <div key={item.id} className="item">
            <img src={item.src} alt="" />
            <div className="infor">
              <h4 style={{ color: "red", fontWeight: "600" }}>
                {formatPrice(60, currency)}
              </h4>
              <div>
                <IoMdStar className="star_icon" />
                <IoMdStar className="star_icon" />
                <IoMdStar className="star_icon" />
                <IoMdStar className="star_icon" />
                <IoMdStar className="star_icon" />
              </div>
              <p>
                3PCS/Set Velvet Matte Lip Gloss Waterproof Natural Moisturizing
              </p>
            </div>
          </div>
        ))}
        {/* </div> */}
      </Slider>
    </div>
  );
};
