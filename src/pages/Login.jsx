import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/utils/auth";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { showNotification } from "../redux/reducers/notificationReducer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setValue: setToken } = useLocalStorage("user_token", "");
  const { setValue: setIsLogin } = useLocalStorage("isLogin", false);
  const { setValue: setUserData } = useLocalStorage("userData", "");
  const onFinish = async (values) => {
    const response = await loginUser(values);
    if (response.status) {
      setToken(response.result.token);
      setIsLogin(true);
      setUserData(response.result.user);
      dispatch(
        showNotification({ message: response.message, type: "success" })
      );
      navigate("/");
    } else {
      setIsLogin(false);
      dispatch(
        showNotification({ message: response.message, type: "error" })
      );
    }
  };

  return (
    <div className="login_page">
      <div className="login_page_container">
        <h1>Login to your account.</h1>
        <div className="login_page_form">
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input className="login_input" placeholder="Email" />
            </Form.Item>

            <div className="use_phone_instead">
              {/* <a href="#">Use Phone Instead</a> */}
            </div>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="login_input" placeholder="Password" />
            </Form.Item>

            <div className="forgot_password">
              <a href="#">Forgot password?</a>
            </div>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>
                <p style={{ color: "#A9A9AE" }}>Remember Me</p>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ background: "#E62E05", height: 45, fontSize: 20 }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="register_now">
            <p>
              Don't have an account? <a href="#">Register Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
