import React from "react";
import FilterSide from "./components/FilterSide";
import ProductGrid from "./components/ProductGrid";
import { Products } from "./utils/product";
import { useLocation } from "react-router-dom";

export default () => {
  const [total, setTotal] = React.useState(0);
  const location = useLocation();
  const searchQuery = location.state?.query || "";
  const [bodyFilter, setBodyFilter] = React.useState({
    page: 1,
    size: 12,
    brand: "",
    name: searchQuery
  });
  const { products } = Products({ bodyFilter, setTotal });

  return (
    <div className="categories_container">
      <FilterSide setBodyFilter={setBodyFilter} bodyFilter={bodyFilter} />
      <ProductGrid
        total={total}
        products={products}
        setBodyFilter={setBodyFilter}
        bodyFilter={bodyFilter}
      />
    </div>
  );
};
