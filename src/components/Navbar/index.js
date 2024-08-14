import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css'; // Import CSS file
import Logo from '../1_MediaAssets/BrandAssets/Logo.svg'; // Import logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="logo">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '☰'}
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="menu-item" activeClassName="active">Home</NavLink>
        <NavLink to="/plans" className="menu-item" activeClassName="active">Plans</NavLink>
        <NavLink to="/about" className="menu-item" activeClassName="active">About</NavLink>
        <NavLink to="/affiliate" className="menu-item" activeClassName="active">Affiliate</NavLink>
        <NavLink to="/blogs" className="menu-item" activeClassName="active">Blogs</NavLink>
        <NavLink to="/contact" className="menu-item" activeClassName="active">Contact</NavLink>
        <NavLink to="/app" className="menu-item" activeClassName="active">App</NavLink>
        <NavLink to="/login" className="theme-button">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
