import  { ReactNode, useState } from "react";
import AuthContext from "../Contexts/authContext";
import { User } from "../Contexts/AuthContexts";

interface Props {
  children: ReactNode;
}
export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setAuth(true);
    setUser(userData);
  };

  const logout = () => {
    setAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ auth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};