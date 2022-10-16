import React, { useState, useEffect } from "react";
import $ from "./discover.module.scss";
import SectionHeader from "../../molecules/sectionHeader/sectionHeader";
import SearchBar from "../../atoms/searchBar/searchBar";
import Filters from "../../molecules/filters/filters";
import Results from "../../molecules/results/results";
import { loadData } from "../../../utils/getData";
import { useRecoilState, RecoilState } from "recoil";
import { recoilFilters } from "../../../../constants/recoil-atoms";

function Discover(props) {
  const [resultData, setResultData] = useState([]);
  const [showResults, setShowResults] = useState(12);
  const [loadingState, setLoadingState] = useState(true);
  const [filters, setFilters] = useRecoilState(recoilFilters);

  // checkbox filters
  let cbMountains = document.getElementById("cbMountains");
  let cbBeach = document.getElementById("cbBeach");
  let cbIsland = document.getElementById("cbIsland");
  let cbMetro = document.getElementById("cbMetro");

  let resetBtn = document.getElementById("resetEnv");
  let rbBtn = document.querySelectorAll("input[type=radio]");

  let resultsLength = resultData.length;

  const updateResults = () => {
    setShowResults(showResults + 12);
    console.log(showResults);
  };

  useEffect(() => {
    setLoadingState(true);
    setResultData([]);

    if (resetBtn && loadingState === false) {
      resetBtn.addEventListener("click", (e) => {
        cbMountains.checked = false;
        cbBeach.checked = false;
        cbIsland.checked = false;
        cbMetro.checked = false;

        rbBtn.forEach((element) => {
          element.checked = false;
        });
        setFilters({
          ...filters,
          euMembership: undefined,
          metroCategory: undefined,
          mountainCategory: undefined,
          coastalCategory: undefined,
          urbanRuralRemoteCategory: undefined,
          isIsland: undefined,
        });
      });
    }

    loadData(filters).then((results) => {
      setResultData(results.data);
      setLoadingState(false);
    });
  }, [filters]);

  const sendData = resultData.slice(0, showResults);

  return (
    <div className={$.discover} id="discover">
      <SectionHeader section={"Discover"} subtitle={"Where to next?"} />

      <div className={$.searchBarContainer}>
        <SearchBar />
      </div>

      <div className={$.filter}>
        <Filters />
        {!sendData.length > 0 && loadingState && (
          <>
            <div className={$.loadMoreWrapper}>
              {/* TODO, CREATE A LOADING STATE  */}
              {/* TODO create empty state */}
              <div className={$.loadingState}>
                <div className={$.spinnerWrapper}>
                  <div className={$.ldsSpinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <p>Loading.. Hold on</p>
              </div>
            </div>
          </>
        )}

        {!sendData.length > 0 && !loadingState && (
          <>
            <div className={$.loadMoreWrapper}>
              {/* TODO, CREATE A LOADING STATE  */}
              {/* TODO create empty state */}
              <p className={$.emptyState}>No results :'(</p>
            </div>
          </>
        )}
        {sendData.length > 0 && (
          <>
            <Results data={sendData} resultsLength={resultsLength} />
          </>
        )}

        {resultsLength > showResults + 12 && ( // first 12 are a given, so its a + 12 calculation
          <>
            <div className={$.loadMoreWrapper}>
              <button onClick={updateResults} className={$.loadMoreBtn}>
                Load more
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Discover;
