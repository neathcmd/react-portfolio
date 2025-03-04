import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const loadingScreen = document.getElementById("loading-screen");
      if (loadingScreen) {
        loadingScreen.style.transition = "opacity 1.5s ease"; // Slower transition duration
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
          loadingScreen.style.display = "none";
          setLoading(false);
        }, 1500); // Adjusted timeout to match the transition duration
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null; // Return null after the page has loaded

  return (
    <article id="loading-screen">
      <article className="loader"></article>
    </article>
  );
};

export default LoadingScreen;
