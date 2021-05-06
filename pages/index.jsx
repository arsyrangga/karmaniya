import Head from "next/head";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Pages from "../components/home/Page";

export default function Home() {
  return (
    <div className="containers">
      <Head>
        <title>Karmania</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
        <meta property="og:image" content="/assets/kamaniyalogo.png" />
        <meta
          name="description"
          content="Kamania baby spa We specialised in giving holistic Spa & Massage. A whole package of refreshing and rejuvenating treatment for body and soul. For you and your loved ones"
        />
      </Head>
      <Navbar />
      <Carousel />
      <Pages />
      <Footer />
    </div>
  );
}
