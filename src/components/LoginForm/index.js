import { useRef } from "react";

const LoginForm = ({ onFormSubmit }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onFormSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-card__form">
      <label>
        User
        <input ref={usernameRef} id="username" type="text" name="username" />
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
  );
};

export default LoginForm;
