import React from 'react'
import TranslateTing from '../../../../components/Common/TranslateTing'
import { Button, Form, Input, Modal, Space } from 'antd'
import { updatePassword } from '../../../../api/utils/auth';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../../../redux/reducers/notificationReducer';

const ChangePassword = (props) => {
    const { onClose, open, data } = props;
    const dispatch = useDispatch();
    const handleChangePassword = async (values) => {
        console.log(values)
        const rp = await updatePassword(values)
        if (rp.status) {
            dispatch(
                showNotification({
                    message: "Success.",
                    type: "success",
                })
            );
            onClose()
        } else {
            dispatch(
                showNotification({
                    message: "Error.",
                    type: "error",
                })
            );
        }
    }
    return (
        <Modal
            title={<TranslateTing text="Change password" />}
            // centered
            open={open}
            onCancel={onClose}
            footer={null}
            width="30%"
        >
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                initialValues={{
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                }}
                onFinish={(value) => handleChangePassword(value)}
                autoComplete="off"
            >
                <Form.Item
                    label={<TranslateTing text="Old Password" />}
                    name="oldPassword"
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label={<TranslateTing text="New Password" />}
                    name="newPassword"
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label={<TranslateTing text="Confirm Password" />}
                    name="confirmPassword"
                >
                    <Input.Password />
                </Form.Item>
                <div
                    style={{ marginTop: 15, display: "flex", justifyContent: "center" }}
                >
                    <Space>
                        <div className="btn_cancel">
                            <Button htmlType="button" onClick={onClose}>
                                <TranslateTing text="Cancel" />
                            </Button>
                        </div>
                        <div className="btn_submit">
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ background: "#e62e05" }}
                            >
                                <TranslateTing text="Submit" />
                            </Button>
                        </div>
                    </Space>
                </div>
            </Form>
        </Modal>
    )
}

export default ChangePassword
