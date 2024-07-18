import { Button, Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import ToolTipLongText from "../../../utils/Longtext";
import { RenderRate } from "../../../utils/renderRate";
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoMdSync } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { Drawer } from "antd";
import FilterSide from "./FilterSide";
import { Pagination } from "antd";
import { Brands } from "../utils/brand";
import { useLocation, useNavigate } from "react-router-dom";
import TranslateTing from "../../../components/Common/TranslateTing";
import { useCurrency } from "../../../context/CurrencyContext";
import { formatPrice } from "../../../utils";

export default ({ setBodyFilter, total, products, bodyFilter }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const { currency } = useCurrency();
  const { brands } = Brands();
  const location = useLocation();
  const { id } = location.state || {};
  const [selectedBrand, setSelectedBrand] = useState(null);
  // useEffect(() => {
  //   if (id) {
  //     setBodyFilter({
  //       page: 1,
  //       size: 12,
  //       category: id,
  //     });
  //   }
  // }, [id]);
  console.log(selectedBrand);
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
          <h2>
            {" "}
            <TranslateTing text="All Products" />
          </h2>
          <div className="button_filter" onClick={() => setOpen(true)}>
            <FiFilter />
          </div>
        </div>
        <div className="select_wrap">
          <div>
            <p>
              <TranslateTing text="Brands" />
            </p>
            <Select
              placeholder={"All Brands"}
              options={brands}
              value={selectedBrand}
              onChange={(v) => {
                console.log(v, 'dđ')
                setSelectedBrand(v);
                setBodyFilter({
                  ...bodyFilter,
                  brand: v,
                  page: 1,
                });
              }}
            />
          </div>
          <div>
            <p>
              <TranslateTing text="Sort by" />
            </p>
            <Select
              placeholder={<TranslateTing text="Newest" />}
              options={[
                {
                  value: "1",
                  label: <TranslateTing text="Newest" />,
                },
                {
                  value: "2",
                  label: <TranslateTing text="Oldest" />,
                },
                {
                  value: "3",
                  label: <TranslateTing text="Price Low to High" />,
                },
                {
                  value: "4",
                  label: <TranslateTing text="Price High to Low" />,
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
        {products.map((item) => (
          <div
            key={item.key}
            className="grid_item"
            onClick={() => {
              navigate(`/detail/${item._id}`);
            }}
          >
            <div className="fast_button">
              <Tooltip
                title={<TranslateTing text="Add to Wishlist" />}
                placement="left"
              >
                <button>
                  <CiHeart />
                </button>
              </Tooltip>
              <Tooltip
                title={<TranslateTing text="Add to Compare" />}
                placement="left"
              >
                <button>
                  <IoMdSync />
                </button>
              </Tooltip>
              <Tooltip
                title={<TranslateTing text="Add to Cart" />}
                placement="left"
              >
                <button>
                  <MdOutlineShoppingCart />
                </button>
              </Tooltip>
            </div>
            <img src={item.images[0].url} alt="" />
            <div className="infor_item">
              <span>{formatPrice(item.price, currency)}</span>
              <div>{RenderRate(item.ratings)}</div>
              <div
                onClick={() => {
                  navigate(`/detail/${item._id}`);
                }}
              >
                <ToolTipLongText value={item.name} textLength={60} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          total={total}
          onChange={(page) => {
            setBodyFilter({ ...bodyFilter, page: page });
          }}
          current={bodyFilter.page}
        />
      </div>
      <Drawer
        title={<h3>Filters</h3>}
        onClose={() => setOpen(false)}
        open={open}
      >
        <FilterSide setBodyFilter={setBodyFilter} bodyFilter={bodyFilter} />
      </Drawer>
    </div>
  );
};
