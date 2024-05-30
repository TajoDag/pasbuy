import React, { useState } from "react";
import TranslateTing from "../../../../../components/Common/TranslateTing";
import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useCurrency } from "../../../../../context/CurrencyContext";
import { formatPrice } from "../../../../../utils";
import { MdCancel, MdOutlinePriceChange } from "react-icons/md";
import InputChangePrice from "../../../../../utils/InputChangePrice";
import { SiVerizon } from "react-icons/si";
import { changePriceAgency } from "../../../../../api/utils/agency";
import { showNotification } from "../../../../../redux/reducers/notificationReducer";
import { useDispatch } from "react-redux";
import useRefresh from "../../../../../hooks/useRefresh";
import CreateOrder from "../../Modal/CreateOrder";

const Stock = ({ data, userId }) => {
  const { currency } = useCurrency();
  const [isChangePrice, setIsChangePrice] = useState(false);
  const [newPrice, setNewPrice] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [refresh, refecth] = useRefresh();
  const [isModalCreate, setIsModalCreate] = useState(false);
  const dispatch = useDispatch();

  const handleChangePrice = (productId) => {
    setSelectedProductId(productId);
    setIsChangePrice(true);
  };

  const handleCancelChangePrice = async () => {
    try {
      let payload = {
        homeAgentId: userId,
        productId: selectedProductId,
        newPrice: newPrice,
      };
      const rp = await changePriceAgency(payload);
      if (rp.status) {
        dispatch(
          showNotification({ message: "Đổi thành công", type: "success" })
        );
        setSelectedProductId(null);
        setIsChangePrice(false);
        refecth();
      }
    } catch (err) {
      dispatch(showNotification({ message: "Có lỗi xảy ra", type: "error" }));
    }
  };

  const handlePriceChange = (price) => {
    setNewPrice(price);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      width: 80,
      align: "center",
    },
    {
      title: <TranslateTing text="Image" />,
      dataIndex: "product",
      key: "product",
      width: 90,
      align: "center",
      render: (images) => (
        <img
          key={images.images[0].public_id}
          src={images.images[0].url}
          alt="Product"
          style={{ width: 50 }}
        />
      ),
    },
    {
      title: <TranslateTing text="Product" />,
      dataIndex: "product",
      width: 350,
      render: (text) => <>{text.name}</>,
    },
    {
      title: <TranslateTing text="Price" />,
      dataIndex: "product",
      align: "center",
      width: 90,
      render: (text, record) => (
        <>
          {isChangePrice && selectedProductId === record.product._id ? (
            <InputChangePrice
              defaultValue={text.price}
              onChange={handlePriceChange}
            />
          ) : (
            formatPrice(text.price, currency)
          )}
        </>
      ),
    },
    {
      title: <TranslateTing text="Stock" />,
      align: "center",
      width: 90,
      dataIndex: "quantity",
    },
    {
      title: " ",
      width: 70,
      render: (_, record) => {
        return isChangePrice && selectedProductId === record.product._id ? (
          <Space size="middle">
            <Button
              className="changeHoverBtn"
              icon={<MdCancel />}
              onClick={handleCancelChangePrice}
            />
            <Tooltip title={<TranslateTing text="Change price" />}>
              <Popconfirm
                title={<TranslateTing text="Change price" />}
                description={
                  <TranslateTing text="Do you want to change price?" />
                }
                onConfirm={() => {
                  handleCancelChangePrice();
                }}
              >
                <Button className="changeHoverBtn" icon={<SiVerizon />} />
              </Popconfirm>
            </Tooltip>
          </Space>
        ) : (
          <Space size="middle">
            <Tooltip title={<TranslateTing text="Change price" />}>
              <Button
                className="changeHoverBtn"
                icon={<MdOutlinePriceChange />}
                onClick={() => handleChangePrice(record.product._id)}
              />
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  return (
    <div className="background_white">
      <div className="border_bottom">
        <h2>
          <TranslateTing text="Your warehouse" />
        </h2>
        <Button onClick={() => setIsModalCreate(true)}>
          {" "}
          <TranslateTing text="New order" />
        </Button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Table
          columns={columns}
          scroll={{ x: "max-content" }}
          dataSource={data}
        />
      </div>
      <CreateOrder
        open={isModalCreate}
        setIsModalCreate={setIsModalCreate}
        width={"80%"}
        dataProducts={data}
        refecth={refecth}
        userId={userId}
      />
    </div>
  );
};

export default Stock;
