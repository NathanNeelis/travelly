import $ from "./destinations.module.scss";
import Map from "../../atoms/map/map";
import SearchBar from "../../atoms/searchBar/searchBar";

function Destinations(props) {
  return (
    <div className={$.destinations}>
      <h2>Destinations</h2>
      <Map />
    </div>
  );
}

export default Destinations;

{
  /* Destinations 
      
      1. Destinations
      1.1 title
      1.2 subtitle
      1.3 map (interactive)
      1.4 location result card (example: france)
      
      */
}
