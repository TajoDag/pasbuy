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
import { useActiveMenu } from "../../../context/ActiveMenu";
import { useCart } from "../../../context/CartContext";
import ChatIcon from "../../../pages/Chat/ChatIcon"
const BottomNav = () => {
  const { openMenu, setOpenMenu } = useActiveMenu();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const isAuthenticated = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <div className="bottom-nav">
      <div className="nav-item" onClick={() => navigate("/")}>
        <HomeOutlined />
        <span>
          <TranslateTing text="Home" />
        </span>
      </div>
      <div className="nav-item" onClick={() => navigate("/products")}>
        <UnorderedListOutlined />
        <span>
          <TranslateTing text="Categories" />
        </span>
      </div>
      <div className="nav-item" onClick={() => isAuthenticated ? navigate('/cart') : navigate('/login')}>
        <div className="cart-icon">
          <ShoppingCartOutlined style={{ color: "#fff" }} />
        </div>

        <span className="card-title">
          <TranslateTing text="Cart" /> ({totalItems})
        </span>
      </div>
      <div className="nav-item" onClick={() => setOpenMenu(true)}>
        <UserOutlined />
        <span>
          <TranslateTing text="Account" />
        </span>
      </div>
      <div className="nav-item">
        {/* <BellOutlined /> */}
        {/* <span>
        </span> */}
        {isAuthenticated === true && (
          <ChatIcon initialMessage={`Product link: ${window.location.href}`} />
        )}
      </div>

      <Drawer onClose={() => setOpenMenu(false)} open={openMenu}>
        <MenuUser />
      </Drawer>
    </div>
  );
};
export default BottomNav;
