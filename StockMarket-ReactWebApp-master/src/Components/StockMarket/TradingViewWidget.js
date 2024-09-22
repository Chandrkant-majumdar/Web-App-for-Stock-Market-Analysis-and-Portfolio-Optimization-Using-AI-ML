import React, { useEffect } from "react";

function TradingViewWidget() {
  useEffect(() => {
    function getQueryParam(param) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      return urlSearchParams.get(param);
    }

    function readSymbolFromQueryString() {
      return getQueryParam("tvwidgetsymbol");
    }

    function cloneTemplateInto(templateId, targetId, rewrites) {
      const tmpl = document.querySelector(`#${templateId}`);
      if (!tmpl) return;
      const target = document.querySelector(`#${targetId}`);
      if (!target) return;
      target.innerText = "";
      const clone = tmpl.content.cloneNode(true);
      if (rewrites) {
        const script = clone.querySelector("script");
        script.textContent = rewrites(script.textContent);
      }
      target.appendChild(clone);
    }

    function currentPage() {
      const l = document.location;
      if (!l) return;
      if (l.origin && l.pathname) return l.origin + l.pathname;
      return l.href;
    }

    cloneTemplateInto(
      "ticker-tape-widget-template",
      "ticker-tape",
      function (scriptContent) {
        const currentPageUrl = currentPage();
        if (!currentPageUrl) return scriptContent;
        return scriptContent.replace(
          '"largeChartUrl": "#"',
          `"largeChartUrl": "${currentPageUrl}"`
        );
      }
    );
    const symbol = readSymbolFromQueryString() || "NASDAQ:AAPL";

    function setSymbol(scriptContent) {
      return scriptContent.replace(/"symbol": "([^"]*)"/g, () => {
        return `"symbol": "${symbol}"`;
      });
    }

    cloneTemplateInto("symbol-info-template", "symbol-info", setSymbol);
    cloneTemplateInto("advanced-chart-template", "advanced-chart");
    cloneTemplateInto("company-profile-template", "company-profile", setSymbol);
    cloneTemplateInto(
      "fundamental-data-template",
      "fundamental-data",
      setSymbol
    );
    cloneTemplateInto(
      "technical-analysis-template",
      "technical-analysis",
      setSymbol
    );
    cloneTemplateInto("top-stories-template", "top-stories", setSymbol);
    if (symbol) {
      document.title = `Stock Details - ${symbol}`;
    }
  }, []);

  return (
    <div>
      <header>
        <a id="site-logo" href="#">
          TradingVista
        </a>
        <input type="search" placeholder="Search..." />
      </header>
      <nav id="ticker-tape"></nav>
      <main>
        <section id="symbol-info"></section>
        <section id="advanced-chart"></section>
        <section id="company-profile"></section>
        <section id="fundamental-data"></section>
        <section id="technical-analysis"></section>
        <section id="top-stories"></section>
        <section id="powered-by-tv">
          <svg xmlns="http://www.w3.org/2000/svg" width="157" height="21">
            <use href="/widget-docs/tradingview-logo.svg#tradingview-logo"></use>
          </svg>
          <p>
            Charts and financial information provided by TradingView, a popular
            charting & trading platform. Check out even more{" "}
            <a href="https://www.tradingview.com/features/">
              advanced features
            </a>{" "}
            or <a href="https://www.tradingview.com/widget/">grab charts</a> for
            your website.
          </p>
        </section>
      </main>
      <footer>
        <p>
          This example page is part of a tutorial for integrating TradingView
          widgets into your website.
        </p>
        <p>
          <a href="/widget-docs/tutorials/build-page/">View the tutorial</a>
        </p>
      </footer>
    </div>
  );
}

export default TradingViewWidget;
