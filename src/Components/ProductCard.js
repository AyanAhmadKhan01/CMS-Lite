import React from "react"
import { Link } from "react-router-dom";


const ProductCard = ({id, name, image, price, description,  onAddToCart, viewCart}) => (
  
<div className="music-headphone-card">
<Link to={`/store/music/product/${id}`}>
<img src={image} alt={name} />
<h1>{name}</h1>
</Link>
<div className="rating">
  <i className="fa-solid fa-star"></i>
  <i className="fa-solid fa-star"></i>
  <i className="fa-solid fa-star"></i>
  <i className="fa-solid fa-star"></i>
  <i className="fa-regular fa-star-half-stroke"></i>
</div>
<p>${price}</p>
<h4 onClick={onAddToCart}>Add to Cart</h4>
</div>
)

export default ProductCard;










