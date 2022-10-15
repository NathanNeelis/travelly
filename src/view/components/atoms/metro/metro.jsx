import $ from "../legalTravelling/legalTravelling.module.scss";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Metro(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);
  let name = props.title;

  function setMetroYes(event) {
    console.log("radiobutton event", event);
    if (event.target.checked) {
      setFilters({
        ...filters,
        metroCategory: 1,
      });
    }
  }

  function setMetroNo(event) {
    console.log("radiobutton event", event);
    if (event.target.checked) {
      setFilters({
        ...filters,
        metroCategory: 0,
      });
    }
  }

  return (
    <div className={$.radiobuttons}>
      <legend>{name} </legend>
      <div className={$.radiobuttonsWrapper}>
        <label>
          <input type="radio" name={name} id="MetYes" onInput={setMetroYes} />
          <span className={$.radiobuttonsTile}>Yes</span>
        </label>
        <label>
          <input type="radio" name={name} id="MetNo" onInput={setMetroNo} />
          <span className={$.radiobuttonsTile}>No</span>
        </label>
      </div>
    </div>
  );
}

export default Metro;
