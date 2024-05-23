import React from "react";


const BannerAds = ({ anh1, anh2, anh3 }) => {
    return (
        <section className="banner_ads">
            <div className="image">
                <img src={anh1} alt="" />
            </div>
            <div className="image">
                <img src={anh2} alt="" />
            </div>
            <div className="image">
                <img src={anh3} alt="" />
            </div>
        </section>
    );
};

export default BannerAds;
