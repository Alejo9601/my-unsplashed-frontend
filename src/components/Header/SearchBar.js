const SearchBar = () => {
  return (
    <form className="header__searchbar">
      <div className="header__searchbar__icon"></div>
      <input type="search" name="search" placeholder="Search by name" />
    </form>
  );
};

export default SearchBar;
