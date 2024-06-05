import React, { useEffect, useState } from "react";
import logo from "@assets/images/logo.png";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
  CloseOutlined,
  FrownOutlined
} from "@ant-design/icons";
import TranslateTing from "../../../../../components/Common/TranslateTing";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { useCart } from "../../../../../context/CartContext";
import { Button, Popover } from 'antd';
import { formatPrice, splitText } from "../../../../../utils";
import { useCurrency } from "../../../../../context/CurrencyContext";
const HeaderH = ({ img }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const { cartItems, totalItems, removeFromCart } = useCart();
  const { currency } = useCurrency();
  const [open, setOpen] = useState(false);
  const isAuthenticated = JSON.parse(localStorage.getItem("isLogin"));
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    if (search.trim() !== "") {
      navigate("/products", {
        state: { query: search },
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const intl = useIntl();
  const placeholderText = intl.formatMessage({ id: "placeholderSearch" });

  const viewCart = () => {
    if (cartItems.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <FrownOutlined style={{ fontSize: '24px' }} />
          <TranslateTing text="Your Cart is empty" /><p></p>
        </div>
      );
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
      <div style={{ padding: '10px', width: 300, maxWidth: '300px' }}>
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {cartItems.map(item => (
            <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
              <img src={item.images[0].url} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <div style={{ flex: 1, marginLeft: '10px' }}>
                <p style={{ margin: 0, fontWeight: 500 }}>{splitText(item.name, 40)}</p>
                <p style={{ margin: 0 }}><TranslateTing text="Qty" />: {item.quantity}</p>
                <p style={{ margin: 0 }}>{formatPrice(item.price.toFixed(2), currency)}</p>
              </div>
              <CloseOutlined style={{ cursor: 'pointer' }} onClick={() => removeFromCart(item._id)} />
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <p style={{ margin: 0 }}> <TranslateTing text="Subtotal" /></p>
            <p style={{ margin: 0 }}>{formatPrice(subtotal.toFixed(2), currency)}</p>
          </div>
          <Button style={{ backgroundColor: "#e62e04" }} type="primary" onClick={() => isAuthenticated ? navigate('/cart') : navigate('/login')} block><TranslateTing text="View cart" /></Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="header_shop">
        <div className="header_content">
          <div className="header_left">
            <div className="header_logo">
              <img src={img} className="logo" onClick={() => navigate("/")} />
            </div>
          </div>
          <div className="header_right">
            <div className="search-bar">
              <input
                type="text"
                placeholder={placeholderText}
                className="search-input"
                value={search}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button className="search-button" onClick={onSearch}>
                <SearchOutlined />
              </button>
            </div>
            <div className="header_btn">
              <div className="toolbar">
                <SyncOutlined className="icon" />
                <div className="toolbar_item">
                  <div className="total">0</div>
                  <div className="title">
                    <TranslateTing text="compare" />
                  </div>
                </div>
              </div>
              <div className="toolbar">
                <HeartOutlined className="icon" />
                <div className="toolbar_item">
                  <div className="total">0</div>
                  <div className="title">
                    <TranslateTing text="wishlist" />
                  </div>
                </div>
              </div>

              <Popover
                content={viewCart()}
                title={<TranslateTing text="Cart Items" />}
                placement="bottom"
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
              >
                <div className="toolbar" style={{ cursor: 'pointer' }}>
                  <ShoppingCartOutlined className="icon" />
                  <div className="toolbar_item">
                    <div className="total">{totalItems}</div>
                    <div className="title">
                      <TranslateTing text="cart" />
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};
export default HeaderH;
