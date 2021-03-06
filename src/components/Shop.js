import React from "react";
import "./Shop.css";
import ShopItem from "./ShopItem";

function Shop({ products, handleAddToCart }) {
  return (
    <>
      <div className="Shop">
        <div className="shop-page-header">
          <h3>All Products</h3>
        </div>
        <div className="products-container">
          {products.map((product) => {
            return <ShopItem key={product.id} product={product} handleAddToCart={handleAddToCart}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
