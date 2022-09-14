import "../../styles/login.css";
import logo from "../../assets/favicon.ico";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import FormFooter from "../../components/Generics/LogSignFormFooter";
import LoginCard from "../../components/Generics/LogSignCard";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const { validateUser } = useUser();
  const navigate = useNavigate();

  const onFormSubmit = (username, password) => {
    validateUser(username, password).then((user) =>
      user.logged ? navigate("/home") : null
    );
  };

  return (
    <div className="login-container">
      <LoginCard>
        <div className="login-card__header">
          <img src={logo} alt="unsplashed logo" />
          <h1>Login</h1>
          <span>Welcome</span>
        </div>
        <LoginForm onFormSubmit={onFormSubmit} />
        <FormFooter
          textFooter="Don't have an account?"
          destLink="/signin"
          linkText="Sign In"
        />
      </LoginCard>
    </div>
  );
};

export default Login;
