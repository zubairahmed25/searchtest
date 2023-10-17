import React from "react";

const ProductCard = ({productData}) => {
  return (
    <li className="product-item">
      <a
        href="/"
        className="product-item-link"
      >
        <div className="product-item-link-content">
          <div className="product-item-link-content-picture">
            <img
              src={productData?.product_image}
              alt="Asymmetric Neck Ruched Modal Cashmere Blend Top in Chestnut Brown"
            />
          </div>
          <div className="product-item-link-content-body">
            <div className="product-item-link-content-body-trap-line">{productData?.vendor}</div>
            <div className="product-item-link-content-body-title-wrapper">
              <div className="product-item-link-content-body-title-wrapper-title">
              {
                productData?.title
              }
              </div>
            </div>
            <div className="product-item-link-content-body-price">
              <div className="product-item-link-content-body-price-current">
                ${productData?.price}
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
