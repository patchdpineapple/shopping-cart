import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import productsList from '../data';
import Navlinks from "./Navlinks";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState(productsList);

  return (
    <Router>
      <div className="App">
        <Navlinks />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={()=> <Shop products={products} />} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
