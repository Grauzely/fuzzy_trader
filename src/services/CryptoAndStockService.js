import axios from "axios";

const API_URL =
  "https://financialmodelingprep.com/api/v3/quote/BTCUSD,XRPUSD,ETHUSD,AAPL,GOOG,AMZN,NFLX,FB,MSFT?apikey=c0078849f46492cf5769650aeda42c5b";

const apiCryptoAndStock = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getCryptoAndStock() {
    return apiCryptoAndStock.get();
  }
};
