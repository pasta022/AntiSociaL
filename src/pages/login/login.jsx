import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AntiSociaL</h3>
          <span className="loginDesc">Meet people you know and don't know</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="email"
              className="loginEmail loginInput"
              placeholder="username@email.com"
            />
            <input
              type="password"
              className="loginEmail loginInput"
              placeholder="Password"
            />
            <button className="loginButton">Log In</button>
            <div className="loginForgotPasswordContainer">
              <p className="loginForgotPassword">Forgot Password ?</p>
            </div>
            <hr />
            <button className="loginRegisterButton">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
