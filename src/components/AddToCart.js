import React, { useState, useEffect } from "react";
import "./AddToCart.css";

function AddToCart({ item, toggleShowAdd }) {
  const [addItem, setAddItem] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    const total = Number((addItem.price * value).toFixed(2));
  };

  useEffect(() => {
    setAddItem(item);
  }, [item]);

  return (
    <div className="add-cart-dimmer" onClick={toggleShowAdd}>
      <div className="AddToCart" onClick={(e) => e.stopPropagation()}>
        <img
          src={addItem.image}
          className="cart-product-image"
          alt="product"
        ></img>
        <strong>sample</strong>
        <strong>{`$${addItem.price}`}</strong>
        <div>
          <input
            name="quantity"
            type="number"
            min="1"
            defaultValue="1"
            onChange={handleChange}
          />
          <strong>{`$${addItem.total}`}</strong>
        </div>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default AddToCart;
