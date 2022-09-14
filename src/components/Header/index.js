import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";
import "../../styles/header.css";
import Login from "./Login";
import useUser from "../../hooks/useUser";

const Header = ({ handleClickUpload }) => {
  const { user } = useUser();

  return (
    <header className="header">
      <Logo />
      <SearchBar />
      {user.logged ? <UploadBtn handleUpload={handleClickUpload} /> : <Login />}
    </header>
  );
};

export default Header;
