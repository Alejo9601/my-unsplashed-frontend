import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";
import "../../styles/header.css";
import { useState } from "react";
import Login from "./Login";

const Header = () => {
  const [logged, setLogged] = useState(true);

  return (
    <header className="header">
      <Logo></Logo>
      <SearchBar></SearchBar>
      {logged ? (
        <UploadBtn Style={{ alignSelf: "flex-end" }}></UploadBtn>
      ) : (
        <Login></Login>
      )}
    </header>
  );
};

export default Header;
