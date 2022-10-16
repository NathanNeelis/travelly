import $ from "./summer.module.scss";
import SvgScorchingHeat from "../svgScorchingHeat/scorchingHeat";
import SvgHotHumid from "../svgHotHumid/svgHotHumid";
import SvgMildSummer from "../../atoms/svgMildSummer/svgMildSummer";
import SvgEscapeHeat from "../../atoms/svgEscapeHeat/svgEscapeHeat";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Summer(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);
  let cbWinterWonderland = document.getElementById("cbWinterWonderland");
  let cbFrisky = document.getElementById("cbFrisky");
  let cbEscapeTheCold = document.getElementById("cbEscapeTheCold");
  let cbEscapeTheHeat = document.getElementById("cbEscapeTheHeat");
  let cbMildSummer = document.getElementById("cbMildSummer");
  let cbScorchingHeat = document.getElementById("cbScorchingHeat");
  let cbHotHumid = document.getElementById("cbHotHumid");

  function setEscapeTheHeat(event) {
    if (event.target.checked) {
      cbWinterWonderland.checked = false;
      cbFrisky.checked = false;
      cbEscapeTheCold.checked = false;
      cbMildSummer.checked = false;
      cbScorchingHeat.checked = false;
      cbHotHumid.checked = false;

      setFilters({
        ...filters,
        tags: "escapeTheHeat",
      });
    } else {
      setFilters({
        ...filters,
        tags: undefined,
      });
    }
  }

  function setMildSummer(event) {
    if (event.target.checked) {
      cbWinterWonderland.checked = false;
      cbFrisky.checked = false;
      cbEscapeTheCold.checked = false;
      cbEscapeTheHeat.checked = false;
      cbScorchingHeat.checked = false;
      cbHotHumid.checked = false;

      setFilters({
        ...filters,
        tags: "mildSummer",
      });
    } else {
      setFilters({
        ...filters,
        tags: undefined,
      });
    }
  }

  function setScorchingHeat(event) {
    if (event.target.checked) {
      cbWinterWonderland.checked = false;
      cbFrisky.checked = false;
      cbEscapeTheCold.checked = false;
      cbEscapeTheHeat.checked = false;
      cbMildSummer.checked = false;
      cbHotHumid.checked = false;

      setFilters({
        ...filters,
        tags: "scorchingHeat",
      });
    } else {
      setFilters({
        ...filters,
        tags: undefined,
      });
    }
  }

  function setHotHumid(event) {
    if (event.target.checked) {
      cbWinterWonderland.checked = false;
      cbFrisky.checked = false;
      cbEscapeTheCold.checked = false;
      cbEscapeTheHeat.checked = false;
      cbScorchingHeat.checked = false;
      cbMildSummer.checked = false;

      setFilters({
        ...filters,
        tags: "hotAndHumid",
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
      <legend className={$.checkboxGroupLegend}>Summer</legend>
      <div className={$.checkboxGroup}>
        {/* Escape the heat  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbEscapeTheHeat"
              onInput={setEscapeTheHeat}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgEscapeHeat />
              </span>
            </span>
            <span className={$.checkboxLabel}>Escape The Heat</span>
          </label>
        </div>

        {/* Mild summer  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbMildSummer"
              onInput={setMildSummer}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgMildSummer />
              </span>
            </span>
            <span className={$.checkboxLabel}>Mild Summer</span>
          </label>
        </div>

        {/* Scorching Heat  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbScorchingHeat"
              onInput={setScorchingHeat}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon} id={$.scHeatIcon}>
                <SvgScorchingHeat />
              </span>
            </span>
            <span className={$.checkboxLabel}>Scorching Heat</span>
          </label>
        </div>

        {/* Hot & Humid  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbHotHumid"
              onInput={setHotHumid}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgHotHumid />
              </span>
            </span>
            <span className={$.checkboxLabel}>Hot & Humid</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Summer;
