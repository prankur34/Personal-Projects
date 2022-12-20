import React from "react";
import "../Styles/Details.css";
function Details() {
  return (
    <div>
      <div className="details">
        <h1 className="details__heading">How Duolingo Works</h1>
        <div className="details__others"></div>
        <div className="details__secondheading"></div>
        <div className="details__thirdheading"></div>
        <div className="details__paragraph"></div>
      </div>

      <div className="seconddetails">
        <div className="seconddetails__secondheading">I am Teacher</div>
        <div className="seconddetails__thirdheading"></div>
        <div className="seconddetails__paragraph"></div>
        <div className="seconddetails__others"></div>
      </div>

      <div className="thirddetails">
        <h1 className="thirdetails__title"></h1>
        <div className="thirddetails__bigcard"></div>
        <div className="thirddetails__card"></div>
      </div>
    </div>
  );
}

export default Details;
