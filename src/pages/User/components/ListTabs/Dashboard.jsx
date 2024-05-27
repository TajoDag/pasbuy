import React, { useEffect, useState } from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../../redux/reducers/notificationReducer";
import { getAgencyByHomeAgentId } from "../../../../api/utils/agency";
import { Button, Space, Table } from "antd";
import { FaEye } from "react-icons/fa";

export const Dashboard = ({ data, totalOrderNotSuccess }) => {

  const column = [
    {
      title: "#",
      dataIndex: "stt",
    },
    {
      title: <TranslateTing text="Customer" />,
      // dataIndex: "name",
    },
    {
      title: <TranslateTing text="Phone number" />,
      // dataIndex: "name",
    },
    {
      title: <TranslateTing text="Note" />,
    },
    {
      title: <TranslateTing text="Status" />,
      // dataIndex: "quantity",
    },
    {
      title: <TranslateTing text="Total price" />,
      render: (_, record) => (
        <>{formatPrice(record.price * record.quantity, currency)}</>
      ),
    },
    {
      title: <TranslateTing text="Order creator" />,
      // dataIndex: "quantity",
    },
    {
      title: " ",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              icon={<FaEye />}
            // onClick={() => {
            //   showModal(true);
            //   setIdOrder(record._id);
            //   setDataItems(record.orderItems);
            // }}
            />
          </Space>
        );
      },
    },
  ];
  return (
    <div className="tab_layout">
      <h2>
        <TranslateTing text="Dashboard" />
      </h2>
      <div className="card_wrap">
        <div className="bg_1">
          <p>
            {data?.length}  <TranslateTing text="Products" />
          </p>
          <p>
            <TranslateTing text="in your Stock" />
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.3)"
              fill-opacity="1"
              d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="bg_2">
          <p>
            0 <TranslateTing text="Products" />
          </p>
          <p>
            <TranslateTing text="in your Wishlist" />
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.3)"
              fill-opacity="1"
              d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="bg_3">
          <p>
            {totalOrderNotSuccess} <TranslateTing text="Products" />
          </p>
          <p>
            <TranslateTing text="in your Order" />
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.3)"
              fill-opacity="1"
              d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,218.7C373.3,203,427,149,480,117.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,149.3C853.3,149,907,107,960,112C1013.3,117,1067,171,1120,202.7C1173.3,235,1227,245,1280,213.3C1333.3,181,1387,107,1413,69.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="background_white" style={{ marginTop: "20px", paddingBottom: 10 }}>
        <div className="border_bottom">
          <h2>
            <TranslateTing text="Orders" />
          </h2>

          <Button>  <TranslateTing text="New order" /></Button>
        </div>
        <div style={{ padding: 10 }}>
          <Table
            columns={column}
            scroll={{ x: "max-content" }}
            dataSource={[]}
          />
        </div>
      </div>
    </div>
  );
};
