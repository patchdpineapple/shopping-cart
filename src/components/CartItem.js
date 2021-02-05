import React, { useState, useEffect } from "react";
import "./CartItem.css";

function CartItem({ item, handleModifyCart }) {
  /*****STATES*****/
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.total);

  /*****METHODS*****/
  //this method calculates the new total price of an item based on quantity
  // const handleChangeQuantity = (e) => {
  //   const { value } = e.target;
  //   const total = Number((newItem.price * value).toFixed(2));
  //   setNewItem({ ...newItem, quantity: Number(value), total: total });
  //   onUpdatePrice(newItem);
  // };

  const onModifyCart = (e) => {
    const { value } = e.target;
    const temptotal = Number((item.price * value).toFixed(2));
    console.log('value', Number(value), 'total', temptotal);
    handleModifyCart({ ...item, quantity: Number(value), total: temptotal })
    setQuantity(Number(value));
    setTotal(Number((item.price * value).toFixed(2)));
    
  };

  /*****LIFECYCLE METHODS*****/

  // useEffect(()=> {
  //   setQuantity(item.quantity);
  //   setTotal(item.total);
  // },[]);

  // useEffect(() => {
  //   const tempitem = { ...item, quantity: quantity, total: total };
  //   handleModifyCart(tempitem);
  // }, []);

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
          value={item.quantity}
          onChange={(e) => onModifyCart(e)}
        />
        <strong>{`$${item.total}`}</strong>
      </div>
      <button className="btn btn_remove">Remove</button>
    </div>
  );
}

export default CartItem;
