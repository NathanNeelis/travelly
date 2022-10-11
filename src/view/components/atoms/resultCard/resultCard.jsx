import $ from "../../molecules/results/results.module.scss";
import SvgSummer from "../svgSummer/svgSummer";
import SvgWinter from "../svgWinter/svgWinter";

function ResultCard(props) {
  let country = props.country;
  let locality = props.locality;
  let tags = [
    {
      summer: "Scorching Heat",
      winter: "Winter Wonderland",
    },
  ];
  let slug = props.slug;
  let image = props.image;

  //   function testImage(url) {
  //     var tester = new Image();
  //     tester.addEventListener('load', imageFound);
  //     tester.addEventListener('error', imageNotFound);
  //     tester.src = url;
  // }

  return (
    <div className={$.resultcard}>
      <div className={$.resultcardHeader}>
        <h4>{country}</h4>
        <h2>{locality}</h2>

        <div className={$.weatherCategory}>
          <div>
            <span>
              <SvgSummer />
            </span>
            {tags[0].summer}
          </div>
          <div>
            <span>
              <SvgWinter />
            </span>
            {tags[0].winter}
          </div>
        </div>
      </div>

      {/* read more cta  */}
      <div className={$.resultcardCta}>
        <a href={slug} className={$.resultcardCtaBtn}>
          Read more
        </a>
      </div>

      <div className={$.resultcardGradient}></div>
      <div className={$.resultcardBG}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default ResultCard;
