import React from "react";
import Divider from "../../../components/divider/Divider";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./Produk.css";

function Index() {
  return (
    <>
      <div className="produg">
        <Navbar />
        <div className="rowprodug">
          <img src="https://picsum.photos/seed/842/900" alt="" />
          <div className="rowprodugright">
            <h3 className="judulprodug">Produk Essential Oils 1</h3>
            <p className="hargaprodug">Rp. 000.000,-</p>
            <button className="produgbuy">BUY</button>
            <p className="deskripsiprodug">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias,
              ex incidunt obcaecati rem officia quasi excepturi inventore
              commodi, porro aspernatur sint quidem consequuntur nisi! Natus
              corporis deserunt fugiat quasi! <br /> <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              placeat! Labore, dolorem maxime rerum atque laudantium fugit
              fugiat, quae esse ea vitae a excepturi et consequuntur commodi
              voluptatum. Aliquid, beatae. <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              commodi, voluptatem quas, rem dolor tenetur obcaecati expedita
              sint fuga officiis porro at deserunt reiciendis ad? Repudiandae
              assumenda deleniti corrupti necessitatibus!
            </p>
          </div>
        </div>
        <Divider text="Similiar Products" />
        <div className="produgcontener">
          <div
            className="produgcard"
            onClick={() => {
              window.location.href = "/produg-product/produk";
            }}
          >
            <img src="https://picsum.photos/seed/921/900" alt="" />
            <h3>Produk Essential Oils 1</h3>
            <p>Rp. 000.000,-</p>
          </div>
          <div
            className="produgcard"
            onClick={() => {
              window.location.href = "/product-product/produk";
            }}
          >
            <img src="https://picsum.photos/seed/921/900" alt="" />
            <h3>Produk Essential Oils 1</h3>
            <p>Rp. 000.000,-</p>
          </div>
          <div
            className="produgcard"
            onClick={() => {
              window.location.href = "/produg-product/produk";
            }}
          >
            <img src="https://picsum.photos/seed/921/900" alt="" />
            <h3>Produk Essential Oils 1</h3>
            <p>Rp. 000.000,-</p>
          </div>
          <div
            className="produgcard"
            onClick={() => {
              window.location.href = "/produg-product/produk";
            }}
          >
            <img src="https://picsum.photos/seed/921/900" alt="" />
            <h3>Produk Essential Oils 1</h3>
            <p>Rp. 000.000,-</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
