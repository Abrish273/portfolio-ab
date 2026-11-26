import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ServicesSection from "./components/ServicesSection";
import Recent from "./components/Recent";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const MotionDiv = motion.div;

const PageWrapper = ({ children }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  >
    {children}
  </MotionDiv>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HeroSection /></PageWrapper>} />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutMe />
              <Experience />
            </PageWrapper>
          }
        />
        <Route path="/experience" element={<Navigate to="/about" replace />} />
        <Route path="/services" element={<PageWrapper><ServicesSection /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Recent /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><HireMe /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#080c14] text-slate-100 selection:bg-teal-500/30 selection:text-teal-200 relative overflow-x-hidden">
        {/* Global ambient background */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 -z-20" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

