import React, { useEffect } from "react";

const StockDetails = () => {
  useEffect(() => {
    function getQueryParam(param) {
      let urlSearchParams = new URLSearchParams(window.location.search);
      return urlSearchParams.get(param);
    }
    function readSymbolFromQueryString() {
      return getQueryParam("tvwidgetsymbol");
    }
    function cloneTemplateInto(templateId, targetId, rewrites) {
      const tmpl = document.getElementById(templateId);
      const target = document.getElementById(targetId);
      if (!tmpl || !target) return;

      target.innerHTML = "";
      const clone = tmpl.content.cloneNode(true);
      const script = clone.querySelector("script");
      if (script && rewrites) {
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
    <>
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
            charting & trading platform. Check out even more
            <a href="https://www.tradingview.com/features/">
              advanced features
            </a>
            or <a href="https://www.tradingview.com/widget/">grab charts</a> for
            your website.
          </p>
        </section>
      </main>

      {/* Template elements */}
      <template id="ticker-tape-widget-template">
        {/* Paste the ticker tape template content here */}
      </template>
      <template id="symbol-info-template">
        {/* Paste the symbol info template content here */}
      </template>
      <template id="advanced-chart-template">
        {/* Paste the advanced chart template content here */}
      </template>
      <template id="company-profile-template">
        {/* Paste the company profile template content here */}
      </template>
      <template id="fundamental-data-template">
        {/* Paste the fundamental data template content here */}
      </template>
      <template id="technical-analysis-template">
        {/* Paste the technical analysis template content here */}
      </template>
      <template id="top-stories-template">
        {/* Paste the top stories template content here */}
      </template>
    </>
  );
};

export default StockDetails;
