import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ServicesSection from "./components/ServicesSection";
import Recent from "./components/Recent";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Experience />
        <ServicesSection />
        <Recent />
        <HireMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;

