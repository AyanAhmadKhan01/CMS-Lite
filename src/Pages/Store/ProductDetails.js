import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Music Headphone 1',
    price: 50,
    image: '/img/Store-img-1.png',
    description: 'High-quality music headphone.',
    features: [
      'The #1 Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc.',
      'Immersive, 7.1 Surround Sound for Positional Audio',
      'Triforce Titanium 50mm High-End Sound Drivers',
      'Lightweight Design with Memory Foam Ear Cushions',
      'Noise Isolating Microphone'
    ]
  },
  {
    id: 2,
    name: 'Music Headphone 2',
    price: 60,
    image: '/img/Store-img-2.png',
    description: 'Another great music headphone.',
    features: [
      'Powerful sound with deep bass',
      'Comfortable fit with adjustable headband',
      'Noise cancellation technology'
    ]
  },
  {
    id: 3,
    name: 'Music Headphone 3',
    price: 70,
    image: '/img/Store-img-3.png',
    description: 'Premium music headphone.',
    features: [
      'Premium sound quality with high-resolution drivers',
      'Durable and lightweight construction',
      'Bluetooth connectivity for wireless freedom'
    ]
  },
];


const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));


  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
  <img src={product.image} alt={product.name} />
  <div className="product-text">
    <h1>{product.name}</h1>
    <p id="product-description">{product.description}</p>
    <hr />
    <p id="product-price"><span>$</span>{product.price}</p>

    <h3>Product Features:</h3>
    <ul className="product-features" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {product.features && product.features.length > 0 ? (
        product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))
      ) : (
        <p>No features available for this product.</p>
      )}
    </ul>
  </div>
</div>
  );
};

export default ProductDetails;
