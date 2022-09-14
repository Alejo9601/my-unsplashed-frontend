import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInBanner from "../../assets/sign-in-left.jpg";
import useUser from "../../hooks/useUser";
import "../../styles/signin.css";

const SignIn = () => {
  const { registerUser } = useUser();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    registerUser(username, password).then((user) =>
      user.logged ? navigate("/home") : null
    );
  };

  return (
    <div className="signin-container">
      <div className="signin-container__left">
        <img src={SignInBanner} alt="banner" />
      </div>
      <div className="signin-container__right">
        <div className="signin-card">
          <div className="signin-card___header">
            <h1>Sign In</h1>
          </div>
          <form onSubmit={handleSubmit} className="signin-form">
            <label>
              Username
              <input
                ref={usernameRef}
                type="text"
                name="username"
                id="username"
              />
            </label>
            <label>
              Password
              <input
                ref={passwordRef}
                type="password"
                name="userpass"
                id="userpass"
              />
            </label>
            <input type="submit" value="Register" id="registerbtn" />
          </form>
          <div className="signin-card__footer">
            <p>You already have an account?</p>
            <Link to="/login"> Login </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
