import React from "react";
import { Form, Input, Switch } from "antd";
import TranslateTing from "../../../../components/Common/TranslateTing";

export default () => {
  const handleUploadProfile = (value) => {
    console.log(value);
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
          <Form.Item label={<TranslateTing text="Your name" />} name="username">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Your phone" />}
            name="password"
          >
            <Input />
          </Form.Item>
          <Form.Item label={<TranslateTing text="Photo" />} name="password">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Your Password" />}
            name="password"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Confirm Password" />}
            name="password"
          >
            <Input.Password />
          </Form.Item>
        </div>
        {/* payment */}
        <div className="form_info background_white">
          <div className="border_bottom" style={{ marginBottom: "15px" }}>
            <h3>
              <TranslateTing text="Payment Setting" />
            </h3>
          </div>
          <Form.Item
            label={<TranslateTing text="Cash Payment" />}
            name="username"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Bank Payment" />}
            name="password"
          >
            <Switch />
          </Form.Item>
          <Form.Item label={<TranslateTing text="Photo" />} name="password">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Bank Account Name" />}
            name="password"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Bank Account Number" />}
            name="password"
          >
            <Input />
          </Form.Item>
          <Form.Item label={<TranslateTing text="Your name" />} name="password">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="USDT Payment" />}
            name="password"
          >
            <Switch />
          </Form.Item>
          <Form.Item label={<TranslateTing text="USDT Link" />} name="password">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="USDT Address" />}
            name="password"
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
    </div>
  );
};
