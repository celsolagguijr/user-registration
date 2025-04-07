import { message } from "antd";
import React, { createContext } from "react";

interface IMessageProvider {
  children: React.ReactNode;
}

interface MessageProviderType {
  info: (message: string) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
}

const MessageContext = createContext<MessageProviderType>({
  info: (message: string) => {},
  success: (message: string) => {},
  error: (message: string) => {},
  warning: (message: string) => {},
});

const MessageProvider: React.FC<IMessageProvider> = (
  props: IMessageProvider
) => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = (message: string) => {
    messageApi.info(message);
  };

  const success = (message: string) => {
    messageApi.success(message);
  };

  const error = (message: string) => {
    messageApi.error(message);
  };

  const warning = (message: string) => {
    messageApi.warning(message);
  };

  return (
    <MessageContext.Provider value={{ info, success, error, warning }}>
      {contextHolder}
      {props.children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => React.useContext(MessageContext);
export default MessageProvider;
