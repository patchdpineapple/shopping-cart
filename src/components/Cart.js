import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cartItems, handleModifyCart, total, handleUpdateTotal }) {
  /*****STATES*****/
  const [cartTotal, setCartTotal] = useState(total);

  return (
    <div className="Cart">
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
              handleUpdateTotal={handleUpdateTotal}
              cartItems={cartItems}
              total={total}
            />
          );
        })}
      </div>
      {cartItems.length > 0 ? (
        <div className="checkout-container">
          <h3>TOTAL: {`$${cartTotal}`}</h3>
          <button className="btn">CHECKOUT</button>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
