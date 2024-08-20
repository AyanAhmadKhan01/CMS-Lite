import Styles from '../styles/styles.css'
import { Link } from 'react-router-dom';

function Navbar() {
 return(
    <>
    <div className="navbar">
        <h1>Appify</h1>
        <div className="navlist">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Store</Link></li>
           <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
    </>
 ) 
}

export default Navbar;