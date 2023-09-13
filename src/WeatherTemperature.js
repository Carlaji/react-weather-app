import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <h1>
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
            ºC |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              ºF
            </a>
          </span>
        </h1>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <h1>
          <span className="temperature">{Math.round(fahrenheit())}</span>
          <span className="unit">
            <a href="/" onClick={convertToCelsius}>
              ºC{" "}
            </a>
            | ºF
          </span>
        </h1>
      </span>
    );
  }
}
