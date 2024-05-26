import React from "react";
import TranslateTing from "../../../../../components/Common/TranslateTing";
import { Button, Table } from "antd";

const Stock = ({ data }) => {
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
            render: (text) => <>{text.price}</>,
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
                    <TranslateTing text="Applied Refund Request" />
                </h2>
                <Button>New order</Button>
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
