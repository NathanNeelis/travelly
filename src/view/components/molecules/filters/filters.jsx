import $ from "./filters.module.scss";
import Checkboxes from "../../atoms/checkbox/checkbox";
import Radiobutton from "../../atoms/radiobutton/radiobutton";

function Filters(props) {
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
                value="1000"
              />
            </div>

            <div className={$.inputWrapper}>
              <Checkboxes />
              {/* resource: https://codepen.io/havardob/pen/BapJYMg  */}
            </div>
          </div>

          <div className={$.filtersBlock}>
            <div className={$.inputWrapper}>
              <label htmlFor="wheater">Weather</label>
              <span className={$.extraInfo}>Degrees in Celsius</span>
              <input
                type="range"
                id="celcius"
                name="celcius"
                min="-20"
                max="40"
                value="15"
              />
            </div>

            <div className={$.inputWrapper}>
              <Checkboxes />
              {/* resource: https://codepen.io/havardob/pen/BapJYMg  */}
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Filters;
