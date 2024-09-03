import Nav from "./components/Nav";
import Bandtext from "./components/Bandtext";
import Band from "./components/Band";
import React from "react";
import Youtube from "./components/Youtube";
import Repertoire from "./components/Repertoire";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useEffect } from "react";

function MainPage() {
  useEffect(() => {
    document.title = "Birdland Home";
  }, []);
  return (
    <div>
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
