import React from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { PiCurrencyDollar } from "react-icons/pi";
import { Table } from "antd";
import DateTimeComponent from "../../../../utils/DateTimeComponent";
import { formatPrice } from "../../../../utils";
import { useCurrency } from "../../../../context/CurrencyContext";
import { TagsOrder } from "../../../../utils/TagsOrder";

export const EarningPoint = ({dataOrders}) => {
  const { currency } = useCurrency();
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
                0 Points = $1.00 Wallet Money
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
      <div className="background_white" style={{marginTop: 30}}>
        <div className="border_bottom">
          <h2>
            <TranslateTing text="Point Earning History" />
          </h2>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Table
            columns={columns}
            scroll={{ x: "max-content" }}
            // dataSource={dataOrders}
          />
        </div>
      </div>
    </>
  );
};
