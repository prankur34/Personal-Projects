import React from "react";
import "../Styles/Cards.css";
function Cards() {
  return (
    <div>
      <h1 className="langaugeteacher"> </h1>
      <div className="langteachers">
        <div className="cards__englishteacher"></div>
        <div className="cards__spanishteacher"></div>{" "}
        <div className="cards__indiateacher"></div>{" "}
        <div className="cards__chineseteacher"></div>
      </div>
      <h1 className="computerprogrammingteachers"> </h1>

      <div className="computerteachers">
        <div className="cards__microsoftteacher"></div>
        <div className="cards__webdevteacher"></div>{" "}
        <div className="cards__javateacher"></div>{" "}
        <div className="cards__pythonteacher"></div>
      </div>
    </div>
  );
}

export default Cards;
