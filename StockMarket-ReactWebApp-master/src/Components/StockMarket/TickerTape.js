import React, { useEffect, useRef } from "react";

function TickerTape() {
  const tickerTapeContainerRef = useRef(null);

  useEffect(() => {
    // Load TradingView script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    // Load ticker tape widget
    if (tickerTapeContainerRef.current) {
      const tickerTapeWidget = document.createElement("div");
      tickerTapeWidget.className = "tradingview-widget-container";
      tickerTapeContainerRef.current.appendChild(tickerTapeWidget);

      const tickerTapeScript = document.createElement("script");
      tickerTapeScript.type = "text/javascript";
      tickerTapeScript.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      tickerTapeScript.async = true;
      tickerTapeScript.innerHTML = `
        {
          "symbols": [
            {"description":"","proName":"NASDAQ:TSLA"},
            {"description":"","proName":"NASDAQ:AAPL"},
            {"description":"","proName":"NASDAQ:NVDA"},
            {"description":"","proName":"NASDAQ:MSFT"},
            {"description":"","proName":"NASDAQ:AMZN"},
            {"description":"","proName":"NASDAQ:GOOGL"},
            {"description":"","proName":"NASDAQ:META"},
            {"description":"","proName":"NYSE:BRK.B"},
            {"description":"","proName":"NYSE:LLY"},
            {"description":"","proName":"NYSE:UNH"},
            {"description":"","proName":"NYSE:V"},
            {"description":"","proName":"NYSE:WMT"}
          ],
          "showSymbolLogo": true,
          "colorTheme": "light",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en",
          "largeChartUrl": "#"
        }
      `;
      tickerTapeWidget.appendChild(tickerTapeScript);
    }

    return () => {
      // Remove ticker tape widget
      if (tickerTapeContainerRef.current) {
        while (tickerTapeContainerRef.current.firstChild) {
          tickerTapeContainerRef.current.removeChild(
            tickerTapeContainerRef.current.firstChild
          );
        }
      }

      // Remove TradingView script
      document.body.removeChild(script);
    };
  }, []);

  return <nav ref={tickerTapeContainerRef} id="ticker-tape"></nav>;
}

export default TickerTape;
