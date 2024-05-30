import React, { useState } from "react";
import { PiCurrencyDollar } from "react-icons/pi";
import { HiPlus } from "react-icons/hi2";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { Table } from "antd";
import { useCurrency } from "../../../../context/CurrencyContext";
import { formatPrice } from "../../../../utils";
import DateTimeComponent from "../../../../utils/DateTimeComponent";
import { TagsOrder } from "../../../../utils/TagsOrder";
import ModalWithdraw from "../Modal/ModalWithdraw";

export const Wallet = ({ user, dataDeposit, refecth, dataWithdraw }) => {
  const { currency } = useCurrency();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columnsRecharge = [
    // { title: "#", align: "center" },
    { title: <TranslateTing text="Trading code" />, align: "center", dataIndex: "code" },
    {
      title: <TranslateTing text="Date" />,
      align: "center",
      render: (text) => <DateTimeComponent dateString={text.createdAt} />,
    },
    {
      title: <TranslateTing text="Amount" />,
      align: "center",
      dataIndex: "amount",
      render: (text) => <>{formatPrice(text, currency)}</>,
    },

    { title: <TranslateTing text="Status" />, align: "center", dataIndex: "status", render: (value) => TagsOrder(value), },
  ];
  const columnsRequest = [
    { title: <TranslateTing text="Trading code" />, align: "center", dataIndex: "code" },
    {
      title: <TranslateTing text="Date" />,
      align: "center",
      render: (text) => <DateTimeComponent dateString={text.createdAt} />,
    },
    {
      title: <TranslateTing text="Amount" />,
      align: "center",
      dataIndex: "amount",
      render: (text) => <>{formatPrice(text, currency)}</>,
    },
    { title: <TranslateTing text="Status" />, align: "center", dataIndex: "status", render: (value) => TagsOrder(value) },
    { title: <TranslateTing text="Remark" />, align: "center", dataIndex: "note" },
    { title: <TranslateTing text="Message" />, align: "center", dataIndex: "message" },
  ];
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
          <p style={{ fontWeight: "bolder" }}>
            {" "}
            {formatPrice(user.point, currency)}
          </p>
          <p style={{ fontSize: "16px", opacity: "0.8" }}>
            <TranslateTing text="Wallet Balance" />
          </p>
        </div>
        {/* <div className="card_item">
          <p style={{ fontSize: "60px" }}>
            <HiPlus />
          </p>
          <p style={{ color: "red", fontSize: "18px" }}>
            <TranslateTing text="Offline Recharge Wallet" />
          </p>
        </div> */}
        <div className="bg_2 card_item" onClick={() => {
          showModal(true);
        }}>
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
        </div>
        <Table
          columns={columnsRecharge}
          scroll={{ x: "max-content" }}
          dataSource={dataDeposit}
        />
      </div>
      <div className="background_white" style={{ marginTop: "20px" }}>
        <div className="border_bottom">
          <h3>
            <TranslateTing text="Withdraw Request History" />
          </h3>

        </div>
        <Table columns={columnsRequest} scroll={{ x: "max-content" }} dataSource={dataWithdraw} />
      </div>
      <ModalWithdraw onClose={handleCancel} open={isModalOpen} point={user.point} refecth={refecth} />
    </div>
  );
};
