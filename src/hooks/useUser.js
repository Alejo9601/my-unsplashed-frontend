import { useContext } from "react";
import UserContext from "../context/UserContext";
import login from "../services/login";
import signin from "../services/signin";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const validateUser = (username, password) => {
    return login(username, password).then((res) => {
      if (res === null) {
        setUser({ username: "", logged: false });
      }
      setUser({ username: username, logged: true });
    });
  };

  const registerUser = (username, password) => {
    const newUser = {
      username: username,
      password: password,
    };
    return signin(newUser).then((res) => {
      const userLogged = {
        name: res.username,
        logged: true,
      };
      setUser(userLogged);
      return userLogged;
    });
  };

  return { user, validateUser, registerUser };
};

export default useUser;
