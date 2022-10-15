import $ from "../legalTravelling/legalTravelling.module.scss";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Beach(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);
  let name = props.title;

  function setBeachYes(event) {
    console.log("radiobutton event", event);
    if (event.target.checked) {
      setFilters({
        ...filters,
        coastalCategory: 1,
      });
    }
  }

  function setBeachNo(event) {
    if (event.target.checked) {
      setFilters({
        ...filters,
        coastalCategory: 0,
      });
    }
  }

  return (
    <div className={$.radiobuttons}>
      <legend>{name}</legend>
      <div className={$.radiobuttonsWrapper}>
        <label>
          <input
            type="radio"
            name={name}
            value="yes"
            id="BYes"
            onInput={setBeachYes}
          />
          <span className={$.radiobuttonsTile}>Yes</span>
        </label>
        <label>
          <input
            type="radio"
            name={name}
            value="no"
            id="BNo"
            onInput={setBeachNo}
          />
          <span className={$.radiobuttonsTile}>No</span>
        </label>
      </div>
    </div>
  );
}

export default Beach;
