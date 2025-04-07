import { Navigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

export interface IProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = (
  props: IProtectedRouteProps
) => {
  const { isValid } = useAuth();

  return isValid ? props.children : <Navigate to="/login" />;
};

export default ProtectedRoute;
