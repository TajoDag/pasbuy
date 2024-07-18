import React from "react";
import { Categories } from "./utils/categories";
import TranslateTing from "../../components/Common/TranslateTing";
import { useNavigate } from "react-router-dom";

export default () => {
  const { categories } = Categories();
  const navigate = useNavigate();
  return (
    <div className="category_container">
      <h1>
        {" "}
        <TranslateTing text="All Categories" />
      </h1>
      {categories.map((item) => (
        <div
          key={item.key}
          className="background_white item_categories"
          onClick={() => navigate(`/products`, { state: { id: item._id } })}
        >
          <div className="border_bottom">
            <h3>
              <TranslateTing text={item.name} />
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
