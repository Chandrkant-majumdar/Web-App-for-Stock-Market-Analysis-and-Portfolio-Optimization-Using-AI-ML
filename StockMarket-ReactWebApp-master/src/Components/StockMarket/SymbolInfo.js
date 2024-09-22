import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import TickerTape from "./TickerTape";
import SymbolInfo from "./SymbolInfo";
import TechnicalAnalysis from "./TechnicalAnalysis";
import AdvancedChart from "./AdvancedChart";
import CompanyProfile from "./CompanyProfile";
import FundamentalData from "./FundamentalData";
import TopStories from "./TopStories";
import PoweredByTV from "./PoweredByTV";

import { symbolItems } from "./symbolData"; // Import symbolItems from symbolData.js

const Main = () => {
  const [selectedOption, setSelectedOption] = useState("NASDAQ:AAPL"); // Default selected option

  const handleOnSelect = (item) => {
    setSelectedOption(item.name);
    console.log(item.value);
  };

  return (
    <>
      <div className="mt-32" />
      <TickerTape />
      <main>
        <div style={{ position: "relative", width: "400px" }}>
          <ReactSearchAutocomplete
            items={symbolItems} // Use symbolItems from symbolData.js
            onSelect={handleOnSelect}
            autoFocus
            formatResult={(item) => <span>{item.name}</span>}
            styling={{
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              maxHeight: "200px",
              overflowY: "auto",
              position: "absolute",
              left: 0,
              top: "100%",
              zIndex: 999,
            }}
          />
        </div>
        {/* <SymbolInfo selectedOption={selectedOption} /> */}
        <AdvancedChart selectedOption={selectedOption} />
        <CompanyProfile selectedOption={selectedOption} />
        <FundamentalData selectedOption={selectedOption} />
        <TopStories selectedOption={selectedOption} />
        {/* <PoweredByTV selectedOption={selectedOption} /> */}
        <TechnicalAnalysis selectedOption={selectedOption} />
      </main>
    </>
  );
};

export default Main;
