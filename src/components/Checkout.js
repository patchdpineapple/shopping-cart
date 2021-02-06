import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

function Checkout({ toggleCheckout }) {
  return (
    <div className="checkout-dimmer" onClick={toggleCheckout}>
      <div className="Checkout">
        <div>
          <h4>Thank You for buying from</h4>
          <h1>The Simple Shop</h1>
        </div>

        <p>
          <Link to="/shop" className="link">
            Back to Shop
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Checkout;
