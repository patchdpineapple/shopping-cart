import React, { useState, useEffect } from "react";
import "./AddToCart.css";

function AddToCart({ item }) {
  const [addItem, setAddItem] = useState({});

const handleChange = (e) => {
    const {value} = e.target;
    const total =  Number((addItem.price * value).toFixed(2));
}

  useEffect(() => {
    setAddItem(item);
  }, [item]);

  return (
    <div className="AddToCart">
      <img src={addItem.image} className="cart-product-image" alt="product"></img>
      <strong>{addItem.name}</strong>
      <strong>{`$${addItem.price}`}</strong>
      <input
        name="quantity"
        type="number"
        min="1"
        defaultValue='1'
        onChange={handleChange}
      />
      <strong>{`$${addItem.total}`}</strong>
    </div>
  );
}

export default AddToCart;
