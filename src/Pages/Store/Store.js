import { Link } from 'react-router-dom';
import Gaming from './Gaming';
import Studio from './Studio';
import Music from './Music';

function Store() {
  return (
    <>
      <img src="img/Store-Banner.png" alt="Store Banner" id="store-banner-img" />
      <StoreCards />
    </>
  );
}

export default Store;





function StoreCards() {
  return (
    <div className="store-container">
      <h1>Buy Your Headphones</h1>
      <div className="store-section">
      <Link to="/store/music">
        <div className="store-cards">
       
          <img src="img/Store-img-1.png" alt="store-img-1" />
          <h2>Music</h2>
          <p>Best for listening to music</p>
         
          <h3>View</h3>
        </div>
        </Link>
        <Link to="/store/gaming">
        <div className="store-cards">
      <ul>
         <li class="out-of-stock">Out of Stock</li>
      </ul>
          <img src="img/Store-img-2.png" alt="store-img-2" />
          <h2>Gaming</h2>
          <p>Best for gaming experiences</p>
          <h3>View</h3>
        </div>
        </Link>
        <Link to="/store/studio">
        <div className="store-cards">
        <ul>
           <li class="out-of-stock">Out of Stock</li>
        </ul>
          <img src="img/Store-img-3.png" alt="store-img-3" />
          <h2>Studio</h2>
          <p>Best for studio work</p>
          <h3>View</h3>
        </div>
        </Link>
      </div>
    </div>
  );
}
