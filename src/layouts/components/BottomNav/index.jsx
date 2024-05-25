import React from "react";
import {
  BellOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import { MenuUser } from "../../../pages/User/components/MenuUser";

const BottomNav = () => {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("1");
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
          <ShoppingCartOutlined style={{ color: "#fff" }} />
        </div>

        <span className="card-title">Cart (0)</span>
      </div>
      <div className="nav-item">
        <BellOutlined />
        <span>Notifications</span>
      </div>
      <div className="nav-item" onClick={() => setOpen(true)}>
        <UserOutlined />
        <span>Account</span>
      </div>
      <Drawer onClose={() => setOpen(false)} open={open}>
        <MenuUser setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      </Drawer>
    </div>
  );
};
export default BottomNav;
