import React from "react";

const Experience = () => {
  const experienceData = [
    {
      period: "2023 - Present",
      title: "Front-end Learning: Web Development",
      institution: "PSE School of Business",
    },
    {
      period: "2024 - 2025",
      title: "Study",
      institution: "Samdech Ov High School",
    },
    {
      period: "2023 - 2024",
      title: "High School Diploma",
      institution: "Samdech Ov High School",
    },
    {
      period: "2021 - 2023",
      title: "Study Microsoft Office and Graphic Designer",
      institution: "Bee International School",
    },
  ];

  return (
    <section
      id="experience"
      className="pt-[8em] py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-full"></div>
          {experienceData.map((epx, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }  `}
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-800 z-10 transition-all duration-300 hover:bg-purple-500"></div>
              <div
                data-aos="zoom-in-up"
                data-aos-delay="200"
                className={`w-5/12 p-6 rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <h3 className="text-lg font-semibold text-blue-300">
                  {epx.period}
                </h3>
                <h4 className="text-xl font-bold text-white mt-2">
                  {epx.title}
                </h4>
                <p className="text-gray-400 mt-1">{epx.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
