import { useState, createContext, ReactNode, useEffect } from "react";

export interface UserTokenContextType {
  token: string | false;
  setAndPersistToken: (token: string) => void;
  logout: () => void;
}

export const UserToken = createContext<UserTokenContextType | undefined>(
  undefined
);

interface UserLoginProviderProps {
  children: ReactNode;
}

export default function UserLoginProvider({ children }: UserLoginProviderProps) {
  const [token, setToken] = useState<string | false>(() => {
    try {
      const storedToken = localStorage.getItem("token");
      return storedToken ? JSON.parse(storedToken) : false;
    } catch (error) {
      console.error("Error reading token from localStorage:", error);
      return false;
    }
  });

  useEffect(() => {
    try {
      if (token) {
        localStorage.setItem("token", JSON.stringify(token));
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Error writing token to localStorage:", error);
    }
  }, [token]);

  function setAndPersistToken(newToken: string) {
    setToken(newToken);
  }

  function logout() {
    setToken(false);
  }

  return (
    <UserToken.Provider value={{ token, logout, setAndPersistToken }}>
      {children}
    </UserToken.Provider>
  );
}
