import $ from "./intro.module.scss";
import Map from "../../atoms/map/map";
import SearchBar from "../../atoms/searchBar/searchBar";
import Heading from "../../atoms/mainTitle/mainTitle";
import NavList from "../../atoms/navList/navList";

function Intro(props) {
  return (
    <div className={$.intro}>
      <Map />
      <Heading />
      <div className={$.searchBarContainer}>
        <SearchBar />
      </div>

      <NavList />
    </div>
  );
}

export default Intro;
