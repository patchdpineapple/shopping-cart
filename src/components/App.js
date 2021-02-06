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
  const [total, setTotal] = useState(0);

  /*****METHODS*****/
  //this method adds a new item to the cart or overwrite a current item
  const handleAddToCart = (additem) => {
    let tempitems = cartItems;
    const index = tempitems.findIndex((item) => item.id === additem.id);
    if (index === -1) {
      setCartItems([...tempitems, additem]);
    } else {
      tempitems[index].quantity = tempitems[index].quantity + additem.quantity;
      tempitems[index].total =
        tempitems[index].quantity * tempitems[index].price;
      setCartItems(tempitems);
    }
  };

  //this method updates the quantity and total price of cart items
  const handleModifyCart = (updatedItem) => {
    let tempitems = cartItems;
    const index = tempitems.findIndex((item) => item.id === updatedItem.id);
    tempitems[index].quantity = updatedItem.quantity;
    tempitems[index].total = updatedItem.total;
    setCartItems(tempitems);
  };

  //this methods updates the total of all items once the quantity is adjusted
  const handleUpdateTotal = () => {
    let temptotal = cartItems.reduce((total, item) => {
      return total + item.total;
    }, 0);
    setTotal(Number(temptotal.toFixed(2)));
  };

  //this method removes the item from cart if it has a matching id
  const handleRemoveItem = (removeitem) => {
    let tempitems = cartItems.filter((item) => item.id !== removeitem.id);
    setCartItems(tempitems);
  };

  return (
    <Router>
      <div className="App">
        <Navlinks />
        <Switch>
          <Route path="/shopping-cart" component={Home} />
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
              <Cart
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                handleModifyCart={handleModifyCart}
                total={total}
                handleUpdateTotal={handleUpdateTotal}
                handleRemoveItem={handleRemoveItem}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
