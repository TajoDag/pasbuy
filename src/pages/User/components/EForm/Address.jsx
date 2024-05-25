import React from "react";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { FaPlus } from "react-icons/fa6";
import { Modal, Form, Input, Select } from "antd";

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="background_white address_container">
      <div className="border_bottom">
        <h3>
          <TranslateTing text="Address" />
        </h3>
      </div>
      <div
        style={{
          padding: "20px 30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f2f3f8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px 20px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          <FaPlus style={{ fontSize: "40px", marginBottom: "10px" }} />
          <TranslateTing text="Add New Address" />
        </div>
      </div>
      <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
        <div className="border_bottom" style={{ marginBottom: "15px" }}>
          <h2>New Address</h2>
        </div>
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
          <Form.Item label={<TranslateTing text="Address" />} name="username">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label={<TranslateTing text="Country" />} name="username">
            <Select />
          </Form.Item>
          <Form.Item label={<TranslateTing text="State" />} name="username">
            <Input />
          </Form.Item>
          <Form.Item label={<TranslateTing text="City" />} name="username">
            <Input />
          </Form.Item>
          <Form.Item
            label={<TranslateTing text="Postal Code" />}
            name="username"
          >
            <Input />
          </Form.Item>
          <Form.Item label={<TranslateTing text="Phone" />} name="username">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 20,
            }}
            style={{ textAlign: "end" }}
          >
            <button type="submit" className="button_red">
              {<TranslateTing text="Save" />}
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
