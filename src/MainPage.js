import React from "react";
import Nav from "./components/Nav";
import Bandtext from "./components/Bandtext";
import Band from "./components/Band";
import Youtube from "./components/Youtube";
import Repertoire from "./components/Repertoire";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function MainPage() {

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Helmet>
  <title>Birdland Band - Beste Hochzeits- und Partyband in Zürich</title>
  <meta
    name="description"
    content="Wir sind Birdland, eine Hochzeits- und Partyband aus Zürich, die für alle Ihre Veranstaltungen verfügbar ist."
  />
  <meta name="keywords" content="Zürich Band, Hochzeitsband, Partyband, Live-Musik, Birdland, Zürich Veranstaltungen, Event, Eventband" />
  <meta name="author" content="Birdland Band" />
  <meta property="og:title" content="Birdland Band - Deine Hochzeits- und Partyband in Zürich" />
  <meta property="og:description" content="Wir sind Birdland, eine Hochzeits- und Partyband aus Zürich, die für alle Ihre Veranstaltungen verfügbar ist." />

  <meta property="og:image" content="https://www.birdland-music.ch" />
  <meta property="og:url" content="https://www.birdland-music.ch" />
  <meta property="og:type" content="website" />
</Helmet>
      <Nav />
      <Bandtext />
      <Youtube />
      <Band />
      <Repertoire />
      <Form />
      <Footer />
    </div>
  );
}

export default MainPage;
