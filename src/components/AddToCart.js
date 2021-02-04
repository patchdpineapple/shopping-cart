import React, { useState, useEffect } from "react";
import "./AddToCart.css";

function AddToCart({ item, toggleShowAdd }) {
  const [addItem, setAddItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

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
        <strong>{addItem.name}</strong>
        <strong>{`$${addItem.price}`}</strong>
        <div>
          <input
            name="quantity"
            type="number"
            min="1"
            defaultValue={quantity}
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
