// src/components/footer/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faDiscord,
  faLinkedin,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0f1621] py-12 px-8 text-center shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.facebook.com/profile.php?id=100076469475604&mibextid=JRoKGi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a
          href="https://www.linkedin.com/in/sol-monineath-95b3ba345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://t.me/dex593"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          href="https://github.com/neathcmd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-all duration-300 hover:text-blue-500 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <p className="text-gray-400 mb-4 text-sm">Personal Projects:</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://neathcmd.github.io/Personal-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm py-2 px-4 border border-[rgba(255,255,255,0.1)] rounded hover:bg-[rgba(59,130,246,0.1)] hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
          >
            Personal Portfolio Website
          </a>
          <a
            href="#"
            className="text-white text-sm py-2 px-4 border border-[rgba(255,255,255,0.1)] rounded hover:bg-[rgba(59,130,246,0.1)] hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
          >
            PHP Development
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full my-5 border-0 border-t border-[#333]" />

      {/* Footer Navigation */}
      <div className="flex items-center justify-center mb-5">
        <nav>
          <ul className="flex justify-center gap-6 list-none">
            <li>
              <a href="#hero" className="text-white hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:text-blue-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:text-blue-500">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:text-blue-500">
                Experience
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:text-blue-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blogs" className="text-white hover:text-blue-500">
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
        <p className="text-gray-400 text-sm">
          All Rights Reserved. | Created by Sal Monineath
        </p>
      </div>
    </footer>
  );
};

export default Footer;
