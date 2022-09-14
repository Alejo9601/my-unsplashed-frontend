import SignInBanner from "../../assets/sign-in-left.jpg";
import "../../styles/signin.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-container__left">
        <img src={SignInBanner} alt="banner" />
      </div>
      <div className="signin-container__right">
        <div className="sigin-card">
          <form className="signin-form">
            <input type="text" name="username" id="username" />
            <input type="password" name="userpass" id="userpass" />
            <input type="submit" value="Register" id="registerbtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
