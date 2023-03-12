import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/authContext'
import { CircularProgress } from "@mui/material";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({
      email: email.current.value,
      password: password.current.value
    }, dispatch);

  }
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AntiSociaL</h3>
          <span className="loginDesc">Meet people you know and don't know</span>
        </div>
        <form className="loginRight" onSubmit={handleSubmit}>
          <div className="loginBox">
            <input
              type="email"
              className="loginEmail loginInput"
              placeholder="username@email.com"
              ref={email}
              required
            />
            <input
              type="password"
              className="loginPassword loginInput"
              placeholder="Password"
              minLength={8}
              ref={password}
              required
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size={25} />
              ) : (
                "Log in"
              )}
            </button>
            <div className="loginForgotPasswordContainer">
              <p className="loginForgotPassword">Forgot Password ?</p>
            </div>
            <hr />
            <button className="loginRegisterButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size={25} />
              ) : (
                "Create New Account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
