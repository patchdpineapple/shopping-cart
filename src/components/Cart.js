import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart(props) {
  /*****STATES*****/
  const [cartItems, setCartItems] = useState(props.cartItems);
  const [total, setTotal] = useState(0);

/*****METHODS*****/
//this method replaces an item with a new item that has its price and quantity updated
  const handleUpdatePrice = (updatedItem) => {
    const tempitems = cartItems.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    setCartItems(tempitems);
  };

  /*****LIFECYCLE METHODS*****/
  //update total everytime cartItems' state is changed
  useEffect(() => {
    console.log(cartItems);
    let temptotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      temptotal = temptotal + cartItems[i].total;
    }
    setTotal(temptotal.toFixed(2));
  }, [cartItems]);

  return (
    <div className="Cart">
      <div className="cart-page-header">
        <h3>Your Cart</h3>
      </div>
      <div className="cart-items-container">
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              onUpdatePrice={handleUpdatePrice}
            />
          );
        })}
      </div>
      <div className="checkout-container">
        <h3>TOTAL: {`$${total}`}</h3>
        <button className="btn">CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
