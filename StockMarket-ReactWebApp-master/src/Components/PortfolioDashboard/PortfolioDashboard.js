import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Box } from "@mui/system";

const PortfolioDashboard = () => {
  // Dummy portfolio data
  const dummyPortfolio = [
    {
      _id: 1,
      symbol: "AAPL",
      regularMarketPrice: 150,
      openPrice: 148,
      highPrice: 152,
      lowPrice: 147,
      quantity: 10,
    },
    {
      _id: 2,
      symbol: "GOOGL",
      regularMarketPrice: 2500,
      openPrice: 2490,
      highPrice: 2515,
      lowPrice: 2485,
      quantity: 5,
    },
    {
      _id: 3,
      symbol: "MSFT",
      regularMarketPrice: 300,
      openPrice: 298,
      highPrice: 305,
      lowPrice: 297,
      quantity: 8,
    },
    // Add more dummy data as needed
  ];

  const [portfolio, setPortfolio] = useState(dummyPortfolio);

  const getRecommendation = (stock) => {
    // Dummy recommendation logic (replace with real logic if needed)
    if (stock.regularMarketPrice > 200) {
      return "Buy";
    } else {
      return "Hold";
    }
  };

  const sellStock = (index) => {
    const updatedPortfolio = [...portfolio];
    updatedPortfolio.splice(index, 1);
    setPortfolio(updatedPortfolio);
  };

  // Calculate the total amount of loss in the portfolio
  const totalLoss = portfolio.reduce((total, stock) => {
    const loss = (stock.openPrice - stock.regularMarketPrice) * stock.quantity;
    return total + (loss > 0 ? loss : 0);
  }, 0);

  return (
    <Box sx={{ backgroundColor: "#fffff", minHeight: "100vh" }}>
      <div className="container mx-auto p-8">
        <Typography variant="subtitle1" align="center" gutterBottom>
          Total Loss: ₹{totalLoss}
        </Typography>
        <TableContainer component={Paper} className="mt-8">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell>Shares Owned</TableCell>
                <TableCell>Market Price(₹)</TableCell>
                <TableCell>Open Price(₹)</TableCell>
                <TableCell>High Price(₹)</TableCell>
                <TableCell>Low Price(₹)</TableCell>

                <TableCell>Market Value(₹)</TableCell>
                <TableCell>Recommendation</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portfolio.map((stock, index) => {
                const {
                  _id,
                  symbol,
                  regularMarketPrice,
                  openPrice,
                  highPrice,
                  lowPrice,
                  quantity,
                } = stock;
                const marketValue = quantity * regularMarketPrice;
                const change = openPrice - regularMarketPrice;
                const recommendation = getRecommendation(stock);

                return (
                  <TableRow key={_id}>
                    <TableCell>{symbol}</TableCell>
                    <TableCell>{quantity}</TableCell>
                    <TableCell>{regularMarketPrice}</TableCell>
                    <TableCell>{openPrice}</TableCell>
                    <TableCell>{highPrice}</TableCell>
                    <TableCell>{lowPrice}</TableCell>

                    <TableCell>{marketValue}</TableCell>
                    <TableCell>{recommendation}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => sellStock(index)}
                      >
                        Sell
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default PortfolioDashboard;
