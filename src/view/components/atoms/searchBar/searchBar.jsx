import $ from "./searchBar.module.scss";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function SearchBar(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);

  function submitForm(event) {
    event.preventDefault();
  }

  function queryFilter(event) {
    event.preventDefault();
    console.log(event.target.value);
    setFilters({
      q: event.target.value,
    });
  }

  return (
    <div className={$.searchBar}>
      <form action="" id="searchQuery" onSubmit={submitForm}>
        <input
          type="text"
          name="searchInput"
          id={$.searchInput}
          className={$.searchInput}
          placeholder="Search"
          onInput={queryFilter}
        />
      </form>
    </div>
  );
}

export default SearchBar;
