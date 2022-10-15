export function testData(data, inputField) {
  const latitudeField = document.getElementById("latitudeInput");
  const longitudeField = document.getElementById("longitudeInput");

  if (data.city) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add city to input value of location
    inputField.value = data.city;
    latitudeField.value = data.latitude;
    longitudeField.value = data.longitude;
  } else if (data.locality) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add locality to input value of location
    inputField.value = data.locality;
    latitudeField.value = data.latitude;
    longitudeField.value = data.longitude;
  } else if (data.principalSubdivision) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add principal subdivision to input value of location
    inputField.value = data.principalSubdivision;
    latitudeField.value = data.latitude;
    longitudeField.value = data.longitude;
  } else if (data.countryName) {
    // If location is found remove loading spinner
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    // add countryname to input value of location
    inputField.value = data.countryName;
    latitudeField.value = data.latitude;
    longitudeField.value = data.longitude;
  } else {
    // should be error instead of placeholder ofcours.. just testing
    // const locationSpinner = document.querySelector('.locationWrap');
    // locationSpinner.classList.remove('loading');

    inputField.placeholder = "Your location can not be found, please try again";
    latitudeField.value = data.latitude;
    longitudeField.value = data.longitude;
  }
}
