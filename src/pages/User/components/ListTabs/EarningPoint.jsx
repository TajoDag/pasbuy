import React, { useEffect, useState } from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { PiCurrencyDollar } from "react-icons/pi";
import { Table } from "antd";
import DateTimeComponent from "../../../../utils/DateTimeComponent";
import { formatPrice } from "../../../../utils";
import { useCurrency } from "../../../../context/CurrencyContext";
import { TagsOrder } from "../../../../utils/TagsOrder";
import { getSuccessOrder, listOrderAgency } from "../../../../api/utils/agency";

export const EarningPoint = ({ dataOrders, userId, user }) => {
  const { currency } = useCurrency();
  const [searchParams, setSearchParams] = useState({
    page: 0,
    size: 10,
    userId: userId,
  });
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [listOrder, setListOrder] = useState([]);
  const columns = [
    {
      title: "#",
      dataIndex: "stt",
    },

    {
      title: <TranslateTing text="Order Id" />,
      dataIndex: "_id",
    },
    {
      title: <TranslateTing text="Points" />,
      dataIndex: "totalPrice",
    },
    {
      title: <TranslateTing text="Converted" />,
      dataIndex: "totalPrice",
      render: (text) => <>{formatPrice(text, currency)}</>,
    },
    {
      title: <TranslateTing text="Date" />,
      render: (text) => <DateTimeComponent dateString={text.createdAt} />,
    },
  ];

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await getSuccessOrder(searchParams);
        if (response.status) {
          const updatedProducts = response.result.orders.map((item, i) => ({
            ...item,
            stt: i + 1 + searchParams.page * searchParams.size,
          }));
          setListOrder(updatedProducts);
          setPagination((prev) => ({
            ...prev,
            total: response.result.pagination?.total,
          }));
        }
      } catch (err) {
        setListOrder([]);
      }
    };
    getList();
  }, [searchParams]);
  return (
    <>
      <div className="background_white" style={{ padding: 20 }}>
        <h2>
          <TranslateTing text="My point" />
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="bg_1"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              // width: 400,
              alignItems: "center",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px 10px 0px 10px",
              }}
            >
              <p
                style={{ fontSize: "40px", fontWeight: "bold", color: "#fff" }}
              >
                {/* <PiCurrencyDollar />
                 */}
                {user.point} <TranslateTing text="Points" /> = {formatPrice(user.point, currency)} <TranslateTing text="Wallet Money" />
              </p>
            </div>
            <div style={{ marginTop: 10 }}>
              <p style={{ fontSize: "16px", opacity: "0.8", color: "#fff" }}>
                <TranslateTing text="Exchange rate" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background_white" style={{ marginTop: 30 }}>
        <div className="border_bottom">
          <h2>
            <TranslateTing text="Point Earning History" />
          </h2>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Table
            columns={columns}
            scroll={{ x: "max-content" }}
            dataSource={listOrder}
          />
        </div>
      </div>
    </>
  );
};
