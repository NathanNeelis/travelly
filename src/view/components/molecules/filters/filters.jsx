import $ from "./filters.module.scss";
import Checkboxes from "../../atoms/checkbox/checkbox";
import Radiobutton from "../../atoms/radiobutton/radiobutton";
import { clickForLocation } from "../../../utils/geolocation";

function Filters(props) {
  //statefull filter object
  let filters = {
    country: "",
    region: "",
    currency: "EUR",
    europe: true,
    shengen: true,
    mountains: false,
    island: false,
    location: {
      latitude: 0,
      longitude: 0,
    },
    weather: {
      summer: "",
      winter: "",
    },
  };

  return (
    <div>
      <form action="">
        <section className={$.filters}>
          <div className={$.filtersBlock}>
            <div className={$.inputWrapper}>
              <label htmlFor="people">People</label>
              <input
                type="number"
                id={$.people}
                className={$.filtersInput}
                placeholder="1"
              />
            </div>

            <div className={$.inputWrapper}>
              <label htmlFor="duration">Duration</label>
              <div className={$.noteWrapper}>
                <input
                  type="number"
                  id={$.duration}
                  className={$.filtersInput}
                  placeholder="1"
                />
                <span className={$.note}>hours</span>
              </div>
            </div>

            <div className={$.inputWrapper}>
              <Checkboxes />
              {/* resource: https://codepen.io/havardob/pen/BapJYMg  */}
            </div>

            <div className={$.inputWrapper}>
              <Radiobutton />
            </div>
          </div>

          <div className={$.filtersBlock}>
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
                  onClick={clickForLocation}
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

            <div className={$.inputWrapper}>
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
            </div>

            <div className={$.inputWrapper}>
              <Checkboxes />
              {/* resource: https://codepen.io/havardob/pen/BapJYMg  */}
            </div>
          </div>

          <div className={$.filtersBlock}>
            <h2>Destination</h2>
            <div className={$.inputWrapper}>
              <label htmlFor="wheater">Weather</label>
              <span className={$.extraInfo}>Degrees in Celsius</span>
              <input
                type="range"
                id="celcius"
                name="celcius"
                min="-20"
                max="40"
                // placeholder="15"
              />
            </div>

            <div className={$.inputWrapper}>
              <Checkboxes />
              {/* resource: https://codepen.io/havardob/pen/BapJYMg  */}
            </div>
          </div>
        </section>

        <button className={$.submitBtn}>Search destination</button>
      </form>
    </div>
  );
}

export default Filters;
