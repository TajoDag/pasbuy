import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { formatPrice, splitText } from "../../../../utils";
import {
  getProductByIdC,
  getProductFeatured,
  getProductNew,
} from "../../../../api/utils/products";
import { useNavigate } from "react-router-dom";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { useCurrency } from "../../../../context/CurrencyContext";

const ListProductForType = ({ title, typeUrl, typeFil, idC }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { currency } = useCurrency();

  useEffect(() => {
    const getData = async () => {
      try {
        let rp;
        if (typeFil === "ul" && typeUrl === "isNew") {
          rp = await getProductNew();
        } else if (typeFil === "ul" && typeUrl === "featured") {
          rp = await getProductFeatured();
        } else if (typeFil === "filById" && idC) {
          rp = await getProductByIdC(idC);
        }
        if (rp && rp.status) {
          setData(rp.result.products);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [typeUrl, typeFil, idC]);

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
    data &&
    data.length > 6 && (
      <section className="list_product_for_type">
        <div className="div_title">
          <h3>
            <span>
              <TranslateTing text={title} />
            </span>
          </h3>
          <div className="div_btn" onClick={() => navigate("/products")}>
            <span>
              <TranslateTing
                text="View more"
                onClick={() => navigate("/products")}
              />
            </span>
          </div>
        </div>
        <Slider {...settings} className="list_product_slider">
          {data.map((item, index) => (
            <div
              key={index}
              className="product_card"
              onClick={() => navigate(`/detail/${item._id}`)}
            >
              <img src={item.images[0].url} alt={item.name} />
              <div className="product_info">
                <span>{formatPrice(item.price, currency)}</span>
                <h4>{splitText(item.name, 40)}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    )
  );
};

export default ListProductForType;
