import React from "react";
import { Button, Card, Descriptions, Flex, Row, Skeleton } from "antd";
import type { DescriptionsProps } from "antd";
import Page from "@app/shared/components/Page";
import UserProfile from "./useUserProfile";
import { LogoutOutlined, ReloadOutlined } from "@ant-design/icons";

const Profile: React.FC = () => {
  const { data, isLoading, refetch, handleLogout } = UserProfile();

  const borderedItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "User ID",
      children: data?.id,
    },
    {
      key: "2",
      label: "First Name",
      children: data?.firstName,
    },
    {
      key: "3",
      label: "Last Name",
      children: data?.lastName,
    },
    {
      key: "4",
      label: "Date of Birth",
      children: data?.dateOfBirth,
    },
    {
      key: "5",
      label: "Age",
      children: data?.age,
    },
    {
      key: "6",
      label: "Email",
      children: data?.username,
    },

    {
      key: "7",
      label: "Password",
      children: data?.password,
    },
  ];

  function handleReload() {
    refetch();
  }

  return (
    <Page title="User Profile">
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", padding: "20px", width: "100%" }}
      >
        <Card style={{ width: "80%" }}>
          <Skeleton loading={isLoading}>
            <Descriptions
              layout="vertical"
              title="User Profile"
              extra={
                <Flex gap={"1em"}>
                  <Button
                    color="green"
                    onClick={handleReload}
                    icon={<ReloadOutlined />}
                    loading={isLoading}
                  >
                    Reload
                  </Button>
                  <Button
                    type="primary"
                    onClick={handleLogout}
                    icon={<LogoutOutlined />}
                  >
                    Logout
                  </Button>
                </Flex>
              }
              items={borderedItems}
            />
          </Skeleton>
        </Card>
      </Row>
    </Page>
  );
};

export default Profile;
