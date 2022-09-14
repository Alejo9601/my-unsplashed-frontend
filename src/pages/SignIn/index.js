import { useNavigate } from "react-router-dom";
import SignInBanner from "../../assets/sign-in-left.jpg";
import useUser from "../../hooks/useUser";
import FormFooter from "../../components/Generics/LogSignFormFooter";
import "../../styles/signin.css";
import SignInForm from "../../components/SignInForm";

const SignIn = () => {
  const { registerUser } = useUser();
  const navigate = useNavigate();

  const onFormSubmit = (username, password) => {
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
          <SignInForm onFormSubmit={onFormSubmit} />
          <FormFooter
            textFooter="Already have an account?"
            destLink="/login"
            linkText="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
