import React, { useState } from "react";
import { Form, Input, Switch } from "antd";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../../redux/reducers/notificationReducer";
import { updateUser } from "../../../../api/utils/auth";
import ChangePassword from "../Modal/ChangePassword";

export default ({ user, refecth }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleUploadProfile = async (value) => {
    try {
      const rp = await updateUser(value);
      if (rp.status) {
        dispatch(
          showNotification({
            message: "Success.",
            type: "success",
          })
        );
        refecth();
        window.location.reload();
      } else {
        dispatch(
          showNotification({
            message: "Error.",
            type: "error",
          })
        );
      }
    } catch {
      dispatch(
        showNotification({
          message: "Error.",
          type: "error",
        })
      );
    }
  };
  return (
    <div className="basic_info">
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
          name: user?.name,
          phone: user?.phone,
          email: user?.email,
          address: user?.address,
          bankName: user?.bankName,
          bankNumber: user?.bankNumber,
          owner: user?.owner,
        }}
        onFinish={(value) => handleUploadProfile(value)}
        autoComplete="off"
      >
        <div className="form_info background_white">
          <div className="border_bottom " style={{ marginBottom: "15px" }}>
            <h3>
              <TranslateTing text="Basic Info" />
            </h3>
          </div>
          <Form.Item label={<TranslateTing text="Your name" />} name="name">
            <Input />
          </Form.Item>
          <Form.Item label={<TranslateTing text="Your phone" />} name="phone">
            <Input />
          </Form.Item>
          <Form.Item label={<TranslateTing text="Your email" />} name="email">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Your address" />}
            name="address"
          >
            <Input />
          </Form.Item>
        </div>

        <div className="form_info background_white">
          <div className="border_bottom " style={{ marginBottom: "15px" }}>
            <h3>
              <TranslateTing text="Bank Info" />
            </h3>
          </div>
          <Form.Item label={<TranslateTing text="Bank Name" />} name="bankName">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Bank Account Name" />}
            name="owner"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Bank Account Number" />}
            name="bankNumber"
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
          className="button_wrap"
        >
          <button type="submit">
            {<TranslateTing text="Upload Profile" />}
          </button>
        </Form.Item>
      </Form>
      <div className="button_wrap">
        <button onClick={showModal}>
          {<TranslateTing text="Change password" />}
        </button>
      </div>
      <ChangePassword open={isModalOpen} onClose={handleCancel} />
    </div>
  );
};
