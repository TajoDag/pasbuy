import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { startLoading, stopLoading } from "../redux/reducers/loadingReducer";
import { registerUser } from "../api/utils/auth";
import { showNotification } from "../redux/reducers/notificationReducer";
import { Button, Form, Input } from "antd";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const onFinish = async (values) => {
        if (location.pathname === "/register") {
          dispatch(startLoading());
          const response = await registerUser(values);
          if (response.status) {
            dispatch(
              showNotification({ message: response.message, type: "success" })
            );
            navigate("/login");
            dispatch(stopLoading());
          } else {
            dispatch(
              showNotification({ message: response.message, type: "error" })
            );
            dispatch(stopLoading());
          }
        }
      };
  return (
    <div className="login_page">
      {location.pathname === "/register" && (
        <div className="login_page_container">
          <h1>Create an account.</h1>
          <div className="login_page_form">
            <Form
              name="register"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input className="login_input" placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input className="login_input" placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  className="login_input"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Input className="login_input" placeholder="Phone" />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input className="login_input" placeholder="Address" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ background: "#E62E05", height: 45, fontSize: 20 }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div className="register_now">
              <p>
                Already have an account? <a href="/login">login</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Register