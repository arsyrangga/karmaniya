import "./Page.css";
import "./Responsive.css";
import React from "react";

const Pages = () => {
  return (
    <div className="home">
      <div className="promo-container">
      <h1 className="primary">Promo</h1>
      <p className="promo-description primary">We are committed to positively impacting the quality of life
      through exceptional Baby to Family Wellness Centre.</p>
    <div className="promo-content-container">
      <div className="promo-content">
        <img src="https://picsum.photos/seed/467/900" alt="" />
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="promo-content">
        <img src="https://picsum.photos/seed/468/900" alt="" />
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
      <button className="button-promo-content">See More</button>
    </div>

      <div className="who-container">
        <div className="who-container-left">
          <h1> Who We Are </h1>
          <p>We are committed to be the best Baby Spa partners for our customer.</p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aspernatur suscipit minus sequi, cumque, ullam error quas illo maxime sunt ipsam. Id molestiae sequi deleniti. Natus, autem? Nobis, dicta recusandae?</h3>
          <div className="button-container">
          <button className="button-who">Read More</button>
        </div>
        </div>
       
        <div className="who-container-right">
          <img src="https://picsum.photos/seed/1123/900" alt="" />
        </div>
      </div>
      <div className="promo-container">
        <h1 className="primary">Promo</h1>
        <p className="promo-description primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis sint corrupti,</p>
      </div>
      <div className="home-step-container">
    <Card  img="https://picsum.photos/seed/148/900"/>
    <Card right img="https://picsum.photos/seed/162/900"/>
    <Card img="https://picsum.photos/seed/190/900"/>
    <Card right img="https://picsum.photos/seed/155/900" />
      </div>

    </div>
  );
};

const Card = ({right,img}) =>{
  return(
    <div className="home-step-card" style={{flexDirection : right && "row-reverse"}}>
      <div className="home-step-card-left">
        <img src={img} alt="" />
      </div>
      <div className="home-step-card-right">
        <h1 className="primary">lorem Ipsum</h1>
        <p className="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
      </div>
    </div>
  )
}

export default Pages;
