import React from "react";
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

export default function Home() {
    return (
        <div className="homepage">
            <HomeBannerArea />
            <BannerAds anh1={anh1} anh2={anh2} anh3={anh3} />
            <ListProductForType />
            <BannerAds anh1={anh4} anh2={anh5} anh3={anh6} />
            <section className="dw_top10">
                <Top10Grid title="Top 10 Categories" btn="View All Categories" />
                <Top10Grid title="Top 10 Brands" btn="View All Brands" />
            </section>
        </div>
    );
}
