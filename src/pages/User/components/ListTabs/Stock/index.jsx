import React from "react";
import TranslateTing from "../../../../../components/Common/TranslateTing";
import { Button, Table } from "antd";
import { useCurrency } from "../../../../../context/CurrencyContext";
import { formatPrice } from "../../../../../utils";

const Stock = ({ data }) => {
    const { currency } = useCurrency();
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
            render: (text) => <>{formatPrice(text.price, currency)}</>,
        },
        {
            title: <TranslateTing text="Stock" />,
            align: "center",
            width: 90,
            dataIndex: "quantity",
        },
    ];

    return (
        <div className="background_white">
            <div className="border_bottom">
                <h2>
                    <TranslateTing text="Your warehouse" />
                </h2>
                <Button>  <TranslateTing text="New order" /></Button>
            </div>
            <div style={{ marginTop: "10px" }}>
                <Table
                    columns={columns}
                    scroll={{ x: "max-content" }}
                    dataSource={data}
                />
            </div>
        </div>
    );
};

export default Stock;
