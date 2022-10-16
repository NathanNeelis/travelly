import $ from "./winter.module.scss";
import SvgEscapeCold from "../../atoms/svgEscapeCold/svgEscapeCold";
import SvgWinterWonderland from "../../atoms/svgWinterWonderland/svgWinterWonderland";
import SvgFrisky from "../../atoms/svgFrisky/svgFrisky";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Winter(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);
  let cbWinterWonderland = document.getElementById("cbWinterWonderland");
  let cbFrisky = document.getElementById("cbFrisky");
  let cbEscapeTheCold = document.getElementById("cbEscapeTheCold");
  let cbEscapeTheHeat = document.getElementById("cbEscapeTheHeat");
  let cbMildSummer = document.getElementById("cbMildSummer");
  let cbScorchingHeat = document.getElementById("cbScorchingHeat");
  let cbHotHumid = document.getElementById("cbHotHumid");

  function setWinterWonderland(event) {
    if (event.target.checked) {
      cbFrisky.checked = false;
      cbEscapeTheCold.checked = false;
      cbEscapeTheHeat.checked = false;
      cbMildSummer.checked = false;
      cbScorchingHeat.checked = false;
      cbHotHumid.checked = false;

      setFilters({
        ...filters,
        tags: "winterWonderland",
      });
    } else {
      setFilters({
        ...filters,
        tags: undefined,
      });
    }
  }

  function setFrisky(event) {
    if (event.target.checked) {
      cbWinterWonderland.checked = false;
      cbEscapeTheCold.checked = false;
      cbEscapeTheHeat.checked = false;
      cbMildSummer.checked = false;
      cbScorchingHeat.checked = false;
      cbHotHumid.checked = false;

      setFilters({
        ...filters,
        tags: "frisky",
      });
    } else {
      setFilters({
        ...filters,
        tags: undefined,
      });
    }
  }

  function setEscapeTheCold(event) {
    if (event.target.checked) {
      cbWinterWonderland.checked = false;
      cbFrisky.checked = false;
      cbEscapeTheHeat.checked = false;
      cbMildSummer.checked = false;
      cbScorchingHeat.checked = false;
      cbHotHumid.checked = false;

      setFilters({
        ...filters,
        tags: "escapeTheCold",
      });
    } else {
      setFilters({
        ...filters,
        tags: undefined,
      });
    }
  }

  return (
    <div>
      <legend className={$.checkboxGroupLegend}>Winter</legend>
      <div className={$.checkboxGroup}>
        {/* Escape the heat  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbEscapeTheCold"
              onInput={setEscapeTheCold}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgEscapeCold />
              </span>
            </span>
            <span className={$.checkboxLabel}>Escape The Cold</span>
          </label>
        </div>

        {/* Mild summer  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbFrisky"
              onInput={setFrisky}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgFrisky />
              </span>
            </span>
            <span className={$.checkboxLabel}>Frisky</span>
          </label>
        </div>

        {/* Scorching Heat  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbWinterWonderland"
              onInput={setWinterWonderland}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgWinterWonderland />
              </span>
            </span>
            <span className={$.checkboxLabel}>Winter Wonderland</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Winter;
