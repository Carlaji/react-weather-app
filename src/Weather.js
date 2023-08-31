import React, { useState } from "react";
import "./Weather.css";

import axios from "axios";
import { RotatingSquare } from "react-loader-spinner";

import Weatherinfo from "./Weatherinfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=29a93389cbc7b063100ft3doa5403cdf&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSumbit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSumbit}>
            <div className="row justify-content-between">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn" />
              </div>
            </div>
          </form>
          <Weatherinfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
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
