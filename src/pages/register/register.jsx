import "./register.css";

const Register = () => {
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
              type="text"
              className="loginEmail loginInput"
              placeholder="Username"
            />
            <input
              type="email"
              className="loginEmail loginInput"
              placeholder="Email"
            />
            <input
              type="password"
              className="loginEmail loginInput"
              placeholder="Password"
            />
            <input
              type="password"
              className="loginEmail loginInput"
              placeholder="Re-type Password"
            />
            <button className="loginButton">Sign Up</button> 
            <hr />
            <p className="registerText">Already have an account ?</p>
            <button className="loginRegisterButton">Log in to Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
