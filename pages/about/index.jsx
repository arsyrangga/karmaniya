import Navbar from "../../components/navbar/Navbar";
import "./About.css";
import Head from "next/head";
import Footer from "../../components/footer/Footer";

const Index = () => {
  return (
    <div className="about">
      <Head>
        <title>Kamaniya</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navbar />
      <div className="mainAbout">
        <div className="pembungkus">
          <hr className="hrLeft" />
          <h3 className="about">About Us</h3>
          <hr className="hrRight" />
        </div>

        <div className="gambar1">
          <div className="tesGambar">
            <p>halo</p>
          </div>
          <div className="tulisan">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolorem non tempore dolores perferendis sed saepe nihil quidem
              ipsam, velit dolore, ea obcaecati aperiam qui porro! Quis
              similique culpa facilis! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Fugit deserunt hic obcaecati illo neque ipsam
              veniam optio earum quaerat blanditiis ipsum aperiam iusto eligendi
              voluptatum eos nihil, quod sit iure.
            </p>
            <div className="tulisan2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                dolorem non tempore dolores perferendis sed saepe nihil quidem
                ipsam, velit dolore, ea obcaecati aperiam qui porro! Quis
                similique culpa facilis! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Fugit deserunt hic obcaecati illo neque ipsam
                veniam optio earum quaerat blanditiis ipsum aperiam iusto
                eligendi voluptatum eos nihil, quod sit iure.
              </p>
            </div>
          </div>
        </div>

        <div className="gambar1">
          <div className="tesGambar">
            <p>halo</p>
          </div>
          <div className="tulisan">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolorem non tempore dolores perferendis sed saepe nihil quidem
              ipsam, velit dolore, ea obcaecati aperiam qui porro! Quis
              similique culpa facilis! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Fugit deserunt hic obcaecati illo neque ipsam
              veniam optio earum quaerat blanditiis ipsum aperiam iusto eligendi
              voluptatum eos nihil, quod sit iure.
            </p>
            <div className="tulisan2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                dolorem non tempore dolores perferendis sed saepe nihil quidem
                ipsam, velit dolore, ea obcaecati aperiam qui porro! Quis
                similique culpa facilis! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Fugit deserunt hic obcaecati illo neque ipsam
                veniam optio earum quaerat blanditiis ipsum aperiam iusto
                eligendi voluptatum eos nihil, quod sit iure.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
