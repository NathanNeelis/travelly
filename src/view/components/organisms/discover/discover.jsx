import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "./discover.module.scss";
import SectionHeader from "../../molecules/sectionHeader/sectionHeader";
import SearchBar from "../../atoms/searchBar/searchBar";
import Filters from "../../molecules/filters/filters";
import Results from "../../molecules/results/results";
import { getData } from "../../../utils/getData";

function Discover(props) {
  const [resultData, setResultData] = useState([]);
  const [showResults, setShowResults] = useState(12);

  const url = "https://io-backend.azurewebsites.net/localities/";

  let resultsLength = resultData.length;

  const updateResults = () => {
    setShowResults(showResults + 12);
    console.log(showResults);
  };

  useEffect(() => {
    getData(url).then((data) => {
      setResultData(data);
    });
  }, []);

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
        {!sendData.length > 0 && (
          <>
            <div className={$.loadMoreWrapper}>
              <p>spinner</p>
            </div>
          </>
        )}
        {sendData.length > 0 && (
          <>
            <Results data={sendData} resultsLength={resultsLength} />
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
