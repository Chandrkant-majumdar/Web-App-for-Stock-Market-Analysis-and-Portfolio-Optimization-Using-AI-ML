import React, { useEffect, useRef } from "react";

function AdvancedChart({ selectedOption }) {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: selectedOption,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: ["STD;MACD"],
        container_id: chartContainerRef.current.id,
      });
    };

    if (chartContainerRef.current) {
      document.body.appendChild(script);
    }

    return () => {
      if (chartContainerRef.current) {
        document.body.removeChild(script);
      }
    };
  }, [selectedOption]);

  return <section id="advanced-chart" ref={chartContainerRef}></section>;
}

export default AdvancedChart;
