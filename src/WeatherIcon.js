import React from "react";
import sunImg from "./img/sun.png";
import moonImg from "./img/moon.svg";
import fewClouds from "./img/fewclouds.svg";
import fewCloudsNight from "./img/fewcloudsnight.svg";
import clouds from "./img/clouds.svg";
import brokenClouds from "./img/brokenclouds.svg";
import rain from "./img/rain.svg";
import storm from "./img/storm.svg";
import snow from "./img/snow.svg";
import wind from "./img/wind.svg";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": sunImg,
    "clear-sky-night": moonImg,
    "few-clouds-day": fewClouds,
    "few-clouds-night": fewCloudsNight,
    "scattered-clouds-day": clouds,
    "scattered-clouds-night": clouds,
    "broken-clouds-day": brokenClouds,
    "broken-clouds-night": brokenClouds,
    "shower-rain-day": rain,
    "shower-rain-night": rain,
    "rain-day": rain,
    "rain-night": rain,
    "thunderstorm-day": storm,
    "thunderstorm-night": storm,
    "snow-day": snow,
    "snow-night": snow,
    "mist-day": wind,
    "mist-night": wind,
  };
  return (
    <img src={codeMapping[props.code]} alt={props.alt} id="weather-icon" />
  );
}
