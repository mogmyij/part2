import axios from "axios";
import { useEffect, useState } from "react";

const DisplayWeather = ({ latLong, countryName }) => {
  const [weather, setWeather] = useState(null);
  let apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0]}&lon=${latLong[1]}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);
  return (
    <>
      {weather != null && (
        <div>
          <h1>Weather in {countryName}</h1>
          <p>Temperature {weather.main.temp}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <p>Wind Speed {weather.wind.speed}</p>
        </div>
      )}
    </>
  );
};

export default DisplayWeather;
