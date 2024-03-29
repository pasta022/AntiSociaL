import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";
// import "./register.css";

const Register = () => {
  // component states
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const [showDiv, setShowDiv] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  // api endpoints
  const baseUrl = process.env.REACT_APP_BASE_URL;

  //register user
  const handleClick = async (e) => {
    e.preventDefault();
    // check password
    if (passwordAgain.current.value !== password.current.value) {
      setShowDiv(true);
      setTimeout(() => {
        setShowDiv(false);
      }, 1500);
      password.current.value = "";
      passwordAgain.current.value = "";
    } else {
      setShowDiv(false);
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        setFetching(true);
        await axios.post(`${baseUrl}/api/auth/register`, user);
        navigate("/login");
      } catch (error) {
        console.log(error);
        setError(true);
        setFetching(false);
      }
    }
  };

  // navigate to login page
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-start w-full h-screen bg-neutral-100 md:justify-center md:items-center">
      <div className="flex flex-col items-center w-screen gap-10 mt-10 md:gap-0 md:mt-0 md:flex-row md:justify-between md:w-3/4">
        <div className="flex flex-col justify-center md:justify-start md:flex-1">
          <h3 className="text-4xl font-extrabold text-center md:text-5xl text-customPrimary md:text-left md:mb-2">
            AntiSociaL
          </h3>
          <span className="text-lg font-light text-center md:text-2xl md:text-left">
            Meet people you know and don't know
          </span>
        </div>
        <form
          className="flex flex-col items-center justify-center w-full px-5 md:flex-1"
          onSubmit={handleClick}
        >
          <div className="flex flex-col justify-between w-full h-96">
            <div className="w-full">
              <input
                type="text"
                className="w-full h-12 pl-5 text-lg border-2 border-gray-300 border-solid rounded-xl focus:outline-none"
                placeholder="Username"
                ref={username}
                required
              />
              {error && <p className="block mt-1 mb-0 text-sm text-center text-red-600">Username/Email already exists. Try another name</p>}
            </div>
            <input
              type="email"
              className="h-12 pl-5 text-lg border-2 border-gray-300 border-solid rounded-xl focus:outline-none"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              type="password"
              className="h-12 pl-5 text-lg border-2 border-gray-300 border-solid rounded-xl focus:outline-none"
              placeholder="Password"
              ref={password}
              required
              minLength={8}
            />
            <input
              type="password"
              className="h-12 pl-5 text-lg border-2 border-gray-300 border-solid rounded-xl focus:outline-none"
              placeholder="Re-type Password"
              ref={passwordAgain}
              required
            />
            {showDiv && (
              <p className="font-light text-center text-red-500">
                Passwords don't match
              </p>
            )}
            <button
              className="h-12 mt-4 text-lg font-medium border-none rounded-lg cursor-pointer bg-customPrimary text-textSecondary disabled:cursor-not-allowed"
              type="submit"
            >
              {fetching ? (
                <CircularProgress color="inherit" size={25} />
              ) : (
                "Sign Up"
              )}
            </button>
            <hr />
            <p>
              <span className="font-light">Already have an account ?</span>
            </p>
            <button
              className="h-12 text-lg font-medium border-none rounded-lg bg-[#1775ee] text-textSecondary cursor-pointer disabled:cursor-not-allowed"
              onClick={handleLogin}
            >
              Log in to Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
