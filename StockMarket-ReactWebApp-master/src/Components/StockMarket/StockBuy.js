import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  IconButton,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";

const StockBuy = ({ selectedOption }) => {
  const [quantity, setQuantity] = useState(1);
  const [stockData, setStockData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedOption) return;

      setIsLoading(true);

      try {
        const options = {
          method: "GET",
          url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary",
          params: {
            symbol: selectedOption,
            region: "US",
          },
          headers: {
            "X-RapidAPI-Key":
              "bc3f0c8cbbmshb3d598645040700p1388bejsn645f524f0836",
            "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setStockData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedOption]);

  useEffect(() => {
    if (stockData) {
      const price = stockData?.price?.regularMarketPrice?.raw;
      setTotalPrice(price * quantity);
    }
  }, [quantity, stockData]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuy = async () => {
    if (!stockData) return;

    try {
      const filteredSummary = {
        symbol: stockData.symbol,
        shortName: stockData.shortName,
        regularMarketPrice: stockData.price.regularMarketPrice.raw,
        regularMarketChangePercent:
          stockData.price.regularMarketChangePercent.raw,
        postMarketPrice: stockData.price.postMarketPrice.raw,
        quantity: quantity,
      };

      await axios.post("http://localhost:8080/api/stocks", filteredSummary);
      setNotificationOpen(true);
      console.log(`Buying ${quantity} shares of ${selectedOption}`);
    } catch (error) {
      console.error("Error buying stock:", error);
    }
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box className="stock-buy-container">
      <Typography
        variant="h5"
        className="flex items-center justify-center mb-2 text-xl font-semibold text-gray-700"
      >
        Selected Stock: {selectedOption || ""}
      </Typography>
      <Typography variant="body1" className="text-center mb-4">
        Current Price: {stockData?.price?.regularMarketPrice?.raw}
      </Typography>
      <div className="flex items-center justify-center">
        <IconButton onClick={handleDecreaseQuantity} color="primary">
          <RemoveIcon sx={{ color: "rgba(0, 0, 0, 0.7)" }} />
        </IconButton>
        <Typography variant="body1" className="mx-4">
          Quantity: {quantity}
        </Typography>
        <IconButton onClick={handleIncreaseQuantity} color="primary">
          <AddIcon sx={{ color: "rgba(0, 0, 0, 0.7)" }} />
        </IconButton>
      </div>
      <Typography variant="body1" className="text-center mt-4">
        Total Price: {totalPrice}
      </Typography>
      <div className="mt-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBuy}
          startIcon={<ShoppingCartIcon />}
        >
          Buy
        </Button>
      </div>
      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        message="Stock purchased successfully!"
      />
    </Box>
  );
};

export default StockBuy;
