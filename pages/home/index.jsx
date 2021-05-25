import Footer from "../../components/footer/Footer";
import "./Page.css";
import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import Pages from "../../components/home/Page";

const Index = () => {
  return (
    <div className="home">
      <Head>
        <title>Karmaniya</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
};

export default Index;
