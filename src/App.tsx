import React, { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Card from "./components/Card";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import OurAdvantages from "./components/OurAdvantages";
import Service from "./components/Service";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Hero />
      <Service />
      <AboutUs />
      <OurAdvantages />
      <Card />
      <FAQ />
      <Footer/>
    </>
  );
};

export default App;
