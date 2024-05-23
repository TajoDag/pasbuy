import React, { useEffect } from "react";
import { getAllCategory } from "./service";
import { useDispatch } from "react-redux";
import { startLoading } from "@redux/loadingReducer";
import { stopLoading } from "@redux/loadingReducer";

export const Categories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    // dispatch(startLoading());
    getAllCategory()
      .then((res) => {
        setCategories(
          res.result.map((item) => ({
            ...item,
            key: item._id,
          }))
        );
      })
      .finally(() => {
        // dispatch(stopLoading());
      });
  }, []);
  return { categories };
};
