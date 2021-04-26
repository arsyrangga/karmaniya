import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/kamaniya.png" alt="" className="brand" />
      <div className="navRight">
        <div className="inputcontainer">
          <input type="text" className="inputNav" />
          <i class="fas fa-search"></i>
        </div>

        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-shopify"></i>

        <button className="reserve">Reserve Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
