import { useNavigate } from "react-router-dom";
import SignInBanner from "../../assets/sign-in-left.jpg";
import useUser from "../../hooks/useUser";
import CardFooter from "../../components/Generics/LogSignFormFooter";
import "../../styles/signin.css";
import SignInForm from "../../components/SignInForm";
import SignInCard from "../../components/Generics/LogSignCard";

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
        <SignInCard>
          <div className="signin-card___header">
            <h1>Sign In</h1>
          </div>
          <SignInForm onFormSubmit={onFormSubmit} />
          <CardFooter
            textFooter="Already have an account?"
            destLink="/login"
            linkText="Login"
          />
        </SignInCard>
      </div>
    </div>
  );
};

export default SignIn;
