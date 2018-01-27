import axios from 'axios';
const API_KEY = 'e89738e89e334cbc1970b439c9906005';
// The back ticks and ${API_KEY} are part of ES6, its the same as if
// the url var was placed in quotes and then appended with + API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// This is made a const which by convention as it will be used elsewhere
// and reduces risk of typos
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}