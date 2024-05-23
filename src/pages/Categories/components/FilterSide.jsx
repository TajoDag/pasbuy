import React from "react";
import { Checkbox, Slider } from "antd";
import { size } from "../utils/size";
export const menu = [
  {
    key: "1",
    name: "Women's Clothing & Fashion",
  },
  {
    key: "2",
    name: "Men's Clothing & Fashion",
  },
  {
    key: "3",
    name: "Computer & Accessories",
  },
  {
    key: "4",
    name: "Kkeys & Toy",
  },
  {
    key: "5",
    name: "Sports & Outdoor",
  },

  {
    key: "6",
    name: "Automobile & Motorcycle",
  },
  {
    key: "7",
    name: "Watches",
  },
  {
    key: "8",
    name: "Phone Accessories",
  },
  {
    key: "9",
    name: "Home Decoration & Appliance",
  },
  {
    key: "10",
    name: "Beauty, Health & Hair",
  },
];
export default () => {
  const range = [20, 50];
  const [min, setMin] = React.useState(range[0]);
  const [max, setMax] = React.useState(range[1]);
  const [sizeFilter, setSizeFilter] = React.useState([]);
  return (
    <div className="menu">
      <div className="background_white">
        <div className="border_bottom">
          <h2>Categories</h2>
        </div>
        <div className="menu_detail">
          {menu.map((item) => (
            <div key={item.key}>{item.name}</div>
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
