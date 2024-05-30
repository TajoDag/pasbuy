import React, { useState } from "react";
import { useCurrency } from "../../../../context/CurrencyContext";
import { Button, Form, Input, InputNumber, Modal, Space } from "antd";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { formatPrice } from "../../../../utils";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../../redux/reducers/notificationReducer";
import { postRequestWithdraw } from "../../../../api/utils/wallet";

const ModalWithdraw = (props) => {
    const { onClose, open, point, refecth } = props;
    const dispatch = useDispatch();
    const { currency } = useCurrency();
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleWithdrawChange = (value) => {
        setWithdrawAmount(value);
        setIsSubmitDisabled(value > point || value <= 0);
    };

    const onFinish = async (values) => {
        try {
            const rp = await postRequestWithdraw(values)
            if (rp.status) {
                dispatch(showNotification({ message: "Success", type: "success" }));
            }
            refecth && refecth();
            onClose && onClose();

        } catch (err) {
            dispatch(showNotification({ message: "Yêu cầu chưa thể thực hiện", type: "error" }));
        }
    };

    return (
        <Modal
            title={
                <p>
                    <TranslateTing text="Withdraw Request" /> -{" "}
                    {formatPrice(point - withdrawAmount, currency)}
                </p>
            }
            centered
            open={open}
            onCancel={onClose}
            footer={null}
            width="40%"
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label={<p><TranslateTing text="Amount Request" /> ($)</p>}
                    name="amount"
                    rules={[
                        {
                            required: true,
                            message: "Please input your amount!",
                        },
                    ]}
                >
                    <InputNumber
                        style={{
                            width: "100%",
                        }}
                        min={0}
                        max={point}
                        value={withdrawAmount}
                        onChange={handleWithdrawChange}
                    />
                </Form.Item>
                <Form.Item
                    label={<TranslateTing text="Message" />}
                    name="message"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={<TranslateTing text="Note" />}
                    name="note"
                >
                    <Input />
                </Form.Item>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Space>
                        <Button htmlType="button" onClick={onClose}>
                            <TranslateTing text="Cancel" />
                        </Button>
                        <Button type="primary" htmlType="submit" disabled={isSubmitDisabled}>
                            <TranslateTing text="OK" />
                        </Button>
                    </Space>
                </div>
            </Form>
        </Modal>
    );
};

export default ModalWithdraw;
