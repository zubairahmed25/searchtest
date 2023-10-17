import React from "react";
import ProductCard from "./ProductCard";

const ProductResults = ({data}) => {
  return (
    <div className="product-results">
      <div className="product-results-header">
          <span className="product-results-header-title">Product results (149)</span>
          <span className="product-results-header-link">
            <a href="/">View all results</a>
          </span>
      </div>
      <div className="Products-list">
        {
          (data||[]).map(obj=><ProductCard key={obj.id} productData={obj}/>)
        }
      </div>
    </div>
  );
};

export default ProductResults;
