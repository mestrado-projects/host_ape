import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { UserToken, UserTokenContextType } from "../contexts/UserToken";

export interface DecodedToken {
  id: string;
  email: string;
  exp: number;
  [key: string]: any;
}

export default function useToken(): UserTokenContextType {
  const context = useContext(UserToken);

  if (!context) {
    throw new Error("useToken must be used within a UserLoginProvider");
  }

  const { token, setAndPersistToken, logout } = context;

  const getDecodedToken = (): DecodedToken | null => {
    if (!token) return null;

    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Invalid token:", error);
      logout();
      return null;
    }
  };

  const decodedToken = getDecodedToken();

  return {
    token,
    setAndPersistToken,
    logout,
    decodedToken,
  };
}
