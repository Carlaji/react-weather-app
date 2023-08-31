import React from "react";
import FormattedDate from "./FormattedDate";
import sunImg from "./img/sun.png";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">ºC</span>
      </h1>
      <h6>
        <FormattedDate date={props.data.date} />
      </h6>

      <h2>{props.data.city}</h2>
      <h6>
        {props.data.humidity} % | {Math.round(props.data.wind)} km/h |{" "}
        <span className="text-capitalize">{props.data.description}</span>
      </h6>
      <img src={sunImg} alt={props.data.description} />
    </div>
  );
}
