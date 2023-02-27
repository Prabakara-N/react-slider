import React from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="main">
      <div className="title">
        <h1>UCL Top Scorers </h1>
        <div className="icon-img">
          <img
            src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1677165208/champions-league-logo-png-transparent_fi2cbd.png"
            alt="logo"
          />
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default App;
