import React from "react";
import { IoMdStar } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import CrispWidget from "../../utils/CrispWidget";
import TranslateTing from "../../components/Common/TranslateTing";
import { useCurrency } from "../../context/CurrencyContext";
import { formatPrice } from "../../utils";
import { useCart } from "../../context/CartContext";
import { useDispatch } from "react-redux";
import { useIntl } from "react-intl";
import { showNotification } from "../../redux/reducers/notificationReducer";
export const InforProduct = ({ detail }) => {
  const [quantity, setQuantity] = React.useState(1);
  const { currency } = useCurrency();
  const { addToCart } = useCart();
  const dispatch = useDispatch();
  let price = detail.price;
  const handleMessageSeller = () => {
    const currentURL = window.location.href;
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call("maximize");
      window.LiveChatWidget.call("sendMessage", `I'm interested in this product: ${currentURL}`); // Gửi tin nhắn
    } else {
      console.error("LiveChatWidget is not available");
    }
  };
  const intl = useIntl();
  const Success = intl.formatMessage({ id: "Success add to cart" });
  const handleAddToCart = () => {
    const cartItem = {
      _id: detail._id,
      name: detail.name,
      images: detail.images,
      price: detail.price,
      quantity: quantity,
      totalPrice: detail.price * quantity,
    };

    addToCart(cartItem);
    dispatch(
      showNotification({
        message: Success,
        type: "success",
      })
    );
  };
  return (
    <div>
      <div
        className="border_bottom"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2>{detail.name}</h2>
        <div style={{ display: "flex", gap: "3px" }}>
          <span>
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
          </span>
          <span>
            ( <TranslateTing text="Reviews" />)
          </span>
        </div>
        <div>
          <span style={{ fontSize: "0.8rem", marginRight: "4px" }}>
            <TranslateTing text="Estimate Shipping Time:" />
          </span>
          <span>
            4 <TranslateTing text="Days" />
          </span>
        </div>
      </div>
      <div className="border_bottom">
        <div style={{ display: "flex", gap: "30px" }}>
          <div>
            <p>
              <TranslateTing text="Sold by" />:
            </p>
            <p>
              <TranslateTing text="Nice Sense" />
            </p>
          </div>
          <button
            className="button_custom_lightning"
            style={{
              padding: "5px 15px 5px 15px",
            }}
          >
            <TranslateTing text="Message Seller" />
          </button>
        </div>
      </div>
      <div className="border_bottom">
        <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
          <p>
            <TranslateTing text="Price" /> :
          </p>
          <p style={{ fontSize: "2rem", color: "red", fontWeight: "600" }}>
            {formatPrice(detail.price, currency)}
          </p>
          /
        </div>
      </div>
      <div className="border_bottom">
        <div
          style={{ display: "flex", gap: "50px" }}
          className="button_quantity"
        >
          <p>
            <TranslateTing text="Quantity" /> :
          </p>
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </button>
          <p>{quantity}</p>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>
      <div className="border_bottom">
        <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
          <p>
            <TranslateTing text="Total price" /> :
          </p>
          <p style={{ fontSize: "2rem", color: "red", fontWeight: "600" }}>
            {formatPrice(quantity * price, currency)}
          </p>
        </div>
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <div className="button_group">
          <button
            className="button_custom_lightning"
            style={{
              padding: "10px 20px 10px 20px",
            }}
            onClick={handleAddToCart}
          >
            <MdOutlineShoppingBag />
            <TranslateTing text="Add to cart" />
          </button>
          <button className="button_custom" onClick={handleMessageSeller}>
            <IoCartOutline />
            <TranslateTing text="Message Seller" />
          </button>
        </div>
        <div className="button_group" style={{ gap: "50px" }}>
          <div className="link_button">
            <TranslateTing text="Add to Wishlist" />
          </div>
          <div className="link_button">
            <TranslateTing text="Add to Compare" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "100px",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <p>
            <TranslateTing text="Refund" />:
          </p>
          <p className="link_button">
            <TranslateTing text="View policy" />
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "110px",
            alignItems: "center",
            height: "35px",
            marginTop: "10px",
          }}
        >
          <p>
            <TranslateTing text="Share" />:
          </p>
          <div style={{ display: "flex" }}>
            {/* <div style={{ background: "red", padding: "0px" }}>
            <CgMail className="icon_contact" style={{ color: "blue" }} />
            <i class="lar la-envelope jssocials-share-logo"></i>
          </div> */}
            <FaTwitterSquare
              className="icon_contact"
              style={{ color: "#00aced" }}
            />
            <FaFacebookSquare
              className="icon_contact"
              style={{ color: "#3b5998" }}
            />
            <FaLinkedin className="icon_contact" style={{ color: "#007bb6" }} />
            <FaPhoneSquare
              className="icon_contact"
              style={{ color: "#29a628" }}
            />
          </div>
        </div>
      </div>
      {/* <CrispWidget /> */}
    </div>
  );
};
