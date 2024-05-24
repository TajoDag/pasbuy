import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "#",
  },
  {
    title: "Date",
  },
  {
    title: "Order Id",
  },
  {
    title: "Product",
  },
  {
    title: "Amount",
  },
  {
    title: "Status",
  },
];

export const SentRequest = () => {
  return (
    <div className="background_white">
      <div className="border_bottom">
        <h2>Applied Refund Request</h2>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Table columns={columns} />
      </div>
    </div>
  );
};
