import React from "react";
import "../styles/Cards.css";
import contentArray from "./config/CardsContentArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "./iconMap";

function Cards() {
  return (
    <div className="grid">
      {contentArray.map((data, index) => {
        const iconKey = data.iconSvg.replace("fa-", "");

        const icon = iconMap[iconKey];

        return (
          <div key={index} className="card">
            <div className="card-head">
              {icon && (
                <FontAwesomeIcon
                  icon={icon}
                  size="2x"
                  className="card-head-icon"
                  style={{ color: index % 2 === 0 ? "#00b8d9ff" : "#5cb85cff" }}
                />
              )}

              <h3 className="card-head-title">{data.title}</h3>
            </div>
            <div>{data.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
