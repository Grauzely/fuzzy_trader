import CryptoAndStockService from "@/services/CryptoAndStockService.js";

export const namespaced = true;

export const state = {
  cryptos: [],
  stocks: [],
  cryptosAndStocks: []
};

export const mutations = {
  SET_CRYPTOS_AND_STOCKS(state, cryptosAndStocks) {
    state.cryptosAndStocks = cryptosAndStocks;
  },
  SET_CRYPTOS(state, cryptos) {
    state.cryptos = cryptos;
  },
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  }
};

export const actions = {
  fetchCryptoAndStock({ commit, getters, dispatch }) {
    setInterval(() => {
      return CryptoAndStockService.getCryptoAndStock().then(response => {
        commit("SET_CRYPTOS_AND_STOCKS", response.data);
        dispatch("walletModule/fetchValueCurrent", response.data, {
          root: true
        });
        commit("SET_CRYPTOS", getters.getCryptos);
        commit("SET_STOCKS", getters.getStocks);
      });
    }, 2000);
  }
};

export const getters = {
  getCryptos: state => {
    return state.cryptosAndStocks.filter(
      cryptosAndStocks => cryptosAndStocks.exchange == "CRYPTO"
    );
  },
  getStocks: state => {
    return state.cryptosAndStocks.filter(
      cryptosAndStocks => cryptosAndStocks.exchange != "CRYPTO"
    );
  },
  getCheckExistAssets: state => {
    if (state.cryptosAndStocks.length == 0) return true;
    return false;
  }
};
