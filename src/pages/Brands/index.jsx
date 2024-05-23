import React from "react";
import { Brands } from "./utils/brand";
export default () => {
  const { brands } = Brands();

  return (
    <div className="brands_container ">
      <div className="background_white brand_grid">
        {brands.map((item) => (
          <div className="item" key={item.key}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
