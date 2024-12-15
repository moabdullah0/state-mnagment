import { createContext, Dispatch } from "react";
import { authAction } from "../Reducer/authReducer";

interface authTypeContext {
  user: string;
  dispatch: Dispatch<authAction>;
}

const AuthContext = createContext<authTypeContext>({} as authTypeContext);
export default AuthContext;
