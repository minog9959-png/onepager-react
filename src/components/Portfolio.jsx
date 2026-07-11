import { useState } from "react";
import background from "../assets/images/background1.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

function Portfolio() {
  const [active, setActive] = useState("All");

  const portfolio = [
    { id: 1, image: img1, category: "Web Design" },
    { id: 2, image: img2, category: "Photography" },
    { id: 3, image: img3, category: "Illustration" },
    { id: 4, image: img4, category: "Branding" },
    { id: 5, image: img5, category: "Web Design" },
    { id: 6, image: img6, category: "Photography" },
  ];

  const filtered =
    active === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === active);

  const tabs = [
    "All",
    "Web Design",
    "Photography",
    "Illustration",
    "Branding",
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50" 
    style={{
            backgroundImage: `url(${background})`,
          }}>

      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-6 mb-12">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-8 py-3 text-xl transition duration-100
              ${
                active === tab
                  ? "bg-cyan-500 text-white nav-link"
                  : "bg-white text-gray-800 hover:bg-cyan-500 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        <hr className="mb-12 text-gray-300" />

        {/* Images */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filtered.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden group cursor-pointer"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;