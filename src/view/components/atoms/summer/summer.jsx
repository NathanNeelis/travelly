import $ from "./summer.module.scss";
import SvgScorchingHeat from "../svgScorchingHeat/scorchingHeat";
import SvgHotHumid from "../svgHotHumid/svgHotHumid";
import SvgMildSummer from "../../atoms/svgMildSummer/svgMildSummer";
import SvgEscapeHeat from "../../atoms/svgEscapeHeat/svgEscapeHeat";

function Summer(props) {
  return (
    <div>
      <legend className={$.checkboxGroupLegend}>Summer</legend>
      <div className={$.checkboxGroup}>
        {/* Escape the heat  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input type="checkbox" className={$.checkboxInput} />
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
            <input type="checkbox" className={$.checkboxInput} />
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
            <input type="checkbox" className={$.checkboxInput} />
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
            <input type="checkbox" className={$.checkboxInput} />
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
