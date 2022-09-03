import { useContext } from "react";
import UserContext from "../context/UserContext";
import login from "../services/login";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const validateUser = (username, password) => {
    login(username, password).then((res) => console.log(res));
  };

  return { user, validateUser };
};

export default useUser;
