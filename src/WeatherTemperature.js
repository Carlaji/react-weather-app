import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <h1>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">ºC</span>
      </h1>
    </span>
  );
}
