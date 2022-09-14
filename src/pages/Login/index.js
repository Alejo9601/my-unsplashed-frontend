import "../../styles/login.css";
import logo from "../../assets/favicon.ico";
import useUser from "../../hooks/useUser";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { validateUser } = useUser();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    validateUser(usernameRef.current.value, passwordRef.current.value).then(
      (user) => (user.logged ? navigate("/home") : null)
    );
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card__header">
          <img src={logo} alt="unsplashed logo" />
          <h1>Login</h1>
          <span>Welcome</span>
        </div>
        <form onSubmit={handleSubmit} className="login-card__form">
          <label>
            User
            <input
              ref={usernameRef}
              id="username"
              type="text"
              name="username"
            />
          </label>
          <label>
            Password
            <input
              ref={passwordRef}
              id="userpass"
              type="password"
              name="userpass"
            />
          </label>
          <input id="login-btn" type="submit" name="loginbtn" value="Login" />
        </form>
        <div className="login-card__footer">
          <p>Dont´t have an account?</p>
          <Link to="/signin"> Sign In </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
