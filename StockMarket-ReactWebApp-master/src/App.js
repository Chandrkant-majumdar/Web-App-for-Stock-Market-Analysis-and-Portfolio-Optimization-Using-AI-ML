import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StockDashboard from "./Components/StockDashboard/StockDashboard";

import WelcomePage from "./Welcome/welcome";
import LoginPage from "././Components/Login/login";
import Registration from "./Components/Signup/Registration";

import StockMarketDashboard from "./Components/StockMarket/StockMarketDashboard";
import StockDetails from "./Components/StockMarket/StockDetails";
import Main from "./Components/StockMarket/Main";
import PortfolioDashboard from "./Components/PortfolioDashboard/PortfolioDashboard";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Stock-Dash/:studentId" element={<StockDashboard />} />

          <Route path="/Registration" element={<Registration />} />
          <Route path="/portfolio" element={<PortfolioDashboard />} />
          {/* <Route
            path="/TeacherRegistration"
            element={<TeacherRegistration />}
          /> */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
