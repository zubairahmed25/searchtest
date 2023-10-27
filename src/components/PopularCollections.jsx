import React, { Suspense, lazy } from "react";
import PanelCollectionSkelton from "./Skeltons/PanelCollectionSkelton";
const PanelCollectionCard =lazy(()=>import("./PanelCollectionCard"))

const PopularCollections = () => {
  return (
    <div>
      <div className="panel-section-bottom-title">Popular Collections</div>
      <div className="collections">
        {([...new Array(5)]).map((_,i)=>{
        return <Suspense key={i} fallback={<PanelCollectionSkelton/>}>
        <PanelCollectionCard />
        </Suspense>
        })}
      </div>
    </div>
  );
};

export default PopularCollections;
