import { useRef } from "react";

const SignInForm = ({ onFormSubmit }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onFormSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <label>
        Username
        <input
          ref={usernameRef}
          type="text"
          name="username"
          id="username"
          required="required"
        />
      </label>
      <label>
        Password
        <input
          ref={passwordRef}
          type="password"
          name="userpass"
          id="userpass"
          required="required"
        />
      </label>
      <input type="submit" value="Register" id="registerbtn" />
    </form>
  );
};

export default SignInForm;
