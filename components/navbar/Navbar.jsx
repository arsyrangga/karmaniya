import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <nav className="navbar">
      <div
        className="menu-toggle"
        onClick={() => {
          setshow(true);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar side bar */}
      <ul
        className="menu-list"
        style={{
          transform: show ? "translateX(0px)" : "translateX(-500px)",
        }}
      >
        <div className="icncontainer">
          <i
            className="fas fa-times closeicon"
            onClick={() => {
              setshow(false);
            }}
          ></i>
        </div>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">PROMO</a>
        </li>
        <li>
          <a href="services">SERVICE</a>
        </li>
        <li>
          <a href="/retail-product">RETAIL PRODUCTS</a>
        </li>
        <li>
          <a href="/story">STORY</a>
        </li>
        <li>
          <a href="/about">ABOUT US</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
        <li>
          <a href="/location">LOCATION</a>
        </li>
      </ul>

      <div className="logo">
        <h3>
          <a href="">
            <img src="/assets/kamaniyalogo.png" alt="Kamaniya" />
          </a>
        </h3>
      </div>
      <ul className="menu">
        <li>
          <form action="" method="GET">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="search_text"
            />
            <label htmlFor="serach">
              <i class="fas fa-search"></i>
            </label>
          </form>
        </li>
        <li>
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <img src="/assets/Tokopedia.png" alt="Tokopedia" />
          </a>
        </li>
        <li>
          <a href="" className="btn-submit" type="submit">
            RESERVER NOW
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
