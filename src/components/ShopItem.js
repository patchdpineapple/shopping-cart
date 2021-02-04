import React from "react";
import "./ShopItem.css";

function ShopItem({ product, toggleShowAdd, specifyAddItem }) {
  return (
    <>
      <div
        className="ShopItem"
        onClick={(product) => {
          toggleShowAdd();
          specifyAddItem(product);
        }}
      >
        <img
          src={product.image}
          className="shop-product-image"
          alt="product"
        ></img>
        <p>{product.name}</p>
        <p>{`$${product.price}`}</p>
      </div>
    </>
  );
}

export default ShopItem;
