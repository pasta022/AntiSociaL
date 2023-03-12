import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {

  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const [showDiv, setShowDiv] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = async (e) => {
    e.preventDefault();
    console.log('clicked');
    if (passwordAgain.current.value !== password.current.value) {
      setShowDiv(true);
      password.current.value = "";
      passwordAgain.current.value = "";
    } 
    else {
      setShowDiv(false);
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AntiSociaL</h3>
          <span className="loginDesc">Meet people you know and don't know</span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="registerBox">
            <input
              type="text"
              className="loginEmail loginInput"
              placeholder="Username"
              ref={username}
              required
            />
            <input
              type="email"
              className="loginEmail loginInput"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              type="password"
              className="loginEmail loginInput"
              placeholder="Password"
              ref={password}
              required
              minLength={8}
            />
            <input
              type="password"
              className="loginEmail loginInput"
              placeholder="Re-type Password"
              ref={passwordAgain}
              required
            />
            {showDiv && <p className="wrongPassword">Passwords don't match</p>}
            <button className="loginButton" type="submit">Sign Up</button>
            <hr />
            <p>
              <span className="registerText">Already have an account ?</span>
            </p>
            <button className="loginRegisterButton">Log in to Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
