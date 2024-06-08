import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { listOrderAgency } from "../../../../api/utils/agency";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { useCurrency } from "../../../../context/CurrencyContext";
import useRefresh from "../../../../hooks/useRefresh";
import { formatPrice } from "../../../../utils";
import { TagsOrder } from "../../../../utils/TagsOrder";
import { useIsMobile } from "../../../../utils/responsive";
import CreateOrder from "../Modal/CreateOrder";
import DrawerCreateOrder from "../Modal/DrawerCreateOrder";
import DrawerDetailOrder from "../Modal/DrawerDetailOrder";
import ItemsOrder from "../Modal/ItemsOrder";
import UpdateOrder from "../Modal/UpdateOrder";

export const Dashboard = ({
  data,
  totalOrderNotSuccess,
  // refecth,
  userId,
  // refresh,
  totalAmount,
  totalOrderSuccess,
}) => {
  const [listOrder, setListOrder] = useState([]);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const { currency } = useCurrency();
  const [openItems, setOpenItems] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [dataItems, setDataItems] = useState([]);
  const [refresh, refecth] = useRefresh();
  const isMobile = useIsMobile();
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
  const onCloseModalDetail = () => {
    setOpenItems(false);
    setDataItems([]);
  };
  const onCloseModalChangeStatus = () => {
    setOpenDetail(false);
    setDataItems([]);
  };

  const column = [
    {
      title: "#",
      dataIndex: "stt",
      width: 50,
    },
    {
      title: <TranslateTing text="Customer" />,
      dataIndex: "customer",
      key: "customer",
      width: 170,
      align: "left",
      render: (text) => <>{text.name}</>,
    },
    {
      title: <TranslateTing text="Phone number" />,
      dataIndex: "phone",
      key: "phone",
      width: 130,
      align: "center",
    },
    {
      title: <TranslateTing text="Address" />,
      dataIndex: "address",
      key: "address",
      width: 250,
      align: "center",
    },
    {
      title: <TranslateTing text="Status" />,
      dataIndex: "orderStatus",
      align: "center",
      width: 140,
      render: (value) => TagsOrder(value),
      // dataIndex: "quantity",
    },
    {
      title: <TranslateTing text="Order Location" />,
      dataIndex: "orderLocation",
      key: "orderLocation",
      width: 150,
      align: "center",
    },
    {
      title: <TranslateTing text="Total price" />,
      dataIndex: "totalPrice",
      width: 150,
      render: (_, record) => <>{formatPrice(record.totalPrice, currency)}</>,
    },
    {
      title: " ",
      width: 100,
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              icon={<FaEye />}
              onClick={() => {
                setOpenItems(true);
                setDataItems(record.orderItems);
              }}
            />
            {/* <Button
              icon={<TbEdit />}
              onClick={() => {
                setOpenDetail(true);
                setDataItems(record);
              }}
            /> */}
          </Space>
        );
      },
    },
  ];
  const handleTableChange = (pagination) => {
    setSearchParams({
      ...searchParams,
      page: pagination.current - 1,
      size: pagination.pageSize,
    });
    setPagination(pagination);
  };
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await listOrderAgency(searchParams);
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
  }, [searchParams, refresh]);
  return (
    <div className="tab_layout">
      <h2>
        <TranslateTing text="Dashboard" />
      </h2>
      <div className="card_wrap">
        <div className="bg_1">
          <p>
            {data?.length} <TranslateTing text="Products" />
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
            {formatPrice(totalAmount, currency)}{" "}
            <TranslateTing text="Revenue" />
          </p>
          <p>
            <TranslateTing text="in your" /> {totalOrderSuccess}{" "}
            <TranslateTing text="orders" />
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
      <div
        className="background_white"
        style={{ marginTop: "20px", paddingBottom: 10 }}
      >
        <div className="border_bottom">
          <h2>
            <TranslateTing text="Orders" />
          </h2>

          {/* <Button onClick={() => setIsModalCreate(true)}>
            <TranslateTing text="New order" />
          </Button> */}
        </div>
        <div style={{ padding: 10 }}>
          <Table
            columns={column}
            scroll={{ x: 800 }}
            dataSource={listOrder}
            pagination={{
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: pagination.total,
            }}
            onChange={handleTableChange}
          />
        </div>
      </div>
      {isMobile ? (
        <>
          <DrawerCreateOrder
            open={isModalCreate}
            setIsModalCreate={setIsModalCreate}
            width={720}
            dataProducts={data}
            refecth={refecth}
            userId={userId}
          />
          <DrawerDetailOrder
            open={openItems}
            data={dataItems}
            onClose={onCloseModalDetail}
          />
        </>
      ) : (
        <>
          <CreateOrder
            open={isModalCreate}
            setIsModalCreate={setIsModalCreate}
            width={"80%"}
            dataProducts={data}
            refecth={refecth}
            userId={userId}
          />
          <ItemsOrder
            open={openItems}
            data={dataItems}
            onClose={onCloseModalDetail}
          />
        </>
      )}

      <UpdateOrder
        open={openDetail}
        data={dataItems}
        refecth={refecth}
        onClose={onCloseModalChangeStatus}
      />
    </div>
  );
};
