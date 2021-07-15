import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-left"><img src="/assets/kamaniyalogo.png" alt="" /></div>
      <div className="navbar-right">
        <i className="fas fa-bars"></i>
        <a href="/">Home</a>
        <a href="/services">Service</a>
        <a href="/retail-product">Retail Products</a>
        <a href="/about">About</a>
        <a href="/story">Story</a>
        <a href="/location">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
