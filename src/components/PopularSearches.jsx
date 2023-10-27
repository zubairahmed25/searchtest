import React from "react";
import { Link } from "react-router-dom";

const PopularSearches = () => {
  const linksData = [
    "embellished",
    "black dress",
    "homecoming dress",
    "white dress",
    "pink dress",
    "dress",
    "red dress",
    "embellished dress",
    "mini dress",
    "pink",
  ];
  return (
    <div>
      <div className="source-header">Popular searches (10)</div>
      <div id="autocomplete"></div>
      <ul className="popular-list">
        {linksData.map((obj) => (
          <li className="popular-list-item">
            <Link className="popular-list-item-link" to={`/products/${obj}`}>
              <div>{obj}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularSearches;
