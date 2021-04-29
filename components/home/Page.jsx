import "./Page.css";
import React from "react";

const Pages = () => {
  return (
    <div className="group">
      <div className="pembungkus">
        <h2>
          <strong>Promo</strong>
        </h2>
      </div>
      <div className="produk_terbaru">
        <div className="gallery">
          <a href="/components/detai/Detail">
            <img src="/assets/2.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/2.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/3.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/4.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/5.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/6.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/7.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/8.jpg" alt="" />
          </a>
          <a href="">
            <img src="/assets/9.jpg" alt="" />
          </a>
        </div>
        <div className="btn">
          <a href="javascript:void();" className="readmore-btn" onClick={() => {
            setshow(true);
          }}
          >
            See More
          </a>
        </div>
      </div>
      <div className="pembungkus">
        <h1>
          <strong>Recomended for you and your loved ones</strong>
        </h1>
      </div>
      <ul className="thumbnail">
        <li>
          <img src="/assets/1.jpeg" alt="" className="image" />
          <div className="content">
            <h5>Rekomendasi Personal Treatments</h5>
            <p>
              Pilih 1 Layanan dari kategori ini yang ingin ditaruh disini. Pilih
              1 layanan dari kategori ini yang ingin di tatuh disini.
            </p>
          </div>
        </li>
        <li>
          <img src="/assets/2.jpg" alt="" className="image" />
          <div className="content">
            <h5>Rekomendasi Spa Packages</h5>
            <p>
              Pilih 1 layanan dari kategori ini yang ingin ditaruh di sini.
              Pilih 1 layanan dari kategori ini yang ingin di taruh disini
            </p>
          </div>
        </li>
        <li>
          <img src="/assets/3.jpg" alt="" className="image" />
          <div className="content">
            <h5>Rekomendasi Baby Spa</h5>
            <p>
              Pilih 1 layanan dari kategori ini yang ingin ditaruh disini. Pilih
              1 layanan dari kategori ini yang ingin ditaruh disini.
            </p>
          </div>
        </li>
        <li>
          <img src="/assets/4.jpg" alt="" className="image" />
          <div className="content">
            <h5>Rekomendasi Kids Packages</h5>
            <p>
              Pilih 1 layanan dari kategori ini yang ingin ditaruh disini. Pilih
              1 layanan dari kategori ini yang ingin ditaruh disini.
            </p>
          </div>
        </li>
        <li>
          <img src="/assets/5.jpg" alt="" className="image" />
          <div className="content">
            <h5>Rekomendasi Pregnancy Spa</h5>
            <p>
              Pilih 1 layanan dari kategori ini yang ingin ditaruh disini. Pilih
              1 layanan dari kategori ini yang ingin ditaruh disini.
            </p>
          </div>
        </li>
        <li>
          <img src="/assets/7.jpg" alt="" className="image" />
          <div className="content">
            <h5>Rekomendasi Post Natal Packages</h5>
            <p>
              Pilih 1 layanan dari kategori ini yang ingin ditaruh disini. Pilih
              1 layanan dari kategori ini yang ingin ditaruh disini.
            </p>
          </div>
        </li>
      </ul>
      <blockquote>
        True healing comes from the nourshing of the mind,
        <br></br> the body and the soul
      </blockquote>
    </div>
  );
};
export default Pages;
