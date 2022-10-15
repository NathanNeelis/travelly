import $ from "./filters.module.scss";
import Checkboxes from "../../atoms/checkbox/checkbox";
import LegalTravelling from "../../atoms/legalTravelling/legalTravelling";
import Mountains from "../../atoms/mountains/mountains";
import Beach from "../../atoms/beach/beach";
import Metro from "../../atoms/metro/metro";
import Summer from "../../atoms/summer/summer";
import Winter from "../../atoms/winter/winter";
import { testData } from "../../../utils/geolocation";
import { useRecoilState } from "recoil";
import {
  recoilFilters,
  userLocation,
} from "../../../../constants/recoil-atoms";
import { getData } from "../../../utils/getData";

function Filters(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);
  const [geoFilters, setGeoFilters] = useRecoilState(userLocation);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(position) {
    const coords = position.coords;
    const longitude = coords.longitude;
    const latitude = coords.latitude;
    setGeoFilters({
      longitude,
      latitude,
    });

    const locationInput = document.getElementById("startingPoint");
    locationInput.value = "searching";

    const fetchUrl =
      "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&localityLanguage=en";

    getData(fetchUrl).then((data) => {
      testData(data, locationInput);
      console.timeEnd("Get location");
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    const locationInput = document.getElementById("startingPoint");
    locationInput.value = "Could not find your location, please try again.";
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error, options);
    const locationInput = document.getElementById("startingPoint");
    locationInput.value = "searching";
  }

  function getUrbanRange(e) {
    console.log(e.target.value);
    if (e.target.value == 0) {
      setFilters({
        ...filters,
        urbanRuralRemoteCategory: 1,
      });
    } else if (e.target.value == 1) {
      setFilters({
        ...filters,
        urbanRuralRemoteCategory: undefined,
      });
    } else if (e.target.value == 2) {
      setFilters({
        ...filters,
        urbanRuralRemoteCategory: 32,
      });
    }
  }

  return (
    <div>
      <form action="">
        <section className={$.filters}>
          <div className={$.filtersBlock}>
            <h2>Destination</h2>
            <div className={$.inputWrapper}>
              <label htmlFor={$.startingPoint}>Starting point</label>
              <input
                type="text"
                id="startingPoint"
                className={$.filtersInput}
                placeholder="Where do you travel from?"
              />
              <div className={$.locationIcon}>
                <svg
                  version="1.1"
                  id={$.locationIcon}
                  x="0px"
                  y="0px"
                  viewBox="0 0 25 24.9"
                  width="30"
                  onClick={getLocation}
                >
                  <g>
                    <path
                      d="M12.5,9.8c-1.5,0-2.7,1.2-2.7,2.7c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7c0,0,0,0,0,0C15.2,11,14,9.8,12.5,9.8z
                        M12.5,14.2c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7c0,0,0,0,0,0C14.2,13.5,13.4,14.2,12.5,14.2z"
                    />
                    <path
                      d="M22.5,12h-1.7c-0.3-4.1-3.6-7.4-7.7-7.7V2.5c0-0.3-0.2-0.5-0.5-0.5C12.2,2,12,2.3,12,2.5v1.7C7.8,4.5,4.5,7.8,4.3,12H2.5
                       C2.3,12,2,12.2,2,12.5S2.3,13,2.5,13h1.7c0.3,4.2,3.6,7.5,7.7,7.7v1.7c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-1.7
                       c4.2-0.3,7.5-3.6,7.7-7.7h1.7c0.3,0,0.5-0.2,0.5-0.5C22.9,12.2,22.7,12,22.5,12z M13,19.7v-0.6c0-0.3-0.2-0.5-0.5-0.5
                       c-0.3,0-0.5,0.2-0.5,0.5v0.6c-3.6-0.3-6.5-3.1-6.7-6.7h0.6c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H5.3
                       C5.5,8.4,8.4,5.5,12,5.3v0.6c0,0.3,0.2,0.5,0.5,0.5S13,6.1,13,5.9V5.3c3.6,0.3,6.4,3.1,6.7,6.7h-0.6c-0.3,0-0.5,0.2-0.5,0.5
                       s0.2,0.5,0.5,0.5h0.6C19.5,16.6,16.6,19.5,13,19.7z"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* <div className={$.inputWrapper}>
              <label htmlFor="distance">Distance</label>
              <span className={$.extraInfo}>
                In kilometers from current location
              </span>
              <input
                type="range"
                id="km"
                name="km"
                min="0"
                max="5000"
                // placeholder="1000"
              />
            </div> */}

            <div className={$.inputWrapper}>
              <Checkboxes />
              {/* resource: https://codepen.io/havardob/pen/BapJYMg  */}
            </div>

            <div className={$.inputWrapper}>
              <LegalTravelling title={"Legal travelling"} />
            </div>
          </div>

          <div className={$.filtersBlock}>
            <h2>
              Environment{" "}
              <span className={$.reset} id="resetEnv">
                reset
              </span>
            </h2>

            <div className={$.inputWrapper}>
              <label htmlFor="distance">Urban</label>
              <div className={$.rangeWrapper}>
                <span className={$.extraInfo}>Urban</span>
                <input
                  type="range"
                  id="urban"
                  name="urban"
                  min="0"
                  max="2"
                  onInput={getUrbanRange}
                  placeholder="1"
                />
                <span className={$.extraInfo}>Remote</span>
              </div>
            </div>

            <div className={$.inputWrapper}>
              <div className={$.inputWrapper}>
                <Mountains title={"Mountains"} />
              </div>
              {/* <div className={$.toggleWrapper}>
                <label className={$.switch}>
                  <input type="checkbox" /> <div className={$.ball}></div>
                </label>
                <div className={$.filterPropertie}>Mountain areas</div>
              </div> */}
            </div>

            <div className={$.inputWrapper}>
              <div className={$.inputWrapper}>
                <Beach title={"Beach"} />
              </div>
            </div>

            <div className={$.inputWrapper}>
              <div className={$.inputWrapper}>
                <Metro title={"Metro"} />
              </div>
            </div>
          </div>

          <div className={$.filtersBlock}>
            <h2>Climate</h2>

            <div className={$.inputWrapper}>
              <Summer />
            </div>

            <div className={$.inputWrapper}>
              <Winter />
            </div>
          </div>
        </section>

        <span className={$.submitBtn}>Search destination</span>
      </form>
    </div>
  );
}

export default Filters;
