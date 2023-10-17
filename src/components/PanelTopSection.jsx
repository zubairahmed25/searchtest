import React from "react";
import PopularSearches from "./PopularSearches";
import SearchSuggestions from "./SearchSuggestions";

const PanelTopSection = ({ query, setQuery }) => {
  return (
    <div className="panel-section-top">
      {query ? <SearchSuggestions /> : <PopularSearches />}
    </div>
  );
};

export default PanelTopSection;
