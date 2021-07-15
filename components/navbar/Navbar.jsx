import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left"><img src="/assets/kamaniyalogo.png" alt="" /></div>
      <div className="navbar-right">
        <i className="fas fa-bars primary" onClick={()=>setshow(!show)} ></i>
        <a href="/">Home</a>
        <a href="/services">Service</a>
        <a href="/retail-product">Retail Products</a>
        <a href="/about">About</a>
        <a href="/story">Story</a>
        <a href="/location">Contact</a>
      </div>
    </nav>

  <div className="navbar-mobile primary" style={{display: "none", transform : show ? "translateY(-90vh)" : "translateY(0)"}}>
      <a href="/">Home</a>
      <a href="/services">Service</a>
      <a href="/retail-product">Retail Products</a>
      <a href="/about">About</a>
      <a href="/story">Story</a>
      <a href="/location">Contact</a>
  </div>
    
    </>
  );
};

export default Navbar;
