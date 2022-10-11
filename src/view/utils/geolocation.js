// Options
let geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// Error
function geoError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  console.log(err);
  if (err) {
    // const locationInput = document.getElementById("location");
    // locationInput.placeholder = 'Your location can not be found, please type in manually'
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');
  }
}

// get geo location only when its triggered in click event
export function clickForLocation() {
  console.time("Get location");
  console.time("Get coordinates");
  navigator.geolocation.getCurrentPosition(
    getMyLocation,
    geoError,
    geolocationOptions
  );

  // removes placeholder on loading
  //   const locationInput = document.getElementById("location");
  //   locationInput.placeholder = "";

  // adds loading spinner on loading
  //   const locationSpinner = document.querySelector(".locationWrap");
  //   locationSpinner.classList.add("loading");
}

// get GEO location by reverse geocoding
function getMyLocation(position) {
  const coords = position.coords;
  const long = coords.longitude;
  const lat = coords.latitude;

  console.timeEnd("Get coordinates");

  const locationInput = document.getElementById("startingPoint");

  // somehwere in kazakstan with no city
  // const testURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=49.3811&longitude=48.7839&localityLanguage=en'

  const fetchUrl =
    "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
    lat +
    "&longitude=" +
    long +
    "&localityLanguage=en";

  getData(fetchUrl).then((data) => {
    // console.log(data)
    testData(data, locationInput);
    console.log("location output", data);
    console.timeEnd("Get location");
  });
}

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Event listener for Geolocation
if (navigator.geolocation) {
  // checks if geolocation is available in the browser
  const getLocation = document.getElementById("locationIcon");
  if (getLocation) {
    // checks if element is on current page
    // const locationIcon = document.getElementById('location_icon');
    // locationIcon.classList.add('active');
    getLocation.addEventListener("click", clickForLocation);
  }
}

function testData(data, inputField) {
  if (data.city) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add city to input value of location
    inputField.value = data.city;
  } else if (data.locality) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add locality to input value of location
    inputField.value = data.locality;
  } else if (data.principalSubdivision) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add principal subdivision to input value of location
    inputField.value = data.principalSubdivision;
  } else if (data.countryName) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add countryname to input value of location
    inputField.value = data.countryName;
  } else {
    // should be error instead of placeholder ofcours.. just testing
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    inputField.placeholder =
      "Your location can not be found, please type in manually";
  }
}
