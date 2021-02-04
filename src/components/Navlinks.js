import React from "react";
import "./Navlinks.css";
import { Link } from "react-router-dom";

function Navlinks() {
  return (
    <nav className="Navlinks">
      <div className="logo">
        <strong>TSS</strong>
        <p>The Simple Shop</p>
      </div>
      <ul className="links">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="link">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="link">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navlinks;
