import React, { useEffect } from "react";
import { getAllCategory } from "./service";
export const Categories = () => {
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    getAllCategory().then((res) => {
      setCategories(
        res.result.map((item) => ({
          ...item,
          key: item._id,
        }))
      );
    });
  }, []);
  return { categories };
};
