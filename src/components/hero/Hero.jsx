import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white relative overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-56 h-56 rounded-full bg-blue-600 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-purple-600 filter blur-3xl"></div>
      </div>

      {/* Main content container with improved spacing */}
      <div className="z-10 flex flex-col items-center max-w-3xl px-4 text-center">
        {/* Profile Image - slightly reduced from previous version */}
        <img
          data-aos="fade-down"
          src="https://monineath-portfolio.vercel.app/img/hero.jpg"
          alt="Sal Monineath"
          className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-xl object-cover"
        />

        {/* Name - slightly reduced */}
        <h1
          data-aos="fade-up"
          className="text-5xl font-bold mt-5 text-blue-400 tracking-tight"
        >
          Sal Monineath
        </h1>

        {/* Job Title */}
        <div className="h-10 flex items-center justify-center">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-300 mt-2 font-light"
          >
            Web Developer & Graphic Designer
          </p>
        </div>

        {/* Brief tagline */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-400 max-w-md mt-3 mb-4 text-sm"
        >
          Creating beautiful, functional web experiences with a focus on
          user-centered design and modern technologies.
        </p>

        {/* Buttons - slightly reduced */}
        <div className="mt-5 flex gap-4">
          <a
            data-aos="fade-right"
            href="#contact"
            className="px-7 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            Contact Me
          </a>
          <a
            data-aos="fade-left"
            href="/path-to-your-cv.pdf"
            download
            className="px-7 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-gray-700/20 border border-gray-600"
          >
            Download CV
          </a>
        </div>

        {/* Social Media Icons - slightly reduced */}
        <div className="flex gap-5 mt-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Telegram"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Discord"
          >
            <i className="fab fa-discord"></i>
          </a>
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

export default Hero;
