import React from "react";
import { IoMdStar } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
export const InforProduct = () => {
  const [quantity, setQuantity] = React.useState(1);
  let price = 1000;
  return (
    <div>
      <div className="border_bottom">
        <h2>Dyson V8 Slim ™ Fluffy Cordless Vacuum Cleaner</h2>
        <div style={{ display: "flex", gap: "3px" }}>
          <span>
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
            <IoMdStar className="star_icon" />
          </span>
          <span>(Reviews)</span>
        </div>
        <div>
          <span style={{ fontSize: "0.7rem" }}>Estimate Shipping Time: </span>
          <span>4 Days</span>
        </div>
      </div>
      <div className="border_bottom">
        <div style={{ display: "flex", gap: "30px" }}>
          <div>
            <p>Sold by:</p>
            <p>Nice Sense</p>
          </div>
          <button
            className="button_custom_lightning"
            style={{
              padding: "5px 15px 5px 15px",
            }}
          >
            Message Seller
          </button>
        </div>
      </div>
      <div className="border_bottom">
        <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
          <p>Price:</p>
          <p style={{ fontSize: "2rem", color: "red", fontWeight: "600" }}>
            ${price}
          </p>
          /
        </div>
      </div>
      <div className="border_bottom">
        <div
          style={{ display: "flex", gap: "50px" }}
          className="button_quantity"
        >
          <p>Quantity:</p>
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
          <p>Total price:</p>
          <p style={{ fontSize: "2rem", color: "red", fontWeight: "600" }}>
            ${quantity * price}
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
          >
            <MdOutlineShoppingBag />
            Add to cart
          </button>
          <button className="button_custom">
            <IoCartOutline />
            Buy now
          </button>
        </div>
        <div className="button_group" style={{ gap: "50px" }}>
          <div className="link_button">Add to Wishlist</div>
          <div className="link_button">Add to compares</div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "100px",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <p>Refund:</p>
          <p className="link_button">View policy</p>
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
          <p>Share:</p>
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
    </div>
  );
};
