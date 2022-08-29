import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";
import "../../styles/header.css";
import { useState } from "react";
import Login from "./Login";
import useUser from "../../hooks/useUser";

const Header = () => {
  const isLogged = useUser();

  return (
    <header className="header">
      <Logo></Logo>
      <SearchBar></SearchBar>
      {isLogged ? (
        <UploadBtn Style={{ alignSelf: "flex-end" }}></UploadBtn>
      ) : (
        <Login></Login>
      )}
    </header>
  );
};

export default Header;
