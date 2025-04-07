import React from "react";
import { Button, Result } from "antd";

interface FallBackErrorProps {
  resetErrorBoundary: () => void;
  error: any;
}

const FallBackError: React.FC<FallBackErrorProps> = (
  props: FallBackErrorProps
) => {
  console.error(props.error);

  return (
    <Result
      status="500"
      title="Error"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={props.resetErrorBoundary}>
          Back to main page
        </Button>
      }
    />
  );
};

export default FallBackError;
