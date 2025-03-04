// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen flex flex-col items-center justify-center pt-20 py-16 bg-[#0f172a] text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Details (Left Column) */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Contact me
            </h3>
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-white">monineath@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-white">+855 882 906 535</p>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-white">
                Trea Village, Sangkat Steung Meanchey, Khan Meanchey, Phnom Penh
              </p>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="p-6 rounded-lg bg-gray-800 shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-4 rounded-md bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full p-4 rounded-md bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows="5"
                  className="w-full p-4 rounded-md bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
