import background from "../assets/images/background1.jpg";
import Imagetab from "./Imagetab";
import Portfolio from "./Portfolio";

const Hero = () => {
  return (
    <section id="home"
      className="pt-24 pb-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="portfolio-title text-5xl font-bold">
          OUR PORTFOLIO
        </h2>

        <p className="mt-6 text-gray-500 text-2xl">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* Top Line */}
        <div className="w-[92%] h-[1px] bg-gray-300 mt-12 mx-auto"></div>

        {/* Tabs */}
        {/* <Imagetab /> */}

        {/* Portfolio */}
        <Portfolio/>

      </div>
    </section>
  );
};

export default Hero;