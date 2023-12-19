import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./authReducer";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // access user stored in session
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(storedUser) });
    }
  }, []);

  // store user in session
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (!storedUser || storedUser === "null") {
      sessionStorage.setItem("user", JSON.stringify(state.user));
    }
  }, [state.user]);

  // logout function
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
