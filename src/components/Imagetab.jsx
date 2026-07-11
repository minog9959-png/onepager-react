import { useState } from "react";

const Imagetab = () => {
  const categories = [
    "All",
    "Web Design",
    "Photography",
    "Illustration",
    "Branding",
  ];

  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-[92%] mx-auto flex justify-center gap-8 pt-4 pb-5 flex-wrap border-b border-gray-300">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(category)}
          className={`px-8 py-3 text-lg transition-all duration-300 ${
            activeTab === category
              ? "bg-cyan-400 text-white"
              : "text-black hover:text-cyan-500"
          }`}
          style={
            activeTab === category
              ? {
                  clipPath:
                    "polygon(15% 0%,100% 0%,85% 100%,0% 100%)",
                }
              : {}
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Imagetab;