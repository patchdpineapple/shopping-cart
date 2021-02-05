import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({cartItems, handleModifyCart}) {
  /*****STATES*****/
  const [total, setTotal] = useState(0);

  /*****METHODS*****/
  //this method replaces an item with a new item that has its price and quantity updated
  // const handleUpdatePrice = (updatedItem) => {
  //   const tempitems = cartItems.map((item) => {
  //     if (item.id === updatedItem.id) {
  //       return updatedItem;
  //     }
  //     return item;
  //   });
  //   setCartItems(tempitems);
  // };

  /*****LIFECYCLE METHODS*****/
  //update total everytime cartItems' props is changed
  useEffect(() => {
    let temptotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      temptotal = temptotal + cartItems[i].total;
    }
    setTotal(Number(temptotal.toFixed(2))); 
  },[cartItems]);

  return (
    <div className="Cart">{console.log('cart', cartItems)}
      <div className="cart-page-header">
        <h3>Your Cart</h3>
      </div>
      {cartItems.length === 0 ? (
        <div className="empty">
          <h1>Cart is Empty</h1>
          <p>Go to shop and add some items to cart</p>
        </div>
      ) : null}
      <div className="cart-items-container">
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              handleModifyCart={handleModifyCart}
            />
          );
        })}
      </div>
      {cartItems.length > 0 ? (
        <div className="checkout-container">
        <h3>TOTAL: {`$${total}`}</h3>
        <button className="btn">CHECKOUT</button>
      </div>
      ): null}
      
    </div>
  );
}

export default Cart;
