import React, { useEffect } from "react";
import { getAllBrands } from "./service";
import { useDispatch } from "react-redux";
import { startLoading } from "@redux/loadingReducer";
import { stopLoading } from "@redux/loadingReducer";
export const Brands = () => {
  const dispatch = useDispatch();

  const [brands, setBrands] = React.useState([]);
  useEffect(() => {
    dispatch(startLoading());
    getAllBrands()
      .then((res) => {
        setBrands(
          res.result.map((item) => ({
            ...item,
            key: item._id,
          }))
        );
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  }, []);
  return { brands };
};
