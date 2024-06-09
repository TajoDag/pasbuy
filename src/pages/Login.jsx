import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api/utils/auth";
import TranslateTing from "../components/Common/TranslateTing";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { showNotification } from "../redux/reducers/notificationReducer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { setValue: setToken } = useLocalStorage("user_token", "");
  const { setValue: setIsLogin } = useLocalStorage("isLogin", false);
  const { setValue: setUserData } = useLocalStorage("userData", "");
  const intl = useIntl();
  const Success = intl.formatMessage({ id: "Success" });
  const Error = intl.formatMessage({ id: "Error" });
  const onFinish = async (values) => {
    try {
      const response = await loginUser(values);
      if (response.status) {
        setToken(response.result.token);
        setIsLogin(true);
        setUserData(response.result.user);
        // dispatch(showNotification({ message: Success, type: "success" }));
        navigate("/");
      } else {
        setIsLogin(false);
        dispatch(showNotification({ message: Error, type: "error" }));
      }
    } catch (err) {
      setIsLogin(false);
      dispatch(showNotification({ message: Error, type: "error" }));
    }
  };
  const placeholderUsername = intl.formatMessage({ id: "Username" });
  const placeholderPassword = intl.formatMessage({ id: "Password" });
  return (
    <div className="login_page">
      {location.pathname === "/login" && (
        <div className="login_page_container">
          <h1>
            {" "}
            <TranslateTing text="Login to your account." />
          </h1>
          <div className="login_page_form">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: (
                      <TranslateTing text="Please input your username!" />
                    ),
                  },
                ]}
              >
                <Input
                  className="login_input"
                  placeholder={placeholderUsername}
                />
              </Form.Item>

              <div className="use_phone_instead">
                {/* <a href="#">Use Phone Instead</a> */}
              </div>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: (
                      <TranslateTing text="Please input your password!" />
                    ),
                  },
                ]}
              >
                <Input.Password
                  className="login_input"
                  placeholder={placeholderPassword}
                />
              </Form.Item>

              <div className="forgot_password">
                <a href="#">
                  <TranslateTing text="Forgot password?" />
                </a>
              </div>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>
                  <p style={{ color: "#A9A9AE" }}>
                    <TranslateTing text="Remember Me" />
                  </p>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ background: "#E62E05", height: 45, fontSize: 20 }}
                >
                  <TranslateTing text="login" />
                </Button>
              </Form.Item>
            </Form>
            <div className="register_now">
              <p>
                <TranslateTing text="Don't have an account?" />{" "}
                <a href="/register">
                  {" "}
                  <TranslateTing text="Register Now" />
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
