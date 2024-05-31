import React, { useState } from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { Button, Drawer, Modal, Space, Table } from "antd";
import DateTimeComponent from "../../../../utils/DateTimeComponent";
import { formatPrice } from "../../../../utils";
import { useCurrency } from "../../../../context/CurrencyContext";
import { TagsOrder } from "../../../../utils/TagsOrder";
import { FaEye } from "react-icons/fa";
import { useIsMobile } from "../../../../utils/responsive";

export const PurchaseHistory = ({ dataOrders }) => {
  const { currency } = useCurrency();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idOrder, setIdOrder] = useState("");
  const [dataItems, setDataItems] = useState([]);
  const isMobile = useIsMobile();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "stt",
    },
    {
      title: <TranslateTing text="Date" />,
      render: (text) => <DateTimeComponent dateString={text.createdAt} />,
    },
    {
      title: <TranslateTing text="Order Id" />,
      dataIndex: "_id",
    },
    {
      title: <TranslateTing text="Amount" />,
      dataIndex: "totalPrice",
      render: (text) => <>{formatPrice(text, currency)}</>,
    },
    {
      title: <TranslateTing text="Status" />,
      dataIndex: "orderStatus",
      render: (value) => TagsOrder(value),
    },
    {
      title: <TranslateTing text="Orders location" />,
      dataIndex: "orderLocation",
      render: (value) => <TranslateTing text={value} />,
    },
    {
      title: " ",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              icon={<FaEye />}
              onClick={() => {
                showModal(true);
                setIdOrder(record._id);
                setDataItems(record.orderItems);
              }}
            />
          </Space>
        );
      },
    },
  ];
  const columnItems = [
    {
      title: <TranslateTing text="Product name" />,
      dataIndex: "name",
    },
    {
      title: <TranslateTing text="Price" />,
      dataIndex: "price",
      render: (text) => <>{formatPrice(text, currency)}</>,
    },
    {
      title: <TranslateTing text="Quantity" />,
      dataIndex: "quantity",
    },
    {
      title: <TranslateTing text="Amount" />,
      render: (_, record) => (
        <>{formatPrice(record.price * record.quantity, currency)}</>
      ),
    },
  ];
  return (
    <div className="background_white">
      <div className="border_bottom">
        <h2>
          <TranslateTing text="Purchase History" />
        </h2>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Table
          columns={columns}
          scroll={{ x: "max-content" }}
          dataSource={dataOrders}
        />
      </div>
      {isMobile ? (
        <Drawer
          title={
            <div>
              <TranslateTing text="Order" /> - {idOrder}
            </div>
          }
          width={720}
          onClose={handleCancel}
          visible={isModalOpen}
          bodyStyle={{ paddingBottom: 80 }}
          footer={null}
        >
          <Table columns={columnItems} dataSource={dataItems} />
        </Drawer>
      ) : (
        <Modal
          width={"75%"}
          title={
            <div>
              <TranslateTing text="Order" /> - {idOrder}
            </div>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Table
            columns={columnItems}
            scroll={{ x: "max-content" }}
            dataSource={dataItems}
          />
        </Modal>
      )}
    </div>
  );
};
