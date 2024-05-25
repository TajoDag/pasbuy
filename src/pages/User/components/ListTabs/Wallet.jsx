import React from "react";
import { PiCurrencyDollar } from "react-icons/pi";
import { HiPlus } from "react-icons/hi2";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { Table } from "antd";

const columnsRecharge = [
  { title: "#", align: "center" },
  { title: <TranslateTing text="Date" />, align: "center" },
  { title: <TranslateTing text="Amount" />, align: "center" },
  { title: <TranslateTing text="Payment Method" />, align: "center" },
  { title: <TranslateTing text="Approval" />, align: "center" },
];
const columnsRequest = [
  { title: "#" },
  { title: <TranslateTing text="Date" />, align: "center" },
  { title: <TranslateTing text="Amount" />, align: "center" },
  { title: <TranslateTing text="Type" />, align: "center" },
  { title: <TranslateTing text="Status" />, align: "center" },
  { title: <TranslateTing text="Withdraw Type" />, align: "center" },
  { title: <TranslateTing text="Remark" />, align: "center" },
  { title: <TranslateTing text="Message" />, align: "center" },
];

export const Wallet = () => {
  return (
    <div className="wallet_container">
      <h2>
        <TranslateTing text="Wallet" />
      </h2>
      <div className="wallet_infor">
        <div className="bg_1 card_item">
          <p style={{ fontSize: "40px" }}>
            <PiCurrencyDollar />
          </p>
          <p style={{ fontWeight: "bolder" }}>$0.00</p>
          <p style={{ fontSize: "16px", opacity: "0.8" }}>
            <TranslateTing text="Wallet Balance" />
          </p>
        </div>
        <div className="card_item">
          <p style={{ fontSize: "60px" }}>
            <HiPlus />
          </p>
          <p style={{ color: "red", fontSize: "18px" }}>
            <TranslateTing text="Offline Recharge Wallet" />
          </p>
        </div>
        <div className="bg_2 card_item">
          <p style={{ fontSize: "60px" }}>
            <HiPlus />
          </p>
          <p style={{ fontSize: "18px" }}>
            <TranslateTing text="Send Withdraw Request" />
          </p>
        </div>
      </div>
      <div className="background_white" style={{ marginTop: "20px" }}>
        <div className="border_bottom">
          <h3>
            <TranslateTing text="Wallet Recharge History" />
          </h3>
          <Table columns={columnsRecharge} scroll={{ x: "max-content" }} />
        </div>
      </div>
      <div className="background_white" style={{ marginTop: "20px" }}>
        <div className="border_bottom">
          <h3>
            <TranslateTing text="Withdraw Request History" />
          </h3>
          <Table columns={columnsRequest} scroll={{ x: "max-content" }} />
        </div>
      </div>
    </div>
  );
};
