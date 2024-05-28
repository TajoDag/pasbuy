import React from "react";
import { Form, Input, Switch } from "antd";
import TranslateTing from "../../../../components/Common/TranslateTing";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../../redux/reducers/notificationReducer";
import { updateUser } from "../../../../api/utils/auth";

export default ({ user }) => {
  const dispatch = useDispatch();
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
    console.log(value);
  };
  console.log(user);
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
          name: user.name,
          phone: user.phone,
          password: user.password,
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
          {/* <Form.Item
            label={<TranslateTing text="Your Password" />}
            name="password"
          >
            <Input.Password />
          </Form.Item> */}
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
