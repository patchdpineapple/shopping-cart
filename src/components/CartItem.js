import React, { useState, useEffect } from "react";
import "./CartItem.css";

function CartItem({ item, onUpdatePrice }) {
  const [newItem, setNewItem] = useState({});

  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    const total =  Number((newItem.price * value).toFixed(2));
    setNewItem({ ...newItem, quantity: Number(value), total: total});
    onUpdatePrice(newItem);
  };

  useEffect(() => {
    setNewItem(item);
  }, [item]);

 



  return (
    <div className="CartItem">
      <img src={newItem.image} className="cart-product-image" alt="product"></img>
      <strong>{newItem.name}</strong>
      <strong>{`$${newItem.price}`}</strong>
      <input
        name="quantity"
        type="number"
        min="1"
        value={newItem.quantity}
        onChange={handleChangeQuantity}
      />
      <strong>{`$${newItem.total}`}</strong>
    </div>
  );
}

export default CartItem;
