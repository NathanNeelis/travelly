import $ from "./transport.module.scss";
import SvgMetro from "../svgMetro/svgMetro";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Transport(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);

  function setMetro(event) {
    if (event.target.checked) {
      setFilters({
        ...filters,
        metroCategory: true,
      });
    } else {
      setFilters({
        ...filters,
        metroCategory: undefined,
      });
    }
  }

  return (
    <div>
      <legend className={$.checkboxGroupLegend}>Transport</legend>
      <div className={$.checkboxGroup}>
        {/* metro  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbMetro"
              onInput={setMetro}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon} id={$.mountainIcon}>
                <SvgMetro />
              </span>
            </span>
            <span className={$.checkboxLabel}>Metro</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Transport;
