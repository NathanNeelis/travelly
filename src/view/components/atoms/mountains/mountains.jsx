import $ from "../legalTravelling/legalTravelling.module.scss";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Radiobutton(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);
  let name = props.title;

  function setMountainsYes(event) {
    console.log("radiobutton event", event);
    if (event.target.checked) {
      setFilters({
        ...filters,
        mountainCategory: 2,
      });
    }
  }

  function setMountainsNo(event) {
    console.log("radiobutton event", event);
    if (event.target.checked) {
      setFilters({
        ...filters,
        mountainCategory: 4,
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
            id="MouYes"
            onInput={setMountainsYes}
          />
          <span className={$.radiobuttonsTile}>Yes</span>
        </label>
        <label>
          <input type="radio" name={name} id="MouNo" onInput={setMountainsNo} />
          <span className={$.radiobuttonsTile}>No</span>
        </label>
      </div>
    </div>
  );
}

export default Radiobutton;
