import { useContext } from "react";
import UserContext from "../context/UserContext";
import login from "../services/login";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const validateUser = (username, password) => {
    return login(username, password).then((res) => {
      const userLogged = {
        name: res.username,
        logged: true,
      };
      setUser(userLogged);
      return userLogged;
    });
  };

  return { user, validateUser };
};

export default useUser;
