interface LoginAction {
  username: string;
  type: "Login";
}

interface LogoutAction {
  type: "Logout";
}
export type authAction = LoginAction | LogoutAction;
const authReducer = (state: string, action: authAction): string => {
  if (action.type === "Login") return action.username;
  if (action.type === "Logout") return "";
  return state;
};
export default authReducer;
