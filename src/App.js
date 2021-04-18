import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by J.B. and is{" "}
          <a
            href="https://github.com/JulyB-creations/weatherproject"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and{" "}
          <a href="https://unruffled-booth-fda32d.netlify.app">
            hostet on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
