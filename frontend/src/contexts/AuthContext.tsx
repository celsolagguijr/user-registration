import React, { createContext } from "react";
import { jwtDecode } from "jwt-decode";
interface AuthProviderType {
  children: React.ReactNode;
}

interface AuthContextType {
  token: string;
  isValid: boolean;
}

const AuthContext = createContext<AuthContextType>({
  token: "",
  isValid: false,
});

function isTokenValid(token: string): boolean {
  if (token === "") return false;

  try {
    const { exp } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    const isExpired: boolean = (exp || 0) > currentTime;
    return isExpired;
  } catch (error) {
    return false;
  }
}

const AuthProvider: React.FC<AuthProviderType> = (props: AuthProviderType) => {
  const token = localStorage.getItem("access_token") || "";
  const isValid = isTokenValid(token);

  return (
    <AuthContext.Provider value={{ token, isValid }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export const useAuth = () => React.useContext(AuthContext);
export default AuthContext;
