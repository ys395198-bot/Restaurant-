import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (

    
    <nav className="navbar">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/19/64/4a/ristorante-valentino.jpg?w=1000&h=600&s=1" alt="" className="logo"></img>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menus">Menus</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

     
    </nav>
    
  );
}

export default Navbar;