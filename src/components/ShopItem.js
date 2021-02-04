import React, { useState }  from "react";
import "./ShopItem.css";
import AddToCart from "./AddToCart";


function ShopItem({ product }) {
  const [showAdd, setShowAdd] = useState(false);

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };
  return (
    <>
      <div
        className="ShopItem"
        onClick={(product) => {
          toggleShowAdd();
        }}
      >
        <img
          src={product.image}
          className="shop-product-image"
          alt="product"
        ></img>
        <strong>{product.name}</strong>
        <p>{`$${product.price}`}</p>
      </div>
      {showAdd ? (
        
        <AddToCart item={product} toggleShowAdd={toggleShowAdd}/>
      
    ) : null}
    </>
  );
}

export default ShopItem;
