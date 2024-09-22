import React, { useEffect } from "react";

function TechnicalAnalysis({ selectedOption }) {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.async = true;
      script.innerHTML = `
        {
          "interval": "15m",
          "width": "100%",
          "height": "100%",
          "isTransparent": false,
          "symbol": "${selectedOption}",
          "showIntervalTabs": true,
          "displayMode": "single",
          "locale": "en",
          "colorTheme": "light"
        }
      `;

      const container = document.getElementById("technical-analysis");

      if (container) {
        container.innerHTML = ""; // Clear existing content
        container.appendChild(script);
      }
    };

    // Delay loading the script to ensure container is present
    const timeoutId = setTimeout(loadScript, 100);

    return () => {
      clearTimeout(timeoutId); // Clear timeout on unmount
      const container = document.getElementById("technical-analysis");
      if (container) {
        container.innerHTML = ""; // Cleanup on unmount
      }
    };
  }, [selectedOption]);

  return <section id="technical-analysis"></section>;
}

export default TechnicalAnalysis;
