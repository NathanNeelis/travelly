import $ from "./results.module.scss";
import ResultCard from "../../atoms/resultCard/resultCard";

function Results(props) {
  let data = props.data;
  let amountOfResults = props.resultsLength;

  return (
    <div className={$.results}>
      <div className={$.resultsHeader}>
        <div className={$.title}>
          <h5>The hidden gems</h5>
          <p>{amountOfResults} results</p>
        </div>
      </div>

      <section className={$.resultWrapper}>
        {data.map((data) => {
          return (
            <ResultCard
              country={data.countryEnglishName}
              locality={data.name}
              //   tags={data.tags}
              image={data.pictureUrl}
              slug={data.id}
              key={data.id}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Results;
