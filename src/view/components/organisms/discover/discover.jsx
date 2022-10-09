import $ from "./discover.module.scss";
import SectionHeader from "../../molecules/sectionHeader/sectionHeader";
import SearchBar from "../../atoms/searchBar/searchBar";
import Filters from "../../molecules/filters/filters";

function Discover(props) {
  return (
    <div className={$.discover}>
      <SectionHeader section={"Discover"} subtitle={"Where to next?"} />

      <div className={$.searchBarContainer}>
        <SearchBar />
      </div>

      <div className={$.filter}>
        <Filters />
        {/* 2. Filter options -> to be conluded 
      2.1 Filter travel companions
      2.2 Filter distances
      2.3 filter Weahter  */}
      </div>
    </div>
  );
}

export default Discover;

{
  /* Discover 
      1. Header 
      1.1 title
      1.2 subtitle
      1.3 search bar -> local storage for header searchbar?

      2. Filter options -> to be conluded 
      2.1 Filter travel companions
      2.2 Filter distances
      2.3 filter Weahter 

      3.1 Search results
      3.1 header
      3.2 sorting option
      3.3 result cards
      
      
      */
}
