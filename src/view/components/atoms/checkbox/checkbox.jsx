import $ from "./checkbox.module.scss";
import SvgBike from "../svgBike/svgBike";
import SvgCar from "../svgCar/svgCar";
import SvgTrain from "../svgTrain/svgTrain";
import { useRecoilState } from "recoil";
import {
  recoilFilters,
  userLocation,
} from "../../../../constants/recoil-atoms";

function Checkboxes(props) {
  const [geoFilters, setGeoFilters] = useRecoilState(userLocation);

  function setBicycle(event) {
    if (event.target.checked) {
      setGeoFilters({
        ...geoFilters,
        bicycle: true,
      });
    } else {
      setGeoFilters({
        ...geoFilters,
        bicycle: false,
      });
    }
  }

  function setTrain(event) {
    if (event.target.checked) {
      setGeoFilters({
        ...geoFilters,
        train: true,
      });
    } else {
      setGeoFilters({
        ...geoFilters,
        train: false,
      });
    }
  }

  function setCar(event) {
    if (event.target.checked) {
      setGeoFilters({
        ...geoFilters,
        car: true,
      });
    } else {
      setGeoFilters({
        ...geoFilters,
        car: false,
      });
    }
  }

  return (
    <div>
      <legend className={$.checkboxGroupLegend}>Travel Method</legend>
      <div className={$.checkboxGroup}>
        {/* caravan / camper  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            {/* <input type="checkbox" className={$.checkboxInput} /> */}
            <input
              type="checkbox"
              className={$.checkboxInput}
              onChange={(e) => {
                setBicycle(e);
              }}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon} id={$.bikeIcon}>
                <SvgBike />
              </span>
            </span>
            <span className={$.checkboxLabel}>Bicycle</span>
          </label>
        </div>

        {/* car  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              onChange={(e) => {
                setCar(e);
              }}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgCar />
              </span>
            </span>
            <span className={$.checkboxLabel}>Car</span>
          </label>
        </div>

        {/* train  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              onChange={(e) => {
                setTrain(e);
              }}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgTrain />
              </span>
            </span>
            <span className={$.checkboxLabel}>Train</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Checkboxes;
