import React, { useState, useEffect } from "react";
import "./AddToCart.css";

function AddToCart({ item, toggleShowAdd, handleAddToCart }) {
  /*****STATES*****/
  const [addItem, setAddItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(item.price);

  /*****METHODS*****/
  //this method sets the total price of the item when quantity is changed
  const handleChange = (e) => {
    const { value } = e.target;
    setQuantity(Number(value));
    setTotal(Number((addItem.price * value).toFixed(2)));
    
    
  };

  //this method puts a quantity and total price property to the item and adds it to cart
  const onAddToCart = () => {
    toggleShowAdd();
    const tempitem = { ...addItem, quantity: quantity, total: total };
    console.log(tempitem);
    setAddItem(tempitem);
    handleAddToCart(tempitem);
  };

  /*****LIFECYCLE METHODS*****/
  useEffect(() => {
    setAddItem(item);
  }, [item]);

  return (
    <div className="add-cart-dimmer" onClick={toggleShowAdd}>
      <div className="AddToCart" onClick={(e) => e.stopPropagation()}>
        <img
          src={addItem.image}
          className="cart-product-image"
          alt="product"
        ></img>
        <strong>{addItem.name}</strong>
        <strong>{`$${addItem.price}`}</strong>
        <div>
          <input
            name="quantity"
            type="number"
            min="1"
            defaultValue={quantity}
            onChange={handleChange}
          />
          <strong>{`$${total}`}</strong>
        </div>
        <button className="btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}



export default AddToCart;
