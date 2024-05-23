import { Button, Select, Tooltip } from "antd";
import React from "react";
import { product } from "../utils/product";
import ToolTipLongText from "../../../utils/Longtext";
import { RenderRate } from "../../../utils/renderRate";
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoMdSync } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { brands } from "../utils/brand";
import { FiFilter } from "react-icons/fi";
import { Drawer } from "antd";
import FilterSide from "./FilterSide";
import { Pagination } from "antd";

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="product_wrap">
      <div className="header_filter">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h2>All Products</h2>
          <div className="button_filter" onClick={() => setOpen(true)}>
            <FiFilter />
          </div>
        </div>
        <div className="select_wrap">
          <div>
            <p>Brands</p>
            <Select
              placeholder={"All Brands"}
              options={brands}
              defaultValue={"1"}
            />
          </div>
          <div>
            <p>Sort by</p>
            <Select
              placeholder={"Newest"}
              options={[
                {
                  value: "1",
                  label: "Newest",
                },
                {
                  value: "2",
                  label: "Oldest",
                },
                {
                  value: "3",
                  label: "Price Low to High",
                },
                {
                  value: "4",
                  label: "Price High to Low",
                },
              ]}
            />
          </div>
        </div>
        {/* <div className="button_filter" onClick={() => setOpen(true)}>
          <FiFilter />
        </div> */}
      </div>
      <div className="product_grid">
        {product.map((item) => (
          <div key={item.id} className="grid_item">
            <div className="fast_button">
              <Tooltip title="Add to Wishlist" placement="left">
                <button>
                  <CiHeart />
                </button>
              </Tooltip>
              <Tooltip title="Add to Compare" placement="left">
                <button>
                  <IoMdSync />
                </button>
              </Tooltip>
              <Tooltip title="Add to Cart" placement="left">
                <button>
                  <MdOutlineShoppingCart />
                </button>
              </Tooltip>
            </div>
            <img src={item.image} alt="" />
            <div className="infor_item">
              <span>${item.price}</span>
              <div>{RenderRate(item.rate)}</div>
              <ToolTipLongText value={item.name} textLength={60} />
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={500} />
      </div>
      <Drawer
        title={<h3>Filters</h3>}
        onClose={() => setOpen(false)}
        open={open}
      >
        <FilterSide />
      </Drawer>
    </div>
  );
};
