import React from "react";

const SearchSuggestions = () => {
  return (
    <div>
      <div className="source-header">Search suggestions (10)</div>
      <ul className="suggestions-list">
        <li className="suggestions-list-item">
          <a className="suggestions-list-item-link" href="/search?q=embellished">
            <div>embellished</div>
          </a>
        </li>
        <li className="suggestions-list-item">
          <a className="suggestions-list-item-link" href="/search?q=mini dress">
            <div>mini dress</div>
          </a>
        </li>
        <li className="suggestions-list-item">
          <a className="suggestions-list-item-link" href="/search?q=pink">
            <div>pink</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SearchSuggestions;
