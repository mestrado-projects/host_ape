import { useContext } from "react";
import { UserToken, UserTokenContextType } from "../contexts/UserToken";

export default function useToken(): UserTokenContextType {
  const context = useContext(UserToken);

  if (!context) {
    throw new Error("useToken must be used within a UserLoginProvider");
  }

  return context;
}
