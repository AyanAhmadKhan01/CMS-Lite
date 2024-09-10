import { Link } from "react-router-dom";
import Styles from '../styles/styles.css'
import '../styles/store.css'; 
import '../styles/contact.css';


function Navbar() {
    return (
        <div className="Navbar">
            <h1>Test</h1>
            <ul className="navlist">
                <li><Link to="/" className="navlinks">Home</Link></li>
                <li><Link to="/store" className="navlinks">Store</Link></li>
                <li><Link to="/contact" className="navlinks">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
