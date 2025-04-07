import React, { createContext, useContext } from "react";
import { AuthService, UserService } from "@app/services";

type ServiceProps = {
  children: React.ReactNode;
};

const auth = new AuthService();
const user = new UserService(auth);

const classes = { auth, user };
const ServiceContext = createContext(classes);

const ServiceProvider: React.FC<ServiceProps> = ({ children }) => {
  return (
    <ServiceContext.Provider value={classes}>
      {children}
    </ServiceContext.Provider>
  );
};

const useService = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error("useService must be used within a ServiceProvider");
  }

  return context;
};

export { ServiceContext, ServiceProvider, useService };
