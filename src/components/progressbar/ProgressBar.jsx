import React, { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      document.querySelector(".progress-bar").style.width = `${progress}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="progress-bar"></div>;
};

export default ProgressBar;
