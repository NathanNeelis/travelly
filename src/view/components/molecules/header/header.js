import $ from "./header.module.scss";
import Map from "../../atoms/map/map";
import SearchBar from "../../atoms/searchBar/searchBar";
import Title from "../../atoms/title/title";

function Header(props) {
  return (
    <div className={$.header}>
      <Map />
      <Title />
      <SearchBar />
    </div>
  );
}

export default Header;
