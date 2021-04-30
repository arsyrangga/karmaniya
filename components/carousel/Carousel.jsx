import Image from "next/image";
import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [carousel, setCarousel] = useState({
    carousel1: true,
    carousel2: false,
    carousel3: false,
    carousel4: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setCarousel({
        carousel2: true,
      });
    }, 10000);

    setTimeout(() => {
      setCarousel({
        carousel3: true,
      });
    }, 20000);

    setTimeout(() => {
      setCarousel({
        carousel4: true,
      });
    }, 30000);

    setTimeout(() => {
      setCarousel({
        carousel1: true,
      });
    }, 40000);
  }, []);

  return (
    <div className="carousel">
      {carousel.carousel1 && (
        <>
          <div className="cardLeft">
            <span
              className="material-icons arrowLeft"
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
          </div>
          <Image
            src="/assets/project1.JPG"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
          <div className="cardRight">
            <span
              className="material-icons arrowRight"
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
          </div>
          <div className="cardBottom">
            <div className="buletCardUtama"></div>
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <img src="assets/carouselimg.svg" alt="img" />
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            ></div>
          </div>
        </>
      )}
      {carousel.carousel2 && (
        <>
          <div className="cardLeft">
            <span
              className="material-icons arrowLeft"
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
          </div>
          <Image
            src="/assets/project2.JPG"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
          <div className="cardRight">
            <span
              className="material-icons arrowRight"
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
          </div>
          <div className="cardBottom">
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div className="buletCardUtama"></div>
            <img src="assets/carouselimg.svg" alt="img" />

            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            ></div>
          </div>
        </>
      )}
      {carousel.carousel3 && (
        <>
          <div className="cardLeft">
            <span
              className="material-icons arrowLeft"
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
          </div>
          <Image
            src="/assets/project3.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
          <div className="cardRight">
            <span
              class="material-icons arrowRight"
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
          </div>
          <div className="cardBottom">
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <img src="assets/carouselimg.svg" alt="img" />
            <div className="buletCardUtama"></div>
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel4: true,
                });
              }}
            ></div>
          </div>
        </>
      )}
      {carousel.carousel4 && (
        <>
          <div className="cardLeft">
            <span
              className="material-icons arrowLeft"
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            >
              keyboard_arrow_left
            </span>
          </div>
          <Image
            src="/assets/project4.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
          <div className="cardRight">
            <span
              className="material-icons arrowRight"
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            >
              keyboard_arrow_right
            </span>
          </div>
          <div className="cardBottom">
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel1: true,
                });
              }}
            ></div>
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel2: true,
                });
              }}
            ></div>
            <img src="assets/carouselimg.svg" alt="img" />
            <div
              className="buletCard"
              onClick={() => {
                setCarousel({
                  carousel3: true,
                });
              }}
            ></div>
            <div className="buletCardUtama"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
