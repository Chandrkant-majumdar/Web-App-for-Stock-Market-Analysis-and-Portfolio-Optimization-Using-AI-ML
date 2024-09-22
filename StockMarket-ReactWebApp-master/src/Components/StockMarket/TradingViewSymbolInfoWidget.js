import React, { useEffect } from "react";

function TradingViewSymbolInfoWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.innerHTML = JSON.stringify({
      symbol: "NASDAQ:AAPL",
      width: "100%",
      locale: "en",
      colorTheme: "light",
      isTransparent: true,
    });
    document
      .getElementsByClassName("tradingview-widget-container__widget")[0]
      .appendChild(script);

    return () => {
      document.getElementsByClassName(
        "tradingview-widget-container__widget"
      )[0].innerHTML = "";
    };
  }, []);

  return (
    <section id="symbol-info">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </section>
  );
}

export default TradingViewSymbolInfoWidget;
