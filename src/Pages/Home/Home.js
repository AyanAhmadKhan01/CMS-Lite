import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Hero />
    <Feature />
    <Latest />
    <Shop />
    <NewsLetter />
    <Footer />
    </>
  )
}

export default Home;


export function Hero() {
  return (
    <>
     <div className="hero-section" id='Hero'>
      <div className="hero-text">
          <h1>Premium <span>Headphone</span> </h1>
          <p>Find The Best HeadPhone of your needs</p>
            <Link to="/store" className="explore-btn test">Explore</Link>
          </div>
          <div className="hero-img-container">
          <img src='/img/Hero.png' alt="hero-img" className='hero-img' />
          </div>
          </div>

    </>
  )
}

function Feature() {
  return (
    <>
    <div className="feature-container">
<div className="feature">
  <div className="feature-box">
    <h1>Durability</h1>
    <i className="fas fa-trophy"></i>
  </div>
  <div className="feature-box">
    <h1>Sound Quality</h1>
    <i className="fas fa-volume-up"></i>
  </div>
  <div className="feature-box">
    <h1>Comfort</h1>
    <i className="fas fa-couch"></i>
  </div>
  <div className="feature-box">
    <h1>Noise Cancellation</h1>
    <i className="fas fa-headphones-alt"></i>
  </div>
  <div className="feature-box">
    <h1>Wireless Connectivity</h1>
    <i className="fas fa-wifi"></i>
  </div>
  <div className="feature-box">
    <h1>Battery Life</h1>
    <i className="fas fa-battery-full"></i>
  </div>
</div>
</div>
    </>
  )
}


function Latest() {
  return (
    <>
    <div className="feature-durability">
      <div className="durability-text">
        <h1>Introducing Our Latest Headphones</h1>
        <p>Experience the next level of sound with our newest headphones. Designed with cutting-edge technology and comfort in mind, these headphones deliver unmatched clarity and deep bass. Get ready to elevate your audio experience like never before</p>
      </div>
      <div className="latest-img-container">
      <img src="img/New Release.png" alt="durability-img" id="new-headphone-img" />
      </div>
    </div>
    <div className="blogs">
  <div className="blogs-text">
    <h1>News and Blogs</h1>
    <p>
      Get the latest on headphones! From new releases to expert reviews, we cover everything. Discover tips for better sound, comparisons of top brands, and insights into the future of audio. Stay informed with our blog, whether you're a music lover or looking for your next pair of headphones.
    </p>
    <Link to="/contact/newsblog" className="navlinks news-btn">Visit</Link>
  </div>
  <div className="news-img-container">
  <img src="img/News&Blog.png" alt="New&Blogs-img" id="newsblogs-img"/>
  </div>
</div>
    </>
  )
}


function Shop() {
  return (
    <>
    <div className="shop">
  <h1>Shop Now</h1>
  <h4>Limited Time Offer 10% off</h4>
  <p>The offer end at 1 December 2024</p>
    <Link to='/store' className='navlinks shop-btn'>Visit</Link>
  <div className="shopnow-img-container">
  <img src="/img/ShopNow.png" alt="" id="shop-img" />
  </div>
</div>

    </>
  )
}


function NewsLetter() {
  return (
    <>
    <div className="news-letter">
      <div className="left-newsletter">
  <div className="news-letter-icons">
  <h1>Connect with Us on Social Media</h1>
  <i className="fab fa-discord" id='home-page-discord'></i>
  <i className="fab fa-instagram-square"></i>
  <i className="fab fa-linkedin-in"></i>
  <i className="fab fa-github-square"></i>
  <i className="fa-brands fa-x-twitter"></i>
  </div>
  </div>
  <div className="right-newsletter">
  <div className="mail-news-letter">
  <h1>Sign Up for Our Newsletter to Get the Latest Offers and Discounts</h1>
  <div className="newsletter-container">
  <input type="text" className="email-newsletter" placeholder="Enter your email" />
  <i className="fas fa-arrow-right"></i>
</div>
  </div>
  </div>
</div>
    </>
  )
}

function Footer() {
  const scrollToHero = (e) => {
    e.preventDefault(); 

    const heroSection = document.getElementById('Hero');
    const offset = -80; 

    const heroPosition = heroSection.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({
      top: heroPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <h3><a href="#Hero" onClick={scrollToHero}>Home</a></h3>
          <h3><Link to='/store'>Store</Link></h3>
          <h3><Link to='/contact'>Contact</Link></h3>
        </div>
        <div className="footer-section">
          <h3><Link to="/contact/support">Support</Link></h3>
          <h3>Store</h3>
        </div>
      </div>
    </>
  );
}