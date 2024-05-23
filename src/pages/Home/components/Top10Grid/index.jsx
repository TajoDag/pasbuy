import React from "react";
import anh1 from "@assets/images/img_category/dress.png";
import anh2 from "@assets/images/img_category/vest.png";
import anh3 from "@assets/images/img_category/pcI.png";
import anh4 from "@assets/images/img_category/baby.jpg";
import anh5 from "@assets/images/img_category/sport.png";
import anh6 from "@assets/images/img_category/car.png";
import anh7 from "@assets/images/img_category/watch.png";
import anh8 from "@assets/images/img_category/phone.jpg";
import anh9 from "@assets/images/img_category/home.png";
import anh10 from "@assets/images/img_category/bag.png";

const Top10Grid = ({ title, btn }) => {
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
        {
            img: anh10,
            name: "Women's Fashing Bag",
        },
    ];
    return (
        <div className="top_10_grid">
            <div className="div_title">
                <h3>
                    <span>{title}</span>
                </h3>
                <div className="div_btn">
                    <span>{btn}</span>
                </div>
            </div>
            <div className="list_categories_top10">
                {categoriesR.map((item, index) => (
                    <div key={index} className="category">
                        <div className="img_cate">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="name_cate">
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Top10Grid;
