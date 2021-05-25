import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Karmaniya</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
      </Head>
      <div className="contact">
        <Navbar />

        <div className="contactWrapper">
          <form
            action=""
            name="google-sheet"
            className="form-isi"
            // onSubmit={handleForm}
          >
            <label htmlFor="nama">NAMA</label>
            <input
              required
              type="text"
              name="nama"
              id="nama"
              className="nama"
              placeholder="Your Name"
            />

            <label htmlFor="email">EMAIL</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Your Email"
            />

            <label htmlFor="subject">SUBJECT</label>
            <input
              required
              type="text"
              name="subject"
              id="subject"
              className="subject"
              placeholder="Your Subject"
            />

            <label htmlFor="pesan">PESAN</label>
            <textarea
              required
              name="pesan"
              id="pesan"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <button className="btn-submit" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
