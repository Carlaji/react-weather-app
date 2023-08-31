import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.carlabyte.com" target="_blank" rel="noreferrer">
            Carla Jimenez
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Carlaji/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
