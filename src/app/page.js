import ContentWrapper from "@/_components/ContentWrapper";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";
import Navbar from "@/_components/NavBar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ContentWrapper>
        <Hero />
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export default Home;
