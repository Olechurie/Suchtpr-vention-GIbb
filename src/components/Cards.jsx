import React from "react";
import "./styles/Cards.css";
import contentArray from "./src/CardsContentArray";

function Cards() {
  return (
    <div className="grid">
      {contentArray.map((data, index) => (
        <div key={index} className="card">
          <div className="card-head">
            <h3>{data.title}</h3>
            {/* <img src="" alt="" /> */}
          </div>
          <div>{data.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
