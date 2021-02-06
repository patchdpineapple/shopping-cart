import React, { useState, useEffect } from "react";
import "./CartItem.css";

function CartItem({
  item,
  handleModifyCart,
  handleUpdateTotal,
  handleRemoveItem,
}) {
  /*****STATES*****/
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.total);

  /*****METHODS*****/
  //this method updates the quantity and total price of item when you change the quantity input field
  const onModifyCart = (e) => {
    const { value } = e.target;
    let temptotal = 0;
    if (value === "0") {
      temptotal = item.price;
      handleModifyCart({ ...item, quantity: 1, total: temptotal });
      setQuantity(1);
      setTotal(item.price);
    } else {
      temptotal = Number((item.price * value).toFixed(2));
      handleModifyCart({ ...item, quantity: Number(value), total: temptotal });
      setQuantity(Number(value));
      setTotal(Number((item.price * value).toFixed(2)));
    }

   
  };

  //this method passes the item to be removed by handleRemoveItem() when remove button is clicked
  const onRemoveItem = () => {
    handleRemoveItem(item);
  };

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
        <strong>{`$${total}`}</strong>
      </div>
      <button className="btn btn_remove" onClick={onRemoveItem}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
