import $ from "./surroundings.module.scss";
import SvgMountain from "../svgMountain/svgMountain";
import SvgBeach from "../svgBeach/svgBeach";
import SvgIsland from "../svgIsland/svgIsland";
import { useRecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Surroundings(props) {
  const [filters, setFilters] = useRecoilState(recoilFilters);

  function setMountains(event) {
    if (event.target.checked) {
      setFilters({
        ...filters,
        mountainCategory: 2,
      });
    } else {
      setFilters({
        ...filters,
        mountainCategory: undefined,
      });
    }
  }

  function setBeaches(event) {
    if (event.target.checked) {
      setFilters({
        ...filters,
        coastalCategory: 1,
      });
    } else {
      setFilters({
        ...filters,
        coastalCategory: undefined,
      });
    }
  }

  function setIslands(event) {
    if (event.target.checked) {
      setFilters({
        ...filters,
        isIsland: true,
      });
    } else {
      setFilters({
        ...filters,
        isIsland: undefined,
      });
    }
  }

  return (
    <div>
      <legend className={$.checkboxGroupLegend}>Surroundings</legend>
      <div className={$.checkboxGroup}>
        {/* Mountains  */}
        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbMountains"
              onInput={setMountains}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon} id={$.mountainIcon}>
                <SvgMountain />
              </span>
            </span>
            <span className={$.checkboxLabel}>Mountains</span>
          </label>
        </div>

        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbBeach"
              onInput={setBeaches}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgBeach />
              </span>
            </span>
            <span className={$.checkboxLabel}>Beaches</span>
          </label>
        </div>

        <div className={$.checkbox}>
          <label className={$.checkboxWrapper}>
            <input
              type="checkbox"
              className={$.checkboxInput}
              id="cbIsland"
              onInput={setIslands}
            />
            <span className={$.checkboxTile}>
              <span className={$.checkboxIcon}>
                <SvgIsland />
              </span>
            </span>
            <span className={$.checkboxLabel}>Islands</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Surroundings;
