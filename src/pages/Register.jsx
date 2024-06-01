import { Button, Form, Input } from "antd";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../api/utils/auth";
import TranslateTing from "../components/Common/TranslateTing";
import { startLoading, stopLoading } from "../redux/reducers/loadingReducer";
import { showNotification } from "../redux/reducers/notificationReducer";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const intl = useIntl();
  const Success = intl.formatMessage({ id: "Success" });
  const Error = intl.formatMessage({ id: "Success" });
  const onFinish = async (values) => {
    if (location.pathname === "/register") {
      dispatch(startLoading());
      const response = await registerUser(values);
      if (response.status) {
        dispatch(showNotification({ message: Success, type: "success" }));
        navigate("/login");
        dispatch(stopLoading());
      } else {
        dispatch(showNotification({ message: Error, type: "error" }));
        dispatch(stopLoading());
      }
    }
  };
  const placeholderUsername = intl.formatMessage({ id: "Username" });
  const placeholderPassword = intl.formatMessage({ id: "Password" });
  const placeholderName = intl.formatMessage({ id: "Name" });
  const placeholderPhone = intl.formatMessage({ id: "Phone" });
  const placeholderInviteCode = intl.formatMessage({ id: "Invite code" });
  return (
    <div className="login_page">
      {location.pathname === "/register" && (
        <div className="login_page_container">
          <h1>
            {" "}
            <TranslateTing text="Create an account." />
          </h1>
          <div className="login_page_form">
            <Form
              name="register"
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

              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: <TranslateTing text="Please input your name!" />,
                  },
                ]}
              >
                <Input className="login_input" placeholder={placeholderName} />
              </Form.Item>
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
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: <TranslateTing text="Please input your phone!" />,
                  },
                ]}
              >
                <Input className="login_input" placeholder={placeholderPhone} />
              </Form.Item>
              <Form.Item name="importInviteCode">
                <Input
                  className="login_input"
                  placeholder={placeholderInviteCode}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ background: "#E62E05", height: 45, fontSize: 20 }}
                >
                  {" "}
                  <TranslateTing text="register" />
                </Button>
              </Form.Item>
            </Form>
            <div className="register_now">
              <p>
                <TranslateTing text="Already have an account?" />{" "}
                <a href="/login">
                  {" "}
                  <TranslateTing text="login" />
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Register;
