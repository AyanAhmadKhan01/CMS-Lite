import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/store.css'; 
import '../styles/contact.css';

function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prevState => !prevState);
    };

    return (
        <div className="Navbar">
            <h1>Test</h1>
            <i 
                className={`fa-solid ${menuVisible ? 'fa-xmark' : 'fa-bars'}`}
                onClick={toggleMenu}
            ></i>
            <ul className={`navlist ${menuVisible ? 'show' : 'hide'}`}>
                <div className="nav-view">
                <li><Link to="/" className="navlinks">Home</Link></li>
                <li><Link to="/store" className="navlinks">Store</Link></li>
                <li><Link to="/contact" className="navlinks">Contact</Link></li>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
