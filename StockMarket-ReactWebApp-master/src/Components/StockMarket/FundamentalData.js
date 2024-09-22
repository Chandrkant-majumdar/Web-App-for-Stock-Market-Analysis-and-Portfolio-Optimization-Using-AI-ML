import React, { useEffect } from "react";

function FundamentalData({ selectedOption }) {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
      script.async = true;
      script.innerHTML = `
        {
          "colorTheme": "light",
          "isTransparent": false,
          "largeChartUrl": "",
          "displayMode": "adaptive",
          "width": "100%",
          "height": "100%",
          "symbol": "${selectedOption}",
          "locale": "en"
        }
      `;

      const container = document.getElementById("fundamental-data");

      if (container) {
        container.innerHTML = ""; // Clear existing content
        container.appendChild(script);
      }
    };

    // Delay loading the script to ensure container is present
    const timeoutId = setTimeout(loadScript, 100);

    return () => {
      clearTimeout(timeoutId); // Clear timeout on unmount
      const container = document.getElementById("fundamental-data");
      if (container) {
        container.innerHTML = ""; // Cleanup on unmount
      }
    };
  }, [selectedOption]);

  return <section id="fundamental-data"></section>;
}

export default FundamentalData;
