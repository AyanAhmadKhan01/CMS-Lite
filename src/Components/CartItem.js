import React from 'react';

const CartItem = ({ name, quantity, price, onRemoveOne, onRemove}) => (
  <div className="cart-item">
    <h3>{name}</h3>
    <p>Quantity: {quantity}</p>
    <p>Price: ${price * quantity}</p>
    <button onClick={onRemoveOne} className="remove-one-button">
      Remove 1
    </button>
    <button onClick={onRemove} className="remove-button">
      <i className="fa-solid fa-trash"></i> Remove All
    </button>
  </div>
);

export default CartItem;
