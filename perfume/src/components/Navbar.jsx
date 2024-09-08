import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import { FaTimes } from 'react-icons/fa'; // Import the close icon
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
     <div className="containers-nav">
      <div className="nav">
      <div className="header">
        <h2 className="title">Junaki</h2>
      </div>
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Support</a></li>
        </ul>
        <div className="sign">
          <button>Get started</button>
        </div>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
     </div>
  );
};

export default Navbar;
