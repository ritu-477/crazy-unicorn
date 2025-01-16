import './App.css';
import AboutUs from './components/AboutUs';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import OurStory from './components/OurStory';
import Roadmap from './components/Roadmap';
import Team from './components/Team';

function App() {
  return (
    <>
      <Hero />
      <OurStory />
      <AboutUs />
      <Roadmap />
      <Team />
      <Faqs />
      <LatestNews />
      <Footer/>
    </>
  );
}

export default App;
