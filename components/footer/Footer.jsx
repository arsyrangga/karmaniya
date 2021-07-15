import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="content-about">
          <img src="/assets/kamaniyalogo.png" alt="" />
          <p>
            We specialised in giving holistic Spa & Massage. A whole package of
            refreshing and rejuvenating treatment for body and soul. For you and
            your loved ones{" "}
          </p>
          <button className="reservation">Online Reservation</button>
        </div>
        <div className="content-contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              {" "}
              <i class="fas fa-map-marker-alt"></i> Jalan Ciranjang, No.
              19,Kebayoran Baru Jakarta Selatan 12180{" "}
            </li>
            <li>
              <i class="fas fa-phone-alt"></i> 08123456789{" "}
            </li>
            <li>
              <i class="fas fa-envelope"></i> cs@kamaniya.com{" "}
            </li>
          </ul>

          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-shopify"></i>
        </div>
        <div className="content-map" style={{borderRadius:"10px"}}
        >
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=jalan%20ciranjang&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; copyright Kamaniya Family Spa And Massage. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
