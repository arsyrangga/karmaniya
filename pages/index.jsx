import Head from "next/head";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Story from "../components/story/Story";

import "./Home.css";

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
      </Head>
      <Navbar />
      <Story />
      <Footer />
    </div>
  );
}
