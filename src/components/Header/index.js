import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <UploadBtn Style={{ alignSelf: "flex-end" }}></UploadBtn>
    </header>
  );
};

export default Header;
