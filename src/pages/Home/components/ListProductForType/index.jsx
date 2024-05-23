import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anh1 from "@assets/images/products/p1.png";
import anh2 from "@assets/images/products/p2.png";
import anh3 from "@assets/images/products/p3.png";
import anh4 from "@assets/images/products/p4.png";
import anh5 from "@assets/images/products/p5.png";
import anh6 from "@assets/images/products/p6.png";
import anh7 from "@assets/images/products/p7.png";
import anh8 from "@assets/images/products/p8.png";
import anh9 from "@assets/images/products/p9.png";
import anh10 from "@assets/images/products/p10.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { splitText } from "../../../../utils";
const ListProductForType = () => {
    const products = [
        {
            img: anh1,
            name: "PowerPac Travel Jug, Foldable Electric Jug",
            price: "$151.71",
        },
        { img: anh2, name: "EuropAce Tower Fan w Remote", price: "$207.74" },
        { img: anh3, name: "Airbot Hypersonics Max", price: "$649.74" },
        {
            img: anh4,
            name: "PHILIPS Viva Collection Kettle 1.7L",
            price: "$171.60",
        },
        { img: anh5, name: "LifePro DH24 2-in-1 Dehumidifier", price: "$431.05" },
        { img: anh6, name: "SHARP 25L Microwave Oven", price: "$403.00" },
        { img: anh7, name: "Product 7", price: "$123.45" },
        { img: anh8, name: "Product 8", price: "$234.56" },
        { img: anh9, name: "Product 9", price: "$345.67" },
        { img: anh10, name: "Product 10", price: "$456.78" },
    ];
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
        <section className="list_product_for_type">
            <div className="div_title">
                <h3>
                    <span>New Products</span>
                </h3>
                <div className="div_btn">
                    <span>View more</span>
                </div>
            </div>
            <Slider {...settings} className="list_product_slider">
                {products.map((item, index) => (
                    <div key={index} className="product_card">
                        <img src={item.img} alt={item.name} />
                        <div className="product_info">
                            <span>{item.price}</span>
                            <h4>{splitText(item.name, 42)}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ListProductForType;
