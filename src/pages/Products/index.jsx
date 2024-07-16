import React, { useEffect, useState } from "react";
import FilterSide from "./components/FilterSide";
import ProductGrid from "./components/ProductGrid";
import { Products } from "./utils/product";
import { useLocation } from "react-router-dom";

export default () => {
  const [total, setTotal] = React.useState(0);
  const location = useLocation();
  const searchQuery = (location.state?.query && location.state?.query) || "";
  const { id } = location.state || {};
  const [bodyFilter, setBodyFilter] = useState({
    page: 1,
    size: 12,
    brand: "",
    name: searchQuery,
    category: id || "",
  });
  useEffect(() => {
    if (id) {
      setBodyFilter((prevFilter) => ({
        ...prevFilter,
        category: id,
      }));
    }
  }, [id]);

  useEffect(() => {
    if (searchQuery) {
      setBodyFilter((prevFilter) => ({
        ...prevFilter,
        name: searchQuery,
      }));
    }
  }, [searchQuery]);
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
