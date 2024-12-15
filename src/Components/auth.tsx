import useAuth from "../hooks/useAuth";

const Auth = () => {
  const { user, dispatch } = useAuth();
  return (
    <div>
      {user ? (
        <button
          onClick={() =>
            dispatch({ type: "Login", username: "Mohamad Alibrahim" })
          }
        >
          Login
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "Logout" })}>Logout</button>
      )}
    </div>
  );
};

export default Auth;
