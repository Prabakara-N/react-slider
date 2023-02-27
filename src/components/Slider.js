import React, { useState } from "react";
import player from "../data";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const { name, club, img, quotes } = player[index];

  // functions
  function goNext() {
    if (index >= player.length - 1) {
      const newIndex = 0;
      setIndex(newIndex);
    } else {
      const newIndex = index + 1;
      setIndex(newIndex);
    }
  }

  function goBack() {
    if (index <= 0) {
      const newIndex = player.length - 1;
      setIndex(newIndex);
    } else {
      const newIndex = index - 1;
      setIndex(newIndex);
    }
  }

  function getRandom() {
    const newIndex = Math.trunc(Math.random() * player.length);

    setIndex(newIndex);
  }

  return (
    <div className="main-card">
      <div className="img-container">
        <img src={img} alt={name} />
        <div className="symbol">
          <FaQuoteRight className="symbol-arr" />
        </div>
      </div>
      <h4>{name}</h4>
      <div className="club">
        <p>{club}</p>
      </div>
      <p className="quotes">{quotes}</p>
      <div className="btn-container">
        <button type="button" onClick={goBack}>
          <FaAngleLeft className="arrow" />
        </button>
        <button type="button" onClick={goNext}>
          <FaAngleRight className="arrow" />
        </button>
      </div>
      <div className="random-btn">
        <button type="button" onClick={getRandom}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Slider;
