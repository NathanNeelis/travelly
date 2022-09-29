import $ from "./searchBar.module.scss";

function SearchBar(props) {
  return (
    <div className={$.searchBar}>
      <form action="">
        <input
          type="text"
          name="searchInput"
          id={$.searchInput}
          className={$.searchInput}
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
