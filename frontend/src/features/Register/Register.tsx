import React, { useEffect } from "react";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Card,
  Alert,
  DatePicker,
  Divider,
  Flex,
} from "antd";
import Page from "@components/Page";
import useRegister from "./useRegister";
import { UserRegistration } from "@app/shared/types/models/User";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const { register, isLoading, error, fieldErrors } = useRegister();
  const navigate = useNavigate();

  const onSubmit = (data: UserRegistration) => {
    register(data);
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  useEffect(() => {
    form.setFields([
      {
        name: "username",
        errors: fieldErrors?.username?._errors ?? [],
      },
      {
        name: "firstName",
        errors: fieldErrors?.firstName?._errors ?? [],
      },
      {
        name: "lastName",
        errors: fieldErrors?.lastName?._errors ?? [],
      },
      {
        name: "dateOfBirth",
        errors: fieldErrors?.dateOfBirth?._errors ?? [],
      },
      {
        name: "password",
        errors: fieldErrors?.password?._errors ?? [],
      },
    ]);
  }, [fieldErrors]);

  return (
    <Page title="Register">
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", padding: "20px" }}
      >
        <Col xs={24} sm={18} md={12} lg={8}>
          <Card title="Register">
            <Form
              form={form}
              name="register"
              layout="vertical"
              onFinish={onSubmit}
            >
              {error !== "" && (
                <Form.Item name="alert">
                  <Alert message={error} type="error" showIcon />
                </Form.Item>
              )}

              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input placeholder="ex. Celso" size="large" />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: "Required" }]}
              >
                <Input placeholder="ex. Laggui" size="large" />
              </Form.Item>

              <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <DatePicker size="large" />
              </Form.Item>

              <Divider orientation="left" />

              <Form.Item
                name="username"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                  { type: "email" },
                ]}
              >
                <Input placeholder="eg. celso@hotmail.com" size="large" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                  {
                    min: 10,
                    message: "Password must be at least 10 characters",
                  },
                  {
                    pattern: /^[a-zA-Z0-9]+$/,
                    message: "Password must be alphanumeric",
                  },
                  {
                    pattern: /(?=.*[A-Z])/,
                    message:
                      "Password must contain at least one uppercase letter",
                  },
                ]}
                hasFeedback
              >
                <Input size="large" type="password" />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Password and confirm password do not match")
                      );
                    },
                  }),
                ]}
              >
                <Input size="large" type="password" />
              </Form.Item>

              <Form.Item>
                <Flex justify="end" gap="1em">
                  <Button
                    htmlType="button"
                    size="large"
                    variant="text"
                    iconPosition="end"
                    loading={isLoading}
                    icon={<UserAddOutlined />}
                    onClick={handleSignIn}
                  >
                    Sign In
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<LoginOutlined />}
                    iconPosition="end"
                    loading={isLoading}
                  >
                    Submit
                  </Button>
                </Flex>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default Register;
