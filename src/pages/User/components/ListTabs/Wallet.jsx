import React from "react";
import { PiCurrencyDollar } from "react-icons/pi";
import { HiPlus } from "react-icons/hi2";
import TranslateTing from "../../../../components/Common/TranslateTing";

export const Wallet = () => {
  return (
    <div className="wallet_container">
      <h2>Wallet</h2>
      <div className="wallet_infor">
        <div className="bg_1 card_item">
          <p style={{ fontSize: "40px" }}>
            <PiCurrencyDollar />
          </p>
          <p style={{ fontWeight: "bolder" }}>$0.00</p>
          <p style={{ fontSize: "16px", opacity: "0.8" }}>Wallet Balance</p>
        </div>
        <div className="card_item">
          <p style={{ fontSize: "70px" }}>
            <HiPlus />
          </p>
          <p style={{ color: "red", fontSize: "18px" }}>
            <TranslateTing text="Offline Recharge Wallet" />
          </p>
        </div>
        <div className="bg_2 card_item">
          <p style={{ fontSize: "70px" }}>
            <HiPlus />
          </p>
          <p style={{ fontSize: "18px" }}>
            <TranslateTing text="Send Withdraw Request" />
          </p>
        </div>
      </div>
      <div className="background_white"></div>
    </div>
  );
};
