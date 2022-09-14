import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
        <div className="sigin-card">
          <form onSubmit={handleSubmit} className="signin-form">
            <input
              ref={usernameRef}
              type="text"
              name="username"
              id="username"
            />
            <input
              ref={passwordRef}
              type="password"
              name="userpass"
              id="userpass"
            />
            <input type="submit" value="Register" id="registerbtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
