import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import TranslateTing from "../../components/Common/TranslateTing";
import { useCurrency } from "../../context/CurrencyContext";
import { formatPrice } from "../../utils";
import { useIntl } from "react-intl";
import { createOrderUser } from "../../api/utils/order";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../redux/reducers/loadingReducer";
import { showNotification } from "../../redux/reducers/notificationReducer";

const Cart = () => {
    const { cartItems, removeFromCart, addToCart } = useCart();
    const navigate = useNavigate();
    const { currency } = useCurrency();
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const dispatch = useDispatch();

    const intl = useIntl();
    const placeholderPhone = intl.formatMessage({
        id: "Please input your phone number!",
    });
    const placeholderAddress = intl.formatMessage({
        id: "Please input your address!",
    });
    const Success = intl.formatMessage({ id: "Success" });
    const Error = intl.formatMessage({ id: "Success" });
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleIncrease = (item) => {
        addToCart({ ...item, quantity: 1, totalPrice: item.price });
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            addToCart({ ...item, quantity: -1, totalPrice: -item.price });
        } else {
            removeFromCart(item._id);
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    const onFinish = async (values) => {
        const orderItems = cartItems.map((row) => ({
            name: row.name,
            price: row.price,
            quantity: row.quantity,
            product: row._id,
        }));
        const newOrder = {
            ...values,
            orderItems,
            totalPrice: subtotal,
            homeAgentId: userData.userInvite._id,
            user: userData.userInvite._id,
        };

        try {
            dispatch(startLoading());
            const rp = await createOrderUser(newOrder);
            if (rp.status) {
                dispatch(
                    showNotification({
                        message: Success,
                        type: "success",
                    })
                );
                handleCancel()
            } else {
                dispatch(
                    showNotification({
                        message: Error,
                        type: "error",
                    })
                );
            }
        } catch (err) {
            dispatch(
                showNotification({
                    message: Error,
                    type: "error",
                })
            );
        } finally {
            dispatch(stopLoading());
        }
        console.log("Success:", newOrder);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div style={{ width: "100%", padding: "20px 55px" }}>
            <div className="cart-container">
                <h2>
                    <TranslateTing text="My Cart:" />
                </h2>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th className="product-column">
                                <TranslateTing text="Product" />
                            </th>
                            <th className="price-column">
                                <TranslateTing text="Price" />
                            </th>
                            <th className="tax-column">
                                <TranslateTing text="Tax" />
                            </th>
                            <th className="quantity-column">
                                <TranslateTing text="Quantity" />
                            </th>
                            <th className="total-column">
                                <TranslateTing text="Total price" />
                            </th>
                            <th className="remove-column">
                                <TranslateTing text="Remove" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item._id}>
                                <td className="product-column">
                                    <img
                                        src={item.images[0].url}
                                        alt={item.name}
                                        className="product-image"
                                    />
                                    <div>{item.name}</div>
                                </td>
                                <td className="price-column">
                                    {formatPrice(item.price.toFixed(2), currency)}
                                </td>
                                <td className="tax-column">{formatPrice(0, currency)}</td>
                                <td className="quantity-column">
                                    <div className="quantity-controls">
                                        <MinusOutlined onClick={() => handleDecrease(item)} />
                                        <span>{item.quantity}</span>
                                        <PlusOutlined onClick={() => handleIncrease(item)} />
                                    </div>
                                </td>
                                <td className="total-column">
                                    {formatPrice(item.totalPrice.toFixed(2), currency)}
                                </td>
                                <td className="remove-column">
                                    <DeleteOutlined
                                        onClick={() => removeFromCart(item._id)}
                                        className="remove-icon"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="cart-summary">
                    <p>
                        <TranslateTing text="Subtotal" />:{" "}
                        {formatPrice(subtotal.toFixed(2), currency)}
                    </p>
                    <Button
                        type="primary"
                        onClick={showModal}
                        style={{ backgroundColor: "#e62e04" }}
                    >
                        <TranslateTing text="Continue To Shipping" />
                    </Button>
                </div>
                <Button onClick={() => navigate("/products")}>
                    <TranslateTing text="Return To Shop" />
                </Button>
            </div>
            <Modal
                title={<TranslateTing text="Shipping Info" />}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={<TranslateTing text="OK" />}
                cancelText={<TranslateTing text="Cancel" />}
                okButtonProps={{
                    style: { backgroundColor: "#e62e04", borderColor: "#e62e04" },
                }}
            >
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label={<TranslateTing text="Phone number" />}
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: placeholderPhone,
                            },
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                        label={<TranslateTing text="Address" />}
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: placeholderAddress,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Cart;
