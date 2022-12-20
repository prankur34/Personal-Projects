import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Details from "../Components/Details";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Details />
      <Footer />
    </div>
  );
}

export default Homepage;
