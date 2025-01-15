import './App.css';
import AboutUs from './components/AboutUs';
import Faqs from './components/Faqs';
import Hero from './components/Hero';
import LatestNews from './components/latestNews';
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
      <LatestNews/>
      <AboutUs/>
    </>
  );
}

export default App;
