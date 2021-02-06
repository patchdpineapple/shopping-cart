import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div>
        <h2>Welcome to</h2>
        <h1>The Simple Shop</h1>
      </div>
      <button className="btn"><Link to="/shop" className="btn-start">Start Shopping</Link></button>
    </div>
  );
}

export default Home;
