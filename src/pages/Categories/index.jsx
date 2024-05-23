import React from "react";
import { Categories } from "./utils/categories";

export default () => {
  const { categories } = Categories();

  return (
    <div className="category_container">
      <h1>All Categories</h1>
      {categories.map((item) => (
        <div key={item.key} className="background_white item_categories">
          <div className="border_bottom">
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
