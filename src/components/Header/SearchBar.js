import { useRef } from "react";
import useImages from "../../hooks/useImages";

const SearchBar = () => {
  const { searchByName } = useImages();
  const inputRef = useRef();

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    searchByName(inputRef.current.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="header__searchbar">
      <div className="header__searchbar__icon"></div>
      <input
        ref={inputRef}
        type="search"
        name="search"
        placeholder="Search by name"
      />
    </form>
  );
};

export default SearchBar;
