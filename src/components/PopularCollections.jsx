import React from "react";
import PanelCollectionCard from "./PanelCollectionCard";

const PopularCollections = () => {
  return (
    <div>
      <div className="panel-section-bottom-title">Popular collections (6)</div>
      <div className="collections">
        <PanelCollectionCard />
        <PanelCollectionCard />
        <PanelCollectionCard />
        <PanelCollectionCard />
        <PanelCollectionCard />
      </div>
    </div>
  );
};

export default PopularCollections;
