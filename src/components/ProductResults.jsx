import React, { Suspense, lazy } from "react";
import Skeleton from "react-loading-skeleton";
const ProductCard = lazy(() => import("./ProductCard"));

const ProductResults = ({ data }) => {
  return (
    <div className="product-results">
      <div className="product-results-header">
        <span className="product-results-header-title">
          Product results (149)
        </span>
        <span className="product-results-header-link">
          <a href="/">View all results</a>
        </span>
      </div>
      
      <div className="Products-list">
        {(data || []).map((obj) => (
          <Suspense
            key={obj.id}
            fallback={
              <div>
                <Skeleton
                  width={"100%"}
                  style={{
                    paddingTop: `${100 * 1.44397}%`,
                    marginBottom: "1px",
                  }}
                />
                <Skeleton
                  width={"100px"}
                  height={"18.6px"}
                  style={{ marginBottom: "5px" }}
                />
                <Skeleton
                  width={"100%"}
                  height={"19.6px"}
                  style={{ marginBottom: "10px" }}
                />
                <Skeleton width={"50px"} height={"19.6px"} />
              </div>
            }
          >
            <ProductCard key={obj.id} productData={obj} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ProductResults;
