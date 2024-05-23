import React from "react";
import { Checkbox, Slider } from "antd";
import { Categories } from "../utils/categories";
import { Sizes } from "../utils/size";

export default ({ setBodyFilter, bodyFilter }) => {
  const range = [20, 50];
  const [min, setMin] = React.useState(range[0]);
  const [max, setMax] = React.useState(range[1]);
  const [sizeFilter, setSizeFilter] = React.useState([]);
  const { categories } = Categories();
  // const { size } = Sizes();

  return (
    <div className="menu">
      <div className="background_white">
        <div className="border_bottom">
          <h2
            className="category_all"
            onClick={() =>
              setBodyFilter({
                page: 1,
                size: 12,
              })
            }
          >
            Categories
          </h2>
        </div>
        <div className="menu_detail">
          {categories.map((item) => (
            <div
              key={item.key}
              onClick={() =>
                setBodyFilter({
                  page: 1,
                  size: 12,
                  category: item.key,
                })
              }
              style={
                item.key === bodyFilter.category
                  ? {
                      color: "blue",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="filter_price background_white">
        <div className="border_bottom">
          <h2>Price range</h2>
        </div>
        <div>
          <Slider
            range
            defaultValue={range}
            onChange={(e) => {
              setMin(e[0]);
              setMax(e[1]);
            }}
          />
          <div className="range-price">
            <p>{min}</p>
            <p>{max}</p>
          </div>
        </div>
      </div> */}
      {/* <div className="filter_size background_white">
        <div className="border_bottom">
          <h2>Filter by size</h2>
        </div>
        <div className="size_wrap">
          {size.map((item) => (
            <Checkbox
              key={item.value}
              name={item.value}
              onChange={(e) => {
                const { name, checked } = e.target;
                setSizeFilter((prev) => {
                  if (checked) {
                    return [...prev, name];
                  } else {
                    return prev.filter((item) => item !== name);
                  }
                });
              }}
            >
              {item.label}
            </Checkbox>
          ))}
        </div>
      </div> */}
    </div>
  );
};
