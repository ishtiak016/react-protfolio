import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>we ensure better education for better world</h1>
        <p>
          We ensure better education for a better world by offering quality
          learning for all. By fostering critical thinking, creativity, and
          inclusivity
        </p>
        <button className="btn">Explore More<img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
};

export default Hero;
