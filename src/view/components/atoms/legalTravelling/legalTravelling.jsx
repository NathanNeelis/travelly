import $ from "../legalTravelling/legalTravelling.module.scss";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function LegalTravelling(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);
  let name = props.title;
  let resetBtn = document.getElementById("reset");
  let rbYes = document.getElementById("LTYes");
  let rbNo = document.getElementById("LTNo");

  if (resetBtn) {
    resetBtn.addEventListener("click", (e) => {
      rbYes.checked = false;
      rbNo.checked = false;
      setFilters({
        ...filters,
        euMembership: undefined,
      });
    });
  }

  function setLTYes(event) {
    console.log("radiobutton event", event);
    if (event.target.checked) {
      setFilters({
        ...filters,
        euMembership: true,
      });
    }
  }

  function setLTNo(event) {
    console.log("radiobutton event", event);
    if (event.target.checked) {
      setFilters({
        ...filters,
        euMembership: false,
      });
    }
  }

  return (
    <div className={$.radiobuttons}>
      <legend>
        {name}{" "}
        <span className={$.reset} id="reset">
          reset
        </span>
      </legend>
      <div className={$.radiobuttonsWrapper}>
        <label>
          <input type="radio" name={name} id="LTYes" onInput={setLTYes} />
          <span className={$.radiobuttonsTile}>Yes</span>
        </label>
        <label>
          <input type="radio" name={name} id="LTNo" onInput={setLTNo} />
          <span className={$.radiobuttonsTile}>No</span>
        </label>
      </div>
    </div>
  );
}

export default LegalTravelling;
