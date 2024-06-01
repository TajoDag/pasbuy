import { Button, Form, Input, Modal, Space } from "antd";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../../../api/utils/auth";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { showNotification } from "../../../../redux/reducers/notificationReducer";

const ChangePassword = (props) => {
  const { onClose, open, data } = props;
  const dispatch = useDispatch();
  const intl = useIntl();
  const Success = intl.formatMessage({ id: "Success" });
  const Error = intl.formatMessage({ id: "Success" });
  const handleChangePassword = async (values) => {
    console.log(values);
    const rp = await updatePassword(values);
    if (rp.status) {
      dispatch(
        showNotification({
          message: Success,
          type: "success",
        })
      );
      onClose();
    } else {
      dispatch(
        showNotification({
          message: Error,
          type: "error",
        })
      );
    }
  };
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
  );
};

export default ChangePassword;
