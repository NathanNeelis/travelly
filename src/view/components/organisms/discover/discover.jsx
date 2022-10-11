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

  let resultsLength = resultData.length;

  const updateResults = () => {
    setShowResults(showResults + 12);
    console.log(showResults);
  };

  useEffect(() => {
    setLoadingState(true);
    loadData(filters).then((results) => {
      setResultData(results.data);
      setLoadingState(false);
    });
  }, [filters]);

  const sendData = resultData.slice(0, showResults);

  // set up states for filters
  // how to query the filters?

  return (
    <div className={$.discover}>
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
              <p className={$.loadingState}>Loading.. Hold on :)</p>
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
