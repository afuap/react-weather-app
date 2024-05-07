import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Accra" />
        <footer>
          This project was coded by Georgina Pobi and is{" "}
          <a
            href="https://github.com/afuap/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            opened-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
