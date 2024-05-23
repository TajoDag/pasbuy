import React, { useEffect } from "react";
import { getAllSizes } from "./service";
export const Sizes = () => {
  const [sizes, setSizes] = React.useState([]);
  useEffect(() => {
    getAllSizes().then((res) => {
      console.log(res);
      setSizes(
        res.result.products.map((item) => ({
          ...item,
          key: item._id,
        }))
      );
      setTotal(res.result.pagination.total);
    });
  }, []);
  return { sizes };
};
