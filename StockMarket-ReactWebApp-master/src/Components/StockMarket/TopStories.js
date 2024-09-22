import React, { useEffect } from "react";

function TopStories({ selectedOption }) {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = `
        {
          "feedMode": "symbol",
          "symbol": "${selectedOption}",
          "colorTheme": "light",
          "isTransparent": false,
          "displayMode": "regular",
          "width": "100%",
          "height": "100%",
          "locale": "en"
        }
      `;

      const container = document.getElementById("top-stories");

      if (container) {
        container.innerHTML = ""; // Clear existing content
        container.appendChild(script);
      }
    };

    // Delay loading the script to ensure container is present
    const timeoutId = setTimeout(loadScript, 100);

    return () => {
      clearTimeout(timeoutId); // Clear timeout on unmount
      const container = document.getElementById("top-stories");
      if (container) {
        container.innerHTML = ""; // Cleanup on unmount
      }
    };
  }, [selectedOption]);

  return <section id="top-stories"></section>;
}

export default TopStories;
