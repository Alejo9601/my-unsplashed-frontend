import { useContext } from "react";
import UserContext from "../context/UserContext";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return user.logged;
};

export default useUser;
