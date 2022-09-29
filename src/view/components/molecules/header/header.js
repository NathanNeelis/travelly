import $ from "./header.module.scss";
import Map from "../../atoms/map/map";
import SearchBar from "../../atoms/searchBar/searchBar";
import Title from "../../atoms/title/title";
import NavList from "../../atoms/navList/navList";

function Header(props) {
  return (
    <div className={$.header}>
      <Map />
      <Title />
      <SearchBar />
      <NavList />
    </div>
  );
}

export default Header;
