import axios from "axios";

const API_URL =
  "https://financialmodelingprep.com/api/v3/quote/BTCUSD,XRPUSD,ETHUSD,AAPL,GOOG,AMZN,NFLX,FB,MSFT?apikey=b86b83c2321f40832df31e5a34fd571d";

const apiCryptoAndStock = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
});

export default {
  getCryptoAndStock() {
    return apiCryptoAndStock.get();
  }
};
