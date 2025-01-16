import './App.css';
import React, { useEffect } from 'react';
import BackToTop from './common/BackToTop';
import AboutUs from './components/AboutUs';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import OurStory from './components/OurStory';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);
  return (
    <>
      <Hero />
      <OurStory />
      <AboutUs />
      <Roadmap />
      <Team />
      <Faqs />
      <LatestNews />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;
