// src/components/Portfolio.jsx
import React from "react";

const Portfolio = () => {
  const portfolioData = [
    {
      title: "E-commerce",
      description: "This project is an E-commerce website selling an E-Bike.",
    },
    {
      title: "Wildwood",
      description: "This is project why protecting the forest is important.",
    },
    {
      title: "Furniture Company",
      description:
        "Developed a sleek, responsive business website showcasing the company's products and services.",
    },
    {
      title: "Travel Blog",
      description:
        "Created a vibrant travel blog featuring destination guides and user reviews.",
    },
    {
      title: "Fitness Tracker",
      description:
        "Built a fitness tracking app to help users monitor their workouts and progress.",
    },
    {
      title: "Recipe App",
      description:
        "Designed a recipe app with search functionality and meal planning features.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full h-screen flex flex-col items-center justify-center pt-20 py-16 bg-[#0f172a] text-white "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href="#"
                className="text-blue-400 no-underline hover:text-blue-300 transition-colors duration-200"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
