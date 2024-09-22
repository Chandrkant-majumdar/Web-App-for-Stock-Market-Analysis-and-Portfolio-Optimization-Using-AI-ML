import React, { useState, useEffect } from "react";
import Nav from "../Navbar/Navbar";
import StockMarketDashboard from "../StockMarket/StockMarketDashboard";
import PortfolioDashboard from "../PortfolioDashboard/PortfolioDashboard"; // Import PortfolioDashboard component
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const StockDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [displayStockMarketDashboard, setDisplayStockMarketDashboard] =
    useState(true);
  const { studentId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [studentId]);

  const handleMenuClick = (menuItem) => {
    switch (menuItem) {
      case "Stock Market":
        setDisplayStockMarketDashboard(true);
        break;
      case "Portfolio Management":
        setDisplayStockMarketDashboard(false);
        break;
      default:
        break;
    }
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
        <Grid container>
          <Grid item xs={12}>
            <Nav
              brandText="Stock Market"
              menuItems={[
                {
                  text: "Stock Market",
                  onClick: () => handleMenuClick("Stock Market"),
                },
                {
                  text: "Portfolio Management",
                  onClick: () => handleMenuClick("Portfolio Management"),
                },
                {
                  text: `Logout (${userData?.username})`,
                  link: "/",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="lg">
              {displayStockMarketDashboard ? (
                <StockMarketDashboard userData={userData} />
              ) : (
                <PortfolioDashboard userData={userData} />
              )}
            </Container>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default StockDashboard;
