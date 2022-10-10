import $ from "./results.module.scss";

function Results(props) {
  return (
    <div className={$.results}>
      <div className={$.resultsHeader}>
        <div className={$.title}>
          <h6>results</h6>
        </div>
        <div className={$.sortResults}>
          <span>sort</span>
        </div>
      </div>

      <div className={$.resultcard}>
        {/* todo: create atom  */}
        resultcards
      </div>
    </div>
  );
}

export default Results;
