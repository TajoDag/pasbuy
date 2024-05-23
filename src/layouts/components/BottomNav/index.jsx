import React from "react";
import {
  BellOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <HomeOutlined />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <UnorderedListOutlined />
        <span>Categories</span>
      </div>
      <div className="nav-item">
        <div className="cart-icon">
          <ShoppingCartOutlined style={{color: '#fff'}}/>
        </div>

        <span className="card-title">Cart (0)</span>
      </div>
      <div className="nav-item">
        <BellOutlined />
        <span>Notifications</span>
      </div>
      <div className="nav-item">
        <UserOutlined />
        <span>Account</span>
      </div>
    </div>
  );
};
export default BottomNav;
