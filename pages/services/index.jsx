import Navbar from "../../components/navbar/Navbar";
import "./services.css";
import Head from "next/head";

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
    <div className="container">
    <div className="ourServices">
      <div className="hrLeft"></div>
      Our Services
      <div className="hrRight"></div>

    </div>

    <div className="containerCard">
    
    <a href="/about">
    <div className="cardKonten">
        <img src="https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="test1" width="300px" height="300px"/>
        <div className="text1">
        <h4>Personal Treatments</h4>
        <p className="kata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea laborum.</p>
        </div>
    </div>
    </a>
    <a href="/about">
    <div className="cardKonten">
        <img src="https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="test1" width="300px" height="300px"/>
        <div className="text1">
        <h4>Spa Packages</h4>
        <p className="kata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea laborum.</p>
        </div>
    </div>
    </a>
    <a href="/about">
    <div className="cardKonten">
        <img src="https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="test1" width="300px" height="300px"/>
        <div className="text1">
        <h4>Baby Spa</h4>
        <p className="kata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea laborum.</p>
        </div>
    </div>
    </a>
    </div>
    <div className="containerCard2">
    <a href="/about">
    <div className="cardKonten1">
        <img src="https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="test1" width="300px" height="300px"/>
        <div className="text1">
        <h4>Kids Packages</h4>
        <p className="kata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea laborum.</p>
        </div>
    </div>
    </a>
    <a href="/about">
    <div className="cardKonten1">
        <img src="https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="test1" width="300px" height="300px"/>
        <div className="text1">
        <h4>Pregnancy Spa</h4>
        <p className="kata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea laborum.</p>
        </div>
    </div>
    </a>
    <a href="/about">
    <div className="cardKonten1">
        <img src="https://images.pexels.com/photos/7571030/pexels-photo-7571030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="test1" width="300px" height="300px"/>
        <div className="text1">
        <h4>Post Natal Packages</h4>
        <p className="kata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea laborum.</p>
        </div>
    </div>
    </a>
    </div>
        <div className="kontenBijak">
          <p>"True healing comes from the nourishing of the mind,<br></br>the body and the soul"</p>
        </div>
        </div>
  </div>
  );
};

export default Index;