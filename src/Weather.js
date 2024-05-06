import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Accra</h1>
      <ul>
        <li>Monday 17:00</li>
        <li>Mostly Sunny</li>
      </ul>
      <di className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Sunny"
          />
          30°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 4%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 3 km/h</li>
          </ul>
        </div>
      </di>
    </div>
  );
}
