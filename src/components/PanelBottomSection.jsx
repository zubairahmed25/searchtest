import React, { Suspense, lazy } from "react";
// import UseFullPages from "./UseFullPages";
import PopularCollections from "./PopularCollections";
const ProductResults = lazy(() => import("./ProductResults"));

const PanelBottomSection = ({ query, data,loading }) => {
  return (
    <div className="panel-section-bottom">
      {query ? (
        <Suspense
          fallback={
            <div className="preloader">
              <span className="loader"></span>
            </div>
          }
        >
          <ProductResults data={data?.hits} loading={loading} />
        </Suspense>
      ) : 
      // (
      //   <PopularCollections />
      // )
      (<div></div>)
      }
      {/* <UseFullPages query={query} /> */}
    </div>
  );
};

export default PanelBottomSection;
