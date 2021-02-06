import React, { useState, useEffect } from "react";
import "./CartItem.css";

function CartItem({ item, handleModifyCart, handleUpdateTotal, handleRemoveItem }) {
  /*****STATES*****/
  const [quantity, setQuantity] = useState(item.quantity);
  const [owntotal, setOwnTotal] = useState(item.total);

  /*****METHODS*****/
  //this method updates the quantity and total price of item when you change the quantity input field
  const onModifyCart = (e) => {
    const { value } = e.target;
    const temptotal = Number((item.price * value).toFixed(2));
    handleModifyCart({ ...item, quantity: Number(value), total: temptotal });
    setQuantity(Number(value));
    setOwnTotal(Number((item.price * value).toFixed(2)));
  };

  //this method passes the item to be removed by handleRemoveItem() when remove button is clicked
  const onRemoveItem = () => {
    handleRemoveItem(item);
  }

  /*****LIFECYCLE METHODS*****/
  //update total whenever you change the quantity of cart item
  useEffect(() => {
    handleUpdateTotal();
  });

  return (
    <div className="CartItem">
      <img src={item.image} className="cart-product-image" alt="product"></img>
      <strong>{item.name}</strong>
      <strong>{`$${item.price}`}</strong>
      <div>
        <input
          name="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onModifyCart(e)}
        />
        <strong>{`$${owntotal}`}</strong>
      </div>
      <button className="btn btn_remove" onClick={onRemoveItem}>Remove</button>
    </div>
  );
}

export default CartItem;
