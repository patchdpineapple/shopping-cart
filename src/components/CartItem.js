import React, { useState, useEffect } from "react";
import "./CartItem.css";

function CartItem({ item, onUpdatePrice }) {
  /*****STATES*****/
  const [newItem, setNewItem] = useState(item);

  /*****METHODS*****/
  //this method calculates the new total price of an item based on quantity
  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    const total = Number((newItem.price * value).toFixed(2));
    setNewItem({ ...newItem, quantity: Number(value), total: total });
    onUpdatePrice(newItem);
  };

  return (
    <div className="CartItem">
      <img
        src={newItem.image}
        className="cart-product-image"
        alt="product"
      ></img>
      <strong>{newItem.name}</strong>
      <strong>{`$${newItem.price}`}</strong>
      <div>
        <input
          name="quantity"
          type="number"
          min="1"
          value={newItem.quantity}
          onChange={handleChangeQuantity}
        />
        <strong>{`$${newItem.total}`}</strong>
      </div>
    </div>
  );
}

export default CartItem;
