import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import defaultTheme from "@themes/default";
import "@assets/styles/global.css";
import Loading from "@components/Loading";
import Routers from "@routes/AppRoutes";
import { ServiceProvider } from "@contexts/ServiceContext";
import { AuthProvider } from "@contexts/AuthContext";
import { ErrorBoundary } from "react-error-boundary";
import FallBackError from "@features/FallBackError";
import { Navigate } from "react-router-dom";
import MessageProvider from "@contexts/MessageContext";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <ConfigProvider theme={defaultTheme}>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <MessageProvider>
          <AuthProvider>
            <ServiceProvider>
              <ErrorBoundary
                FallbackComponent={FallBackError}
                onReset={() => <Navigate to="/user-registration" />}
              >
                <Routers />
              </ErrorBoundary>
            </ServiceProvider>
          </AuthProvider>
        </MessageProvider>
      </QueryClientProvider>
    </Suspense>
  </ConfigProvider>
);

export default App;
