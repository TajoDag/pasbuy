import React, { useEffect } from "react";
import { getAllBrands } from "./service";
export const Brands = () => {
  const [brands, setBrands] = React.useState([]);
  useEffect(() => {
    getAllBrands().then((res) => {
      const updatedBrands = [
        { value: "", label: "All brands" },
        ...res.result.map((item) => ({
          value: item._id,
          label: item.name,
        })),
      ];
      setBrands(updatedBrands);
    });
  }, []);
  return { brands };
};
