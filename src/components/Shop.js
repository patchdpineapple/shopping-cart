import React, { useState } from "react";
import "./Shop.css";
import ShopItem from "./ShopItem";
import AddToCart from "./AddToCart";

function Shop({ products }) {
  const [showAdd, setShowAdd] = useState(false);
  const [addItem, setAddItem] = useState({});

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  const specifyAddItem = (item) => {
    setAddItem(item);
  };

  return (
    <>
      <div className="Shop">
        <div className="shop-page-header">
          <h3>All Products</h3>
        </div>
        <div className="products-container">
          {products.map((product) => {
            return (
              <ShopItem
                key={product.id}
                product={product}
                toggleShowAdd={toggleShowAdd}
                specifyAddItem={specifyAddItem}
              />
            );
          })}
        </div>
      </div>
      {showAdd ? (
        
          <AddToCart item={addItem} toggleShowAdd={toggleShowAdd}/>
        
      ) : null}
    </>
  );
}

export default Shop;
