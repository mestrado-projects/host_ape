import { useState, createContext, ReactNode } from "react";

export interface UserTokenContextType {
  token: string | false;
  setAndPersistToken: (token: string) => void;
  logout: () => void;
}

export const UserToken = createContext<UserTokenContextType | undefined>(undefined);

interface UserLoginProviderProps {
  children: ReactNode;
}

export default function UserLoginProvider({ children }: UserLoginProviderProps) {
  const [token, setToken] = useState<string | false>(
    JSON.parse(localStorage.getItem("token") || "false")
  );

  function setAndPersistToken(token: string) {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  }

  function logout() {
    localStorage.clear();
    setToken(false);
  }

  return (
    <UserToken.Provider value={{ token, logout, setAndPersistToken }}>
      {children}
    </UserToken.Provider>
  );
}
