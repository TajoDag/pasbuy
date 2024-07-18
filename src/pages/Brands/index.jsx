import React from "react";
import { Brands } from "./utils/brand";
import { useNavigate } from "react-router-dom";
export default () => {
  const { brands } = Brands();
  const navigate = useNavigate();
  return (
    <div className="brands_container ">
      <div className="background_white brand_grid">
        {brands.map((item) => (
          <div
            className="item"
            key={item.key}
            onClick={() =>
              navigate(`/products`, { state: { idBrand: item._id } })
            }
          >
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
