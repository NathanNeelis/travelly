import "./App.scss";
import SearchBar from "./view/components/atoms/searchBar/searchBar";
import Map from "./view/components/atoms/map/map";

function App() {
  return (
    <div>
      <Map />
      <h1>Travelly </h1>
      <SearchBar />
    </div>
  );
}

export default App;
