import axios from "axios";

export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export const loadData = (filters) => {
  const params = {
    ...filters,
  };
  const data = axios.get(`https://io-backend.azurewebsites.net/localities/`, {
    params,
  });
  // .then((result) => {
  //   console.log("axios results", result);
  //   // setLocalities(result.data);
  // });
  return data;
};
