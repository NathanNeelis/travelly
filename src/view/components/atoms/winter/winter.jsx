import $ from "./winter.module.scss";
import SvgEscapeCold from "../../atoms/svgEscapeCold/svgEscapeCold";
import SvgWinterWonderland from "../../atoms/svgWinterWonderland/svgWinterWonderland";
import SvgFrisky from "../../atoms/svgFrisky/svgFrisky";

function Winter(props) {
  return (
    <div>
      <legend className={$.checkboxGroupLegend}>Winter</legend>
      <div className={$.checkboxGroup}>
        {/* Escape the heat  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input type="checkbox" className={$.checkboxInput} />
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
            <input type="checkbox" className={$.checkboxInput} />
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
            <input type="checkbox" className={$.checkboxInput} />
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
