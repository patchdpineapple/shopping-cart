import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import productsList from "../data";
import Navlinks from "./Navlinks";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {
  /*****STATES*****/
  const [products, setProducts] = useState(productsList);
  const [cartItems, setCartItems] = useState([]);

  /*****METHODS*****/
  //this method adds a new item to the cart or overwrite a current item
  const handleAddToCart = (additem) => {
    
    let tempitems = cartItems;
    let index = tempitems.findIndex((item) => item.id === additem.id);
    if (index === -1) {
      setCartItems([...tempitems, additem ] );
    } else {
      console.log(typeof tempitems[index].quantity);
      tempitems[index].quantity = tempitems[index].quantity + additem.quantity;
      tempitems[index].total = tempitems[index].total + additem.total;
      setCartItems(tempitems);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navlinks />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/shop"
            component={() => (
              <Shop products={products} handleAddToCart={handleAddToCart} />
            )}
          />
          <Route
            path="/cart"
            component={() => (
              <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
