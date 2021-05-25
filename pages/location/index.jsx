import Head from "next/head";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Location.css";

const Location = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
      </Head>
      <div className="location background-primary">
        <Navbar />

        <div className="locationOOP background-light">
          <div className="locationContainer middle-position">
            <div className="locationAva middle-position">
              <img src="/assets/kamaniyalogo.png" alt="" />
              <p>
                We specialised in giving holistic Spa & Massage. A whole package
                of refreshing and rejuvenating treatment for body and soul. For
                you and your loved ones{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                earum. Quidem distinctio repellat impedit aliquid reprehenderit
                assumenda minima laborum. Cupiditate odio temporibus eaque
                facere voluptates eveniet atque nisi itaque aspernatur?
              </p>
              <div className="locationUWU background-secondary">
                Online Reservation
              </div>
            </div>
            <div className="locationWHY">
              <a href="https://www.facebook.com/hashtag/karmaniya">
                <div className="locationButton middle-position">
                  <i class="fab fa-facebook-f"></i>
                  <p>Karmaniya</p>
                </div>
              </a>
              <a href="https://www.instagram.com/explore/tags/karmaniya/?hl=en">
                <div className="locationButton middle-position">
                  <i class="fab fa-instagram"></i> <p>@karmaniya</p>
                </div>
              </a>
              <a href="https://www.instagram.com/explore/tags/karmaniya/?hl=en">
                <div className="locationButton middle-position">
                  <i class="far fa-envelope"></i>
                  <p>karmaniya@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
          <div className="gMaps">
            <iframe
              className="locationMaps"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Jl.%20Ciranjang%20No%2019,%20kebayoran%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
