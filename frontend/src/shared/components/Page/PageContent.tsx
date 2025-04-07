import { theme } from "antd";

export interface IPageContent {
  children: React.ReactNode;
}

const PageContent: React.FC<IPageContent> = (props: IPageContent) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {props.children}
    </div>
  );
};

export default PageContent;
