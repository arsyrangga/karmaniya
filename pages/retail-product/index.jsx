import Head from "next/head";
import React from "react";
import Divider from "../../components/divider/Divider";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Retail.css";

function Index() {
  return (
    <div className="retail">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navbar />
      <div className="retail-content">
        <h1>Retail Product</h1>
        <Divider text="Essential Oils" />
        <div className="retailcardcontainer">
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
        </div>
        <Divider text="Hair Care" />
        <div className="retailcardcontainer">
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
        </div>
        <Divider text="Others" />
        <div className="retailcardcontainer">
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
          <RetailCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const RetailCard = () => {
  return (
    <div
      className="retailcard"
      onClick={() => {
        window.location.href = "/retail-product/produk";
      }}
    >
      <img src="https://picsum.photos/seed/921/900" alt="" />
      <h3>Produk Essential Oils 1</h3>
      <p>Rp. 000.000,-</p>
    </div>
  );
};

export default Index;
