import React, { useState, useEffect } from "react";
import $ from "../../molecules/results/results.module.scss";
import SvgSummer from "../svgSummer/svgSummer";
import SvgWinter from "../svgWinter/svgWinter";
import { getData } from "../../../utils/getData";
import { useRecoilState } from "recoil";
import { userLocation } from "../../../../constants/recoil-atoms";
import SvgBike from "../svgBike/svgBike";
import SvgCar from "../svgCar/svgCar";
import SvgTrain from "../svgTrain/svgTrain";
import SvgEco from "../svgEco/svgEco";

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
      summer: climate(props.tags[0].tag),
      winter: climate(props.tags[1].tag),
    },
  ];
  let slug = props.slug;
  let image = props.image;

  function climate(tag) {
    if (tag === "escapeTheHeat") {
      return "Escape The Heat";
    } else if (tag === "winterWonderland") {
      return "Winter Wonderland";
    } else if (tag === "scorchingHeat") {
      return "Scorching Heat";
    } else if (tag === "escapeTheCold") {
      return "Escape The Cold";
    } else if (tag === "mildSummer") {
      return "Mild Summer";
    } else if (tag === "frisky") {
      return "Frisky";
    } else {
      return tag;
    }
  }

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

      <div className={$.travelMethods}>
        {extraData.length > 0 && (
          <>
            {geoFilters.train && extraData[0].train !== null && (
              <>
                <span className={$.travelIcon}>
                  <div>
                    <span className={$.locationIconWrapper}>
                      <SvgTrain />
                    </span>
                    <p>{extraData[0].train.distanceText}</p>
                  </div>
                  <div>
                    <span className={$.locationIconWrapper} id={$.ecoIcon}>
                      <SvgEco />
                    </span>
                    <p>
                      {extraData[0].train.bugetPercentage === 0 && <>Zero</>}
                      {extraData[0].train.bugetPercentage > 0 &&
                        extraData[0].train.bugetPercentage <= 1 && <>Low</>}
                      {extraData[0].train.bugetPercentage > 1 &&
                        extraData[0].train.bugetPercentage < 5 && <>Medium</>}
                      {extraData[0].train.bugetPercentage >= 5 && <>High</>}
                    </p>
                  </div>
                </span>
              </>
            )}

            {geoFilters.car && extraData[0].car !== null && (
              <>
                <span className={$.travelIcon}>
                  <div>
                    <span className={$.locationIconWrapper}>
                      <SvgCar />
                    </span>
                    <p>{extraData[0].car.distanceText}</p>
                  </div>
                  <div>
                    <span className={$.locationIconWrapper} id={$.ecoIcon}>
                      <SvgEco />
                    </span>
                    <p>
                      {extraData[0].car.co2grbugetPercentageams == 0 && (
                        <>Zero</>
                      )}
                      {extraData[0].car.bugetPercentage > 0 &&
                        extraData[0].car.bugetPercentage <= 1 && <>Low</>}
                      {extraData[0].car.bugetPercentage > 1 &&
                        extraData[0].car.bugetPercentage < 5 && <>Medium</>}
                      {extraData[0].car.bugetPercentage >= 5 && <>High</>}
                    </p>
                  </div>
                </span>
              </>
            )}

            {geoFilters.bicycle && extraData[0].bike !== null && (
              <>
                <span className={$.travelIcon}>
                  <div>
                    <span className={$.locationIconWrapper}>
                      <SvgBike />
                    </span>
                    <p>{extraData[0].bike.distanceText}</p>
                  </div>
                  <div>
                    <span className={$.locationIconWrapper} id={$.ecoIcon}>
                      <SvgEco />
                    </span>
                    <p>
                      {/* {Math.round(extraData[0].train.co2grams)} */}
                      Zero
                      {/* this needs to be dynamic  */}
                    </p>
                  </div>
                </span>
              </>
            )}
          </>
        )}
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
