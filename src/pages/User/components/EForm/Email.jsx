import React from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { Form, Input } from "antd";
const { Search } = Input;
export default () => {
  return (
    <div className="background_white" style={{ marginTop: "20px" }}>
      <div className="border_bottom" style={{ marginBottom: "10px" }}>
        <h3>
          <TranslateTing text="Change your email" />
        </h3>
      </div>
      <div style={{ padding: "20px" }}>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={(value) => handleUploadProfile(value)}
          autoComplete="off"
        >
          <Form.Item
            label={<TranslateTing text="Your Email" />}
            name="username"
          >
            <Search
              placeholder="Your Email"
              enterButton={<TranslateTing text="Verify" />}
              size="large"
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 22,
            }}
            style={{ textAlign: "end" }}
          >
            <button type="submit" className="button_red">
              {<TranslateTing text="Update Email" />}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
