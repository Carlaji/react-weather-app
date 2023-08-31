import React from "react";
import "./Weather.css";
import sunImg from "./img/sun.png";

export default function Weather() {
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
          <span className="temperature">17</span>
          <span className="unit">ºC</span>
        </h1>
        <h6>56 % | 4 km/h | Sunny</h6>
        <h2>Barcelona</h2>
        <h6>AUG 2 | FRIDAY | 13:06 </h6>
        <img src={sunImg} alt="sun" />
      </div>
    </div>
  );
}
