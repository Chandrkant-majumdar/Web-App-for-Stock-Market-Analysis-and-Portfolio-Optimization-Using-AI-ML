const axios = require("axios");

const options = {
  method: "GET",
  url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations",
  params: { symbol: "INTC" },
  headers: {
    "X-RapidAPI-Key": "bc3f0c8cbbmshb3d598645040700p1388bejsn645f524f0836",
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
