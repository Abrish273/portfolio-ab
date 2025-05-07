import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ServicesSection from "./components/ServicesSection";
import Recent from "./components/Recent";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#1e232c]">
      <Navbar />
      <HeroSection />
      <section id="about">
        <AboutMe />
      </section>
      <section id="service">
        <ServicesSection />
      </section>
      <section id="work">
        <Recent />
      </section>
      <section id="contact">
        <HireMe />
      </section>
      <Footer />
    </div>
  );
};

export default App;
