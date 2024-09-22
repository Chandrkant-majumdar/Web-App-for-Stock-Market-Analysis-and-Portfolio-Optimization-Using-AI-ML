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
import StockBuy from "./StockBuy"; // Import StockBuy component

const items = [
  // ... (same as before)
  { id: 0, name: "AAPL" }, // Apple Inc.
  { id: 1, name: "MSFT" }, // Microsoft Corporation
  { id: 2, name: "AMZN" }, // Amazon.com Inc.
  { id: 3, name: "GOOGL" }, // Alphabet Inc. (Google) - Class A shares
  { id: 4, name: "GOOG" }, // Alphabet Inc. (Google) - Class C shares
  { id: 5, name: "FB" }, // Meta Platforms, Inc. (formerly Facebook)
  { id: 6, name: "TSLA" }, // Tesla, Inc.
  { id: 7, name: "BRK.A" }, // Berkshire Hathaway Inc. (Class A shares)
  { id: 8, name: "BRK.B" }, // Berkshire Hathaway Inc. (Class B shares)
  { id: 9, name: "JNJ" }, // Johnson & Johnson
  { id: 10, name: "JPM" }, // JPMorgan Chase & Co.
  { id: 11, name: "V" }, // Visa Inc.
  { id: 12, name: "NVDA" }, // NVIDIA Corporation
  { id: 13, name: "PG" }, // Procter & Gamble Company
  { id: 14, name: "MA" }, // Mastercard Incorporated
  { id: 15, name: "DIS" }, // The Walt Disney Company
  { id: 16, name: "HD" }, // The Home Depot, Inc.
  { id: 17, name: "UNH" }, // UnitedHealth Group Incorporated
  { id: 18, name: "PYPL" }, // PayPal Holdings, Inc.
  { id: 19, name: "ADBE" }, // Adobe Inc.
  { id: 20, name: "BABA" }, // Alibaba Group Holding Limited
  { id: 21, name: "INTC" }, // Intel Corporation
  { id: 22, name: "CRM" }, // Salesforce.com Inc.
  { id: 23, name: "NFLX" }, // Netflix, Inc.
  { id: 24, name: "CMCSA" }, // Comcast Corporation
  { id: 25, name: "KO" }, // The Coca-Cola Company
  { id: 26, name: "PEP" }, // PepsiCo, Inc.
  { id: 27, name: "CSCO" }, // Cisco Systems, Inc.
  { id: 28, name: "VZ" }, // Verizon Communications Inc.
  { id: 29, name: "MRK" }, // Merck & Co., Inc.
  { id: 30, name: "WMT" }, // Walmart Inc.
  { id: 31, name: "ABBV" }, // AbbVie Inc.
  { id: 32, name: "XOM" }, // Exxon Mobil Corporation
  { id: 33, name: "BAC" }, // Bank of America Corporation
  { id: 34, name: "ORCL" }, // Oracle Corporation
  { id: 35, name: "IBM" }, // International Business Machines Corporation
  { id: 36, name: "PFE" }, // Pfizer Inc.
  { id: 37, name: "NKE" }, // NIKE, Inc.
  { id: 38, name: "WFC" }, // Wells Fargo & Company
  { id: 39, name: "T" }, // AT&T Inc.
  { id: 40, name: "C" }, // Citigroup Inc.
];

const Main = () => {
  const [selectedOption, setSelectedOption] = useState("NASDAQ:AAPL");

  const handleOnSelect = (item) => {
    setSelectedOption(item.name);
    // console.log(item.value);
  };

  return (
    <>
      <div className="mt-32" />
      <TickerTape />
      <main>
        <div style={{ position: "relative", width: "400px" }}>
          <ReactSearchAutocomplete
            items={items}
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

        {/* Add StockBuy component here */}
        {/* <SymbolInfo selectedOption={selectedOption} /> */}
        <AdvancedChart selectedOption={selectedOption} />
        <CompanyProfile selectedOption={selectedOption} />
        <FundamentalData selectedOption={selectedOption} />
        <TopStories selectedOption={selectedOption} />
        <TechnicalAnalysis selectedOption={selectedOption} />
        {/*<PoweredByTV selectedOption={selectedOption} />*/}
        {/* <div className="flex items-center justify-center h-screen"> */}
        <StockBuy selectedOption={selectedOption} />
        {/* </div> */}
      </main>
    </>
  );
};

export default Main;
