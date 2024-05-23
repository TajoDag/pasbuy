import React from "react";
import FilterSide from "./components/FilterSide";
import ProductGrid from "./components/ProductGrid";

export default () => {
  return (
    <div className="categories_container">
      <FilterSide />
      <ProductGrid />
    </div>
  );
};
