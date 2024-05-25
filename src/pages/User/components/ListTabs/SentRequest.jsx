import { Table } from "antd";
import React from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";

const columns = [
  {
    title: "#",
  },
  {
    title: <TranslateTing text="Date" />,
  },
  {
    title: <TranslateTing text="Order Id" />,
  },
  {
    title: <TranslateTing text="Product" />,
  },
  {
    title: <TranslateTing text="Amount" />,
  },
  {
    title: <TranslateTing text="Status" />,
  },
];

export const SentRequest = () => {
  return (
    <div className="background_white">
      <div className="border_bottom">
        <h2>
          <TranslateTing text="Applied Refund Request" />
        </h2>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Table columns={columns} scroll={{ x: "max-content" }} />
      </div>
    </div>
  );
};
