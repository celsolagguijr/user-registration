import { Typography, Space } from "antd";
import React from "react";

const { Title, Text } = Typography;

export interface IPageHeader {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}

const PageHeader: React.FC<IPageHeader> = (props: IPageHeader) => {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <Title level={3}>{props.title}</Title>
          <Text type="secondary">{props.subTitle}</Text>
        </div>
        <div style={{ flex: 1 }}>{props.action}</div>
      </div>
      <div>{props.children}</div>
    </Space>
  );
};

export default PageHeader;
