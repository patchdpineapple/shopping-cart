import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
  const [sampleItems, setSampleItems] = useState([
    {
      id: 1,
      name: "sample",
      description: "",
      price: 250.53,
      image: "#",
      quantity: 1,
      total: 250.53,
    },
    {
      id: 2,
      name: "sample2",
      description: "",
      price: 250.25,
      image: "#",
      quantity: 1,
      total: 250.25,
    },
    {
      id: 3,
      name: "sample3",
      description: "",
      price: 250.99,
      image: "#",
      quantity: 1,
      total: 250.99,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const handleUpdatePrice = (updatedItem) => {
    const tempitems = sampleItems.map((sampleItem) => {
      if (sampleItem.id === updatedItem.id) {
        return updatedItem;
      }
      return sampleItem;
    });
    setSampleItems(tempitems);
  };

  //update total everytime cartItems' state is changed
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let temptotal = 0;
    for (let i = 0; i < sampleItems.length; i++) {
      temptotal = temptotal + sampleItems[i].total;
    }
    setTotal(temptotal.toFixed(2));
  }, [sampleItems]);

  return (
    <div className="Cart">
      <div className="cart-page-header">
        <h3>Your Cart</h3>
      </div>
      <div className="cart-items-container">
        {sampleItems.map((item) => {
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
