import Footer from "../components/story/Story";
import "./Story.css";
import Head from "next/head";

const Index = () => {
  return (
    <div className="story">
      <Head>
        <title>Karmania</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Story/>
      <Footer />
    </div>
  );
};

export default Index;