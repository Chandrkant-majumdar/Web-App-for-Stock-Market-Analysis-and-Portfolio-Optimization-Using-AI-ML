import React, { useEffect } from "react";

function CompanyProfile({ selectedOption }) {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "100%",
          "colorTheme": "light",
          "isTransparent": false,
          "symbol": "${selectedOption}",
          "locale": "en"
        }
      `;

      const container = document.getElementById("company-profile");

      if (container) {
        container.innerHTML = ""; // Clear existing content
        container.appendChild(script);
      }
    };

    // Delay loading the script to ensure container is present
    const timeoutId = setTimeout(loadScript, 100);

    return () => {
      clearTimeout(timeoutId); // Clear timeout on unmount
      const container = document.getElementById("company-profile");
      if (container) {
        container.innerHTML = ""; // Cleanup on unmount
      }
    };
  }, [selectedOption]);

  return <section id="company-profile"></section>;
}

export default CompanyProfile;
