import { Helmet } from "react-helmet";

export type PageProps = {
  title?: string;
  children: React.ReactNode;
};

const Page: React.FC<PageProps> = (props: PageProps) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </>
  );
};

export default Page;
