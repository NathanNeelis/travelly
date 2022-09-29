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

        {/* icon  */}
        {/* <input type="submit" className={$.submitBtn} /> */}
      </form>
    </div>
  );
}

export default SearchBar;
