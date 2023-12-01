import { useContext, useRef } from "react";
// import "./login.css";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/authContext";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  //validate user
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  //register button fuction
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex justify-start w-full h-screen bg-neutral-100 md:justify-center md:items-center">
      <div className="flex flex-col items-center w-screen gap-10 mt-10 md:gap-0 md:mt-0 md:flex-row md:justify-between md:w-3/4">
        <div className="flex flex-col justify-center md:justify-start md:flex-1">
          <h3 className="text-4xl font-extrabold text-center md:text-5xl text-customPrimary md:text-left md:mb-2">
            AntiSociaL
          </h3>
          <span className="text-xl font-light text-center md:text-2xl md:text-left">
            Meet people you know and don't know
          </span>
        </div>
        <form
          className="flex flex-col items-center justify-center w-full px-5 md:flex-1"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-between w-full h-72">
            <input
              type="email"
              className="h-12 pl-5 text-lg border-2 border-gray-300 border-solid rounded-xl focus:outline-none"
              placeholder="username@email.com"
              ref={email}
              required
            />
            <input
              type="password"
              className="h-12 pl-5 text-lg border-2 border-gray-300 border-solid rounded-xl focus:outline-none"
              placeholder="Password"
              minLength={8}
              ref={password}
              required
            />
            <button
              className="h-12 text-lg font-medium border-none rounded-lg cursor-pointer bg-customPrimary text-textSecondary disabled:cursor-not-allowed"
              type="submit"
              disabled={isFetching}
            >
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
            <button
              className="h-12 text-lg font-medium border-none rounded-lg bg-[#1775ee] text-textSecondary cursor-pointer disabled:cursor-not-allowed"
              disabled={isFetching}
              onClick={handleRegister}
            >
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
