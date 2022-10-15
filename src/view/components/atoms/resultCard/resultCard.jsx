import React, { useState, useEffect } from "react";
import $ from "../../molecules/results/results.module.scss";
import SvgSummer from "../svgSummer/svgSummer";
import SvgWinter from "../svgWinter/svgWinter";
import { getData } from "../../../utils/getData";
import { useRecoilState } from "recoil";
import { userLocation } from "../../../../constants/recoil-atoms";

function ResultCard(props) {
  const [extraData, setExtraData] = useState([]);
  const [geoFilters, setGeoFilters] = useRecoilState(userLocation);

  let latitude = geoFilters.latitude;
  let longitude = geoFilters.longitude;
  let destinationId = props.id;
  let url = `https://io-backend.azurewebsites.net/localities/travel?originCountry=132&originLatLong=${latitude}%2C${longitude}&destinations=${destinationId}`;

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

  useEffect(() => {
    if (latitude && longitude) {
      getData(url).then((results) => {
        setExtraData(results);
      });
    }
  }, [geoFilters]);

  return (
    <div className={$.resultcard}>
      <div className={$.resultcardHeader}>
        <h4>{country}</h4>
        <h2>{locality}</h2>

        {extraData.length > 0 && (
          <>
            <p>Distance with car: {extraData[0].car.distanceText}</p>
            <p>
              Emission with car: {Math.round(extraData[0].car.co2grams)} grams
            </p>
          </>
        )}

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
