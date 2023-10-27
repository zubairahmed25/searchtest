import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const ProductCard = ({ productData }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = productData?.product_image;
    image.onload = () => {
      setImageLoaded(true);
      // Image has loaded, you can update state or perform any necessary actions.
    };
  }, []);
  return (
    <>
      {!imageLoaded && (
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
      )}
      <li
        className="product-item"
        style={{ display: imageLoaded ? "block" : "none" }}
      >
        <a href="/" className="product-item-link">
          <div className="product-item-link-content">
            <div className="product-item-link-content-picture">
              <img
                src={productData?.product_image}
                onLoad={() => setImageLoaded(true)}
                alt="Asymmetric Neck Ruched Modal Cashmere Blend Top in Chestnut Brown"
              />
            </div>
            <div className="product-item-link-content-body">
              <div className="product-item-link-content-body-trap-line">
                {productData?.vendor}
              </div>
              <div className="product-item-link-content-body-title-wrapper">
                <div className="product-item-link-content-body-title-wrapper-title">
                  {productData?.title}
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
    </>
  );
};

export default ProductCard;
