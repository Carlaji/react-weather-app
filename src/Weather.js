import React, { useState } from "react";
import "./Weather.css";
import sunImg from "./img/sun.png";
import axios from "axios";
import { RotatingSquare } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row justify-content-between">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn" />
              </div>
            </div>
          </form>
          <h1>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">ºC</span>
          </h1>
          <h6>
            {weatherData.humidity} % | {Math.round(weatherData.wind)} km/h |{" "}
            <span className="text-capitalize">{weatherData.description}</span>
          </h6>
          <h2>{weatherData.city}</h2>
          <h6>AUG 2 | FRIDAY | 13:06 </h6>
          <img src={sunImg} alt={weatherData.description} />
        </div>
      </div>
    );
  } else {
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=29a93389cbc7b063100ft3doa5403cdf&units=metric`;
    axios.get(url).then(handleResponse);
    return (
      <RotatingSquare
        height="500"
        width="500"
        color="#146C94"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
