import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-[100vh] flex items-center justify-center py-16 px-6 bg-[#0f172a] text-white relative"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left: Text Content */}
          <div
            data-aos="fade-right"
            className="md:w-1/2 text-start md:text-left"
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              I'm <span className="text-blue-400">Sal Monineath</span>, a web
              developer and graphic designer passionate about creating stunning
              digital experiences. I specialize in front-end development, UI/UX
              design, and branding.
            </p>
            <a
              href="#more-about"
              className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold rounded-lg transition duration-300"
            >
              Read More
            </a>
          </div>

          {/* Right: Image */}
          <div
            data-aos="fade-left"
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src="https://monineath-portfolio.vercel.app/img/about.jpg"
              alt="Sal Monineath"
              className="w-80 h-[460px] object-cover rounded-lg shadow-lg border-4 border-blue-500"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
