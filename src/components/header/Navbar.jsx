import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Close mobile menu when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".nav-links") &&
        !event.target.closest(".menu-btn")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50"
      style={{ backgroundColor: darkMode ? "#131b2e" : "#f0f4f8" }}
    >
      {/* Note: The navbar height is approximately 80px (including padding and content). 
           Ensure sections below have padding-top of at least 80px (e.g., pt-20 in Tailwind) to avoid overlap. */}
      <div className="flex items-center">
        <a
          href="/"
          className="text-2xl font-bold relative group"
          style={{ color: darkMode ? "#3d90e3" : "#1a5fb4" }}
        >
          Sal Monineath
          {/* Logo hover underline effect */}
          <div
            className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
            style={{ backgroundColor: darkMode ? "#3d90e3" : "#1a5fb4" }}
          ></div>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn block md:hidden p-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        style={{ color: darkMode ? "white" : "#333" }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16m-7 6h7"
            }
          />
        </svg>
      </button>

      {/* Nav Links */}
      <div
        className={`nav-links fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:flex md:items-center md:space-x-6 md:bg-transparent md:w-auto md:h-auto`}
        style={{ backgroundColor: darkMode ? "#131b2e" : "#f0f4f8" }}
      >
        {[
          { name: "Home", link: "#hero", id: "home" },
          { name: "About", link: "#about", id: "about" },
          { name: "Skills", link: "#skills", id: "skills" },
          { name: "Education", link: "#education", id: "education" },
          { name: "Experience", link: "#experience", id: "Experience" },
          { name: "Portfolio", link: "#portfolio", id: "portfolio" },
          { name: "Blogs", link: "#blogs", id: "blogs" },
          { name: "Contact", link: "#contact", id: "contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`nav-link relative block p-4 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-105`}
            style={{
              color:
                activeLink === item.id
                  ? darkMode
                    ? "#3d90e3"
                    : "#1a5fb4"
                  : darkMode
                  ? "white"
                  : "#333",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleNavItemClick(item.id);
              window.location.href = item.link;
            }}
          >
            {item.name}
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-all duration-300 ease-in-out ${
                activeLink === item.id ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ backgroundColor: darkMode ? "#3d90e3" : "#1a5fb4" }}
            ></div>
          </a>
        ))}

        {/* Dark Mode Toggle */}
        <div className="flex items-center p-4">
          <button
            onClick={toggleDarkMode}
            className="w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out"
            style={{ backgroundColor: darkMode ? "#1e293b" : "#e2e8f0" }}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <div
              className="w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center"
              style={{
                transform: darkMode ? "translateX(100%)" : "translateX(0)",
                backgroundColor: darkMode ? "#3d90e3" : "white",
              }}
            >
              {darkMode ? (
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
