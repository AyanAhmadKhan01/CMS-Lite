import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../../Components/ProductCard';
import CartItem from '../../Components/CartItem';

const products = [
  {
    id: 1,
    name: 'Music Headphone 1',
    price: 50,
    image: '/img/Store-img-1.png',
    description: 'High-quality music headphone.',
  },
  {
    id: 2,
    name: 'Music Headphone 2',
    price: 60,
    image: '/img/Store-img-2.png',
    description: 'Another great music headphone.',
  },
  {
    id: 3,
    name: 'Music Headphone 3',
    price: 70,
    image: '/img/Store-img-3.png',
    description: 'Premium music headphone.',
  },
];

function Music() {
 
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveOneFromCart = (productId) => {
    setCartItems((prevItems) => 
      prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };


  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartRef = useRef(null);


  function viewCart() {
    if (cartRef.current) {
      cartRef.current.style.right = '0px';
    }
  }


  function closeCart() {
    if (cartRef.current) {
      cartRef.current.style.right = '-300px';
    }
  }
  
  
  
  return (
    <>
      <h1 id="music-page-heading">Music</h1>
      <button onClick={viewCart}><i class="fa-solid fa-cart-shopping" id='cart-view'></i></button>
      <div className="music-headphone">
        {products.map((product) => (
          <ProductCard
            id={product.id} 
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => {
              handleAddToCart(product);
              viewCart();
            }}
          />
        ))}
      </div>

      <div className="cart" ref={cartRef}>
      <i class="far fa-window-close" id='shopping-cart-close' onClick={closeCart}></i>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p id='empty-cart'>Your cart is empty</p>
        ) : (
          <>
          <div className="cart-item">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onRemoveOne={() => handleRemoveOneFromCart(item.id)}
                onRemove={() => handleRemoveFromCart(item.id)}
              />
            ))}
            <button onClick={handleClearCart} className="clear-cart-button">
              Clear Cart
            </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Music;
