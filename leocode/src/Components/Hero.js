import React from "react";
import "../Styles/Hero.css";
function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero__top">
          <h1 className="hero__heading">
            Find the right
            <br />
            <span> language or computer </span>
            <br />
            <span>teacher</span>
          </h1>
          <div className="hero__searchbar">
            <input
              type="text"
              className="hero__searchbox"
              placeholder="Search by language or IT speciality"
            />
            <button className="hero__search-button">
              <span class="material-icons hero__searchbar-icon">search</span>
            </button>
          </div>
        </div>
        <div className="hero__image"></div>
      </section>
    </div>
  );
}

export default Hero;
