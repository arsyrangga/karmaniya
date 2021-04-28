import "./Navbar.css";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu-toggle">
          <input type="checkbox"/>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <ul className="menu-list">
          <li><a href="">HOME</a></li>
          <li><a href="">PROMO</a></li>
          <li><a href="">SERVICE</a></li>
          <li><a href="">RETAIL PRODUCTS</a></li>
          <li><a href="">STORY</a></li>
          <li><a href="">ABOUT US</a></li>
          <li><a href="">CONTACT</a></li>
          <li><a href="">LOCATION</a></li>
      </ul>
      <div className="logo">
          <h3><a href=""><img src="./assets/kamaniyalogo.png" alt="Kamaniya"/></a></h3>
      </div>
      <ul className="menu">
          <li>
              <form action="" method="GET">
                  <input type="search" id="search" placeholder="Search" className="search_text"/>
                  <label htmlFor="serach"><i class="fas fa-search"></i></label>
              </form>
          </li>
          <li>
            <a href="https://macam-macamperalatan.surge.sh"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="https://macam-macamperalatan.surge.sh"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="https://macam-macamperalatan.surge.sh"><img src="/assets/Tokopedia.png" alt="Tokopedia"/></a>
          </li>
          <li>
            <a href="" className="btn-submit" type="submit">RESERVER NOW</a>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
