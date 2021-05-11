import Navbar from "../../components/navbar/Navbar";
import "./About.css";
import Head from "next/head";
import Footer from "../../components/footer/Footer";

const Index = () => {
  return (
    <div className="about">
      <Head>
        <title>Kamania</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navbar />

                                  {/* container About  */}
      <div className="mainAbout">

                                    {/* Garis dan judul  */}
        <div className="containerGaris">
          <hr className="hrLefto" />
          <div className="judulo">
          About Us</div>
          <hr className="hrRighto" />
        </div>
                                    {/* END Garis dan judul  */}

                                    {/* Gambar 1 */}
        <div className="gambar1">

                                    {/* LETAK GAMBAR  */}
          <div className="tesGambar">
            
          </div>
                                    {/* END LETAK GAMBAR  */}

                                    {/* TULISAN  */}
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
                                    {/* END TULISAN  */}

        </div>
                                    {/* END Gambar 1*/}

                                    {/* Gambar 2 */}

        <div className="gambar1">
                                      {/* LETAK GAMBAR 2  */}
          <div className="tesGambar">
            
          </div>
                                      {/* END LETAK GAMBAR 2  */}

                                      {/* TULISAN GAMBAR 2  */}
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
                                    {/* END TULISAN GAMBAR 2  */}

        </div>
                                    {/* END Gambar 2 */}

        <Footer />
      </div>
                                    {/* END container About  */}
    </div>
  );
};

export default Index;
