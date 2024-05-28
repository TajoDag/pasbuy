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
import { useNavigate } from "react-router-dom";
import TranslateTing from "../../../components/Common/TranslateTing";

const BottomNav = () => {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("1");
  const navigate = useNavigate()
  return (
    <div className="bottom-nav">
      <div className="nav-item" onClick={() => navigate("/")}>
        <HomeOutlined />
        <span > <TranslateTing text="Home" /></span>
      </div>
      <div className="nav-item" onClick={() => navigate("/products")}>
        <UnorderedListOutlined />
        <span><TranslateTing text="Categories" /></span>
      </div>
      <div className="nav-item">
        <div className="cart-icon">
          <ShoppingCartOutlined style={{ color: "#fff" }} />
        </div>

        <span className="card-title"><TranslateTing text="Cart" /> (0)</span>
      </div>
      <div className="nav-item">
        <BellOutlined />
        <span><TranslateTing text="Notifications" /></span>
      </div>
      <div className="nav-item" onClick={() => setOpen(true)}>
        <UserOutlined />
        <span><TranslateTing text="Account" /></span>
      </div>
      <Drawer onClose={() => setOpen(false)} open={open}>
        <MenuUser setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      </Drawer>
    </div>
  );
};
export default BottomNav;
