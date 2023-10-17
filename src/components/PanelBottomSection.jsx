import React from "react";
import UseFullPages from "./UseFullPages";
import PopularCollections from "./PopularCollections";
import ProductResults from "./ProductResults";

const PanelBottomSection = ({ query,data }) => {
  return (
    <div className="panel-section-bottom">
      {query ? <ProductResults data={data?.hits} /> : <PopularCollections />}
      <UseFullPages query={query} />
    </div>
  );
};

export default PanelBottomSection;
