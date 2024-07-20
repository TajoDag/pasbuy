import React, { useEffect, useState } from "react";
import HomeBannerArea from "../../components/HomeBannerArea";
import BannerAds from "../../components/BannerAds";
import ListProductForType from "./components/ListProductForType";
import Top10Grid from "./components/Top10Grid";
import anh1 from "@assets/images/banner_ads/anh1.png";
import anh2 from "@assets/images/banner_ads/anh2.png";
import anh3 from "@assets/images/banner_ads/anh3.png";
import anh4 from "@assets/images/banner_ads/anh4.png";
import anh5 from "@assets/images/banner_ads/anh5.png";
import anh6 from "@assets/images/banner_ads/anh6.png";
import anh7 from "@assets/images/banner_ads/anh7.png";
import anh8 from "@assets/images/banner_ads/anh8.png";
import anh9 from "@assets/images/banner_ads/anh9.png";

import anh11 from "@assets/images/img_category/dress.png";
import anh12 from "@assets/images/img_category/vest.png";
import anh13 from "@assets/images/img_category/pcI.png";
import anh14 from "@assets/images/img_category/baby.jpg";
import anh15 from "@assets/images/img_category/sport.png";
import anh16 from "@assets/images/img_category/car.png";
import anh17 from "@assets/images/img_category/watch.png";
import anh18 from "@assets/images/img_category/phone.jpg";
import anh19 from "@assets/images/img_category/home.png";
import anh20 from "@assets/images/img_category/bag.png";
import { getCateSidebarBanner } from "../../api/utils/category";
import { getBrandSidebarBanner } from "../../api/utils/brands";
export default function Home() {
  const [categories, setCategories] = useState([
    {
      img: anh11,
      name: "Women's Clothing & Fashion",
    },
    {
      img: anh12,
      name: "Men's Clothing & Fashion",
    },
    {
      img: anh13,
      name: "Computer & Accessories",
    },
    {
      img: anh14,
      name: "Kids & Toy",
    },
    {
      img: anh15,
      name: "Sports & Outdoor",
    },
    {
      img: anh16,
      name: "Automobile & Motorcycle",
    },
    {
      img: anh17,
      name: "Watches",
    },
    {
      img: anh18,
      name: "Phone Accessories",
    },
    {
      img: anh19,
      name: "Home Decoration & Appliance",
    },
    {
      img: anh20,
      name: "Women's Fashing Bag",
    },
  ]);
  const [cate, setCate] = useState([])
  const [brands, setBrands] = useState([]);

  const listShow = [
    {
      title: "Women's Clothing & Fashion",
      idC: "664cfca9b799a395844a958c",
    },
    {
      title: "Men's Clothing & Fashion",
      idC: "664cfcb0b799a395844a9591",
    },
    {
      title: "Watches",
      idC: "664cfcd2b799a395844a95aa",
    },
    {
      title: "Sports & Outdoor",
      idC: "664cfcc6b799a395844a95a0",
    },
    {
      title: "Automobile & Motorcycle",
      idC: "664cfccdb799a395844a95a5",
    },
    {
      title: "Kids & Toy",
      idC: "664cfcc0b799a395844a959b",
    },
    {
      title: "Computer & Accessories",
      idC: "664cfcb8b799a395844a9596",
    },
  ];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const rp = await getCateSidebarBanner();
        // console.log(rp,'categories')
        setCate(rp.result)
        const updatedCategories = categories.map((category) => {
          const matchedItem = rp.result.find(
            (item) => item.name === category.name
          );
          if (matchedItem) {
            return { ...category, id: matchedItem._id };
          }
          return category;
        });
        setCategories(updatedCategories);
      } catch (error) { }
    };
    getCategories();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const rp = await getBrandSidebarBanner();
        
        setBrands(rp.result);
      } catch (error) { }
    };
    getCategories();
  }, []);


  return (
    <div className="homepage">
      <HomeBannerArea />
      <BannerAds anh1={anh1} anh2={anh2} anh3={anh3} />
      <ListProductForType title="New Products" typeUrl="isNew" typeFil="ul" />
      <ListProductForType
        title="Featured Products"
        typeUrl="featured"
        typeFil="ul"
      />
      <BannerAds anh1={anh7} anh2={anh8} anh3={anh9} />
      {cate && cate.map((item, i) =>  <ListProductForType
        title={item.name}
        typeFil="filById"
        idC={item._id}
      />)}
      {/* <ListProductForType
        title="Women's Clothing & Fashion"
        typeFil="filById"
        idC="664cfca9b799a395844a958c"
      />
      <ListProductForType
        title="Phone Accessories"
        typeFil="filById"
        idC="664cfcdab799a395844a95af"
      /> */}
      <BannerAds anh1={anh4} anh2={anh5} anh3={anh6} />
      <section className="dw_top10">
        <Top10Grid
          data={categories}
          title="Top 10 Categories"
          btn="View All Categories"
          type="categories"
        />
        <Top10Grid data={brands} title="Top 10 Brands" btn="View All Brands" type="brands" />
      </section>
    </div>
  );
}
