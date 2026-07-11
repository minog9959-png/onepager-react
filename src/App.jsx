// import Categories from "./components/Categories";
import About from "./components/About";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Imagetab from "./components/imagetab";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
// import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSlider/>
      <Hero />
      {/* <Portfolio/> */}
      <OurServices/>
      <Team />
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;