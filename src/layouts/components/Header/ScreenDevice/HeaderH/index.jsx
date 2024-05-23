import React from "react";
import logo from "@assets/images/logo.png";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import TranslateTing from "../../../../../components/Common/TranslateTing";
const HeaderH = () => {

  return (
    <>
      <header className="header_shop">
        <div className="header_content">
          <div className="header_left">
            <div className="header_logo">
              <img src={logo} className="logo" />
            </div>
          </div>
          <div className="header_right">
            <div className="search-bar">
              <input
                type="text"
                placeholder="I am shopping for..."
                className="search-input"
              />
              <button className="search-button">
                <SearchOutlined />
              </button>
            </div>
            <div className="header_btn">
              <div className="toolbar">
                <SyncOutlined className="icon" />
                <div className="toolbar_item">
                  <div className="total">0</div>
                  <div className="title"><TranslateTing text='compare' /></div>
                </div>
              </div>
              <div className="toolbar">
                <HeartOutlined className="icon" />
                <div className="toolbar_item">
                  <div className="total">0</div>
                  <div className="title"><TranslateTing text='wishlist' /></div>
                </div>
              </div>
              <div className="toolbar">
                <ShoppingCartOutlined className="icon" />
                <div className="toolbar_item">
                  <div className="total">0</div>
                  <div className="title"><TranslateTing text='cart' /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderH;
