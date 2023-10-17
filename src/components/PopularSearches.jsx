import React from "react";

const PopularSearches = () => {

  return (
    <div>
      <div className="source-header">Popular searches (10)</div>
      <div id="autocomplete"></div>
      <ul className="popular-list">
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=embellished">
            <div>embellished</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=black dress">
            <div>black dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a
            className="popular-list-item-link"
            href="/search?q=homecoming dress"
          >
            <div>homecoming dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=white dress">
            <div>white dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=pink dress">
            <div>pink dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=dress">
            <div>dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=red dress">
            <div>red dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a
            className="popular-list-item-link"
            href="/search?q=embellished dress"
          >
            <div>embellished dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=mini dress">
            <div>mini dress</div>
          </a>
        </li>
        <li className="popular-list-item">
          <a className="popular-list-item-link" href="/search?q=pink">
            <div>pink</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PopularSearches;
