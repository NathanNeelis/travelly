import $ from "./discover.module.scss";
import SectionHeader from "../../molecules/sectionHeader/sectionHeader";
import SearchBar from "../../atoms/searchBar/searchBar";
import Filters from "../../molecules/filters/filters";
import Results from "../../molecules/results/results";

function Discover(props) {
  let fakeData = [
    {
      locality: "a very long locality title",
      country: "United Kingdom",
      tags: [
        {
          winter: "Winter Wonderland",
          summer: "Mild summer",
        },
      ],
      slug: "123AdBDC",
      image:
        "https://media-cdn.tripadvisor.com/media/vr-splice-j/05/63/b5/09.jpg",
    },
    {
      locality: "a very long locality title",
      country: "Italy",
      tags: [
        {
          winter: "Frisky",
          summer: "Scorching heat",
        },
      ],
      slug: "123AdBaSDDC",
      image:
        "https://www.francecomfort.com/l/nl/library/download/urn:uuid:a3713af6-e347-4f43-b78a-7ad53eb75766/via+ferrata+4+frankrijk+haute+savoie+vakantie+luxe+appartement+portes+du+soleil+bergen+klimmen+wandelen.jpg?scaleType=3&width=1600&height=1000",
    },
    {
      locality: "a very long locality title",
      country: "Italy",
      tags: [
        {
          winter: "Frisky",
          summer: "Scorching heat",
        },
      ],
      slug: "123AdBaSDDC",
      image:
        "https://www.francecomfort.com/l/nl/library/download/urn:uuid:a3713af6-e347-4f43-b78a-7ad53eb75766/via+ferrata+4+frankrijk+haute+savoie+vakantie+luxe+appartement+portes+du+soleil+bergen+klimmen+wandelen.jpg?scaleType=3&width=1600&height=1000",
    },
    {
      locality: "a very long locality title",
      country: "Italy",
      tags: [
        {
          winter: "Frisky",
          summer: "Scorching heat",
        },
      ],
      slug: "123AdBaSDDC",
      image:
        "https://www.francecomfort.com/l/nl/library/download/urn:uuid:a3713af6-e347-4f43-b78a-7ad53eb75766/via+ferrata+4+frankrijk+haute+savoie+vakantie+luxe+appartement+portes+du+soleil+bergen+klimmen+wandelen.jpg?scaleType=3&width=1600&height=1000",
    },
  ];

  return (
    <div className={$.discover}>
      <SectionHeader section={"Discover"} subtitle={"Where to next?"} />

      <div className={$.searchBarContainer}>
        <SearchBar />
      </div>

      <div className={$.filter}>
        <Filters />
        <Results data={fakeData} />

        {/* todo: add props as results  */}
      </div>
    </div>
  );
}

export default Discover;

{
  /* Discover 
      1. Header 
      1.1 title
      1.2 subtitle
      1.3 search bar -> local storage for header searchbar?

      2. Filter options -> to be conluded 
      2.1 Filter travel companions
      2.2 Filter distances
      2.3 filter Weahter 

      3.1 Search results
      3.1 header
      3.2 sorting option
      3.3 result cards
      
      
      */
}
