import React from "react";
import {
  LockOutlined,
  UserOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Card, Alert, Flex } from "antd";
import Page from "@components/Page";
import useLogin from "./useLogin";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    login({
      username: data.username,
      password: data.password,
    });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Page title="Login">
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", padding: "20px" }}
      >
        <Col xs={24} sm={18} md={12} lg={8}>
          <Card title="Sign In">
            <Form name="login" onFinish={onSubmit}>
              {error !== "" && (
                <Form.Item name="alert">
                  <Alert message={error} type="error" showIcon />
                </Form.Item>
              )}

              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password" },
                ]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  size="large"
                />
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
                    onClick={handleRegister}
                  >
                    Create account
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<LoginOutlined />}
                    iconPosition="end"
                    loading={isLoading}
                  >
                    Sign In
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

export default Login;
