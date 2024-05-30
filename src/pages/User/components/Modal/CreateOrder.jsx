import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  Tooltip,
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading } from "../../../../redux/reducers/loadingReducer";
import { formatPrice, splitText } from "../../../../utils";
import { useCurrency } from "../../../../context/CurrencyContext";
import {
  CloseOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { RiDeleteBin5Line } from "react-icons/ri";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { getListUserAll } from "../../../../api/utils/auth";
import { createOrder } from "../../../../api/utils/agency";
import { showNotification } from "../../../../redux/reducers/notificationReducer";

const CreateOrder = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { currency } = useCurrency();
  const [searchProduct, setSearchProduct] = useState({ name: "" });
  const [searchParams, setSearchParams] = useState({
    page: 0,
    size: 10,
    name: "",
  });
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });
  const [dataUser, setDataUser] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const newArray =
    props.dataProducts &&
    props.dataProducts?.map((item) => ({
      key: item.product._id,
      name: item.product.name,
      price: item.product.price,
      images: item.product.images,
    }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearch = () => {
    setSearchParams({ ...searchParams, name: searchProduct.name });
  };

  const handleRefresh = () => {
    setSearchProduct({ name: "" });
    setSearchParams({ ...searchParams, name: "" });
  };

  const handleQuantityChange = (record, value) => {
    const updatedRows = selectedRows.map((row) => {
      if (row.key === record.key) {
        const totalAmount = value * row.price;
        return { ...row, quantity: value, totalAmount };
      }
      return row;
    });
    setSelectedRows(updatedRows);
  };

  const handleCancel = () => {
    props.setIsModalCreate(false);
    form.resetFields();
    setSelectedRows([]);
    setSelectedRowKeys([]);
    setTotalPrice(0);
  };

  const handleDelete = (record) => {
    const updatedRows = selectedRows.filter((row) => row.key !== record.key);
    const updatedRowKeys = selectedRowKeys.filter((key) => key !== record.key);
    setSelectedRows(updatedRows);
    setSelectedRowKeys(updatedRowKeys);
  };

  const columnProducts = [
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      width: 90,
      align: "center",

      render: (images) => (
        <img
          key={images[0].public_id}
          src={images[0].url}
          alt="Product"
          style={{ width: 50 }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <p>{splitText(text, 50)}</p>,
    },
  ];

  const columnItems = [
    {
      title: <TranslateTing text="Image" />,
      dataIndex: "images",
      key: "images",
      width: 100,
      align: "center",

      render: (images) => (
        <img
          key={images[0].public_id}
          src={images[0].url}
          alt="Product"
          style={{ width: 50 }}
        />
      ),
    },
    {
      title: <TranslateTing text="Product name" />,
      dataIndex: "name",
      key: "name",
      width: 250,
      align: "left",
      render: (_, record) => {
        return <p>{splitText(record.name, 70)}</p>;
      },
    },
    {
      title: (
        <p>
          <TranslateTing text="Price" /> ($)
        </p>
      ),
      dataIndex: "price",
      key: "price",
      width: 120,
      align: "center",
    },
    {
      title: <TranslateTing text="Quantity" />,
      dataIndex: "quantity",
      key: "quantity",
      width: 120,
      align: "center",
      render: (_, record) => (
        <Input
          type="number"
          min={1}
          value={record.quantity}
          onChange={(e) =>
            handleQuantityChange(record, parseInt(e.target.value, 10))
          }
        />
      ),
    },
    {
      title: <TranslateTing text="Amount" />,
      dataIndex: "totalAmount",
      align: "center",
    },
    {
      title: "",
      key: "action",
      width: 100,
      align: "center",
      fixed: "right",
      render: (_, record) => (
        <Space>
          <Tooltip title={<TranslateTing text="Delete" />}>
            <Popconfirm
              title={<TranslateTing text="Delete the product" />}
              description={
                <TranslateTing text="Are you sure to delete this product?" />
              }
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => handleDelete(record)}
            >
              <RiDeleteBin5Line style={{ color: "red", fontSize: 20 }} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      const updatedRows = selectedRows.map((row, index) => ({
        ...row,
        stt: index + 1,
        quantity: row.quantity || 1,
        totalAmount: (row.quantity || 1) * row.price,
      }));
      setSelectedRows(updatedRows);
      setSelectedRowKeys(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  useEffect(() => {
    const total = selectedRows?.reduce((acc, row) => acc + row.totalAmount, 0);
    setTotalPrice(total);
  }, [selectedRows]);

  useEffect(() => {
    const getListUser = async () => {
      try {
        const response = await getListUserAll();
        if (response.status) {
          const users = response.result.map((user) => ({
            label: user.name,
            value: user._id,
          }));
          setDataUser(users);
        }
      } catch (err) {
        setDataUser([]);
        dispatch(
          showNotification({
            message: "Lấy dữ liệu thất bại.",
            type: "error",
          })
        );
      }
    };
    getListUser();
  }, [searchParams]);

  const handleTableChange = (pagination) => {
    setSearchParams({
      ...searchParams,
      page: pagination.current - 1,
      size: pagination.pageSize,
    });
    setPagination(pagination);
  };

  const filterOption = (input, option) => {
    return (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  };

  const onFinish = async (values) => {
    const orderItems = selectedRows.map((row) => ({
      name: row.name,
      price: row.price,
      quantity: row.quantity,
      product: row.key,
    }));

    const newOrder = {
      ...values,
      orderItems,
      totalPrice: totalPrice,
      homeAgentId: props.userId,
    };
    try {
      const rp = await createOrder(newOrder);
      if (rp.status) {
        dispatch(
          showNotification({
            message: rp.message || "Order created successfully",
            type: "success",
          })
        );
        setSelectedRows([]);
        setSelectedRowKeys([]);
        setTotalPrice(0);
        props.setIsModalCreate(false);
        form.resetFields();
        props.refecth()
      } else {
        dispatch(
          showNotification({
            message: rp.message || "Failed to create order",
            type: "error",
          })
        );
      }
    } catch (err) {
      dispatch(
        showNotification({
          message: "Failed to create order",
          type: "error",
        })
      );
    }
  };

  return (
    <Modal
      title={props.title}
      open={props.open}
      onOk={props.handleOk}
      onCancel={handleCancel}
      footer={null}
      width={props.width}
    >
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 22 }}
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
        autoComplete="off"
      >
        <Row gutter={14}>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={<TranslateTing text="Customer" />}
                  name="customer"
                  rules={[
                    {
                      required: true,
                      message: "Please input your customer!",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    optionFilterProp="children"
                    filterOption={filterOption}
                    options={dataUser}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<TranslateTing text="Phone number" />}
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={<TranslateTing text="Note" />} name="note">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label=" ">
                  <div style={{ fontWeight: 550, fontSize: 20 }}>
                    <TranslateTing text="Total Price:" /> {"  "}
                    <span>{formatPrice(totalPrice, currency)}</span>
                  </div>
                </Form.Item>
              </Col>
            </Row>

            <Table columns={columnItems} dataSource={selectedRows} />
          </Col>
          <Col span={8}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="table_page">
                <Table
                  rowSelection={{
                    ...rowSelection,
                  }}
                  bordered
                  columns={columnProducts}
                  dataSource={newArray}
                  pagination={{
                    current: pagination.current,
                    pageSize: pagination.pageSize,
                    total: pagination.total,
                  }}
                  onChange={handleTableChange}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div
          style={{ marginTop: 15, display: "flex", justifyContent: "center" }}
        >
          <Space>
            <div className="btn_cancel">
              <Button htmlType="button" onClick={handleCancel}>
                <TranslateTing text="Cancel" />
              </Button>
            </div>
            <div className="btn_submit">
              <Button
                type="primary"
                htmlType="submit"
                // onClick={() => form.submit()}
                style={{ background: "#e62e05" }}
              >
                <TranslateTing text="Submit" />
              </Button>
            </div>
          </Space>
        </div>
      </Form>
    </Modal>
  );
};
export default CreateOrder;
