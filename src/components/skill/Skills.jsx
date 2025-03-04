import React from "react";
import "./Animation.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: (
        <svg
          data-aos="fade-up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-12 h-12 fill-blue-400 cursor-pointer"
        >
          <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      icon: (
        <svg
          data-aos="fade-up"
          data-aos-delay="200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-12 h-12 fill-blue-500 cursor-pointer"
        >
          <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg
          data-aos="fade-up"
          data-aos-delay="300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-12 h-12 fill-blue-400 cursor-pointer"
        >
          <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
        </svg>
      ),
    },
    {
      name: "Bootstrap",
      icon: (
        <svg
          data-aos="fade-up"
          data-aos-delay="400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-12 h-12 fill-blue-400 cursor-pointer"
        >
          <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg
          data-aos="fade-up"
          data-aos-delay="500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-12 h-12 fill-blue-400 cursor-pointer"
        >
          <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417C307.519 320.417 336.273 291.8 336.495 256.414C336.494 256.277 336.494 256.14 336.494 256.002C336.494 220.427 307.655 191.587 272.081 191.587H207.666V256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3785H274.161C307.655 31.3785 336.494 60.2179 336.494 95.7924C336.494 131.229 307.655 160.069 272.081 160.069H207.666V95.7924C207.666 60.2179 178.827 31.3785 144.252 31.3785H109.793Z" />
        </svg>
      ),
    },
  ];

  return (
    <div id="skills" className="w-full bg-gray-900 py-16 px-4 pt-[8em]">
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        My Skills
      </h2>

      <div className="flex justify-center flex-wrap max-w-4xl mx-auto gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transform transition-all duration-300 hover:scale-110"
          >
            <div className="mb-2 animate-float">{skill.icon}</div>
            <p className="text-gray-400 text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
