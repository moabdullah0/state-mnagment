import { createContext } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// تعريف النوع للسياق
export interface AuthContextType {
  auth: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;
