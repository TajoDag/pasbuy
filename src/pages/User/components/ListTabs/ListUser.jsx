import React, { useState } from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { Button, Drawer, Modal, Space, Table } from "antd";
import DateTimeComponent from "../../../../utils/DateTimeComponent";
const ListUser = ({ dataTable, paginationCustomer, handleTableChangeCustomer }) => {

    const columns = [
        {
            title: "#",
            dataIndex: "stt",
        },
        {
            title: <TranslateTing text="Name" />,
            dataIndex: "name",
        },
        {
            title: <TranslateTing text="Username" />,
            dataIndex: "username",
        },
        {
            title: <TranslateTing text="Phone number" />,
            dataIndex: "phone",
        },
        {
            title: <TranslateTing text="Invite code" />,
            dataIndex: "inviteCode",
        },
        {
            title: <TranslateTing text="Date" />,
            render: (text) => <DateTimeComponent dateString={text.createdAt} />,
        },
    ];
    return (
        <div className="background_white">
            <div className="border_bottom">
                <h2>
                    <TranslateTing text="Customers" />
                </h2>
            </div>

            <div style={{ marginTop: "10px" }}>
                <Table
                    columns={columns}
                    scroll={{ x: "max-content" }}
                    dataSource={dataTable}
                    pagination={{
                        current: paginationCustomer.current,
                        pageSize: paginationCustomer.pageSize,
                        total: paginationCustomer.total,
                    }}
                    onChange={handleTableChangeCustomer}
                />
            </div>
        </div>
    )
}

export default ListUser
