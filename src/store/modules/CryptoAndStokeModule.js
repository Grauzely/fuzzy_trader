import CryptoAndStockService from "@/services/CryptoAndStockService.js";

export const namespaced = true;

function usdToDecimal(priceItem) {
  if (priceItem) {
    return parseFloat(priceItem.replace(",", ""));
  }
}

export const state = {
  cryptos: [],
  stocks: [],
  cryptosAndStocks: [],
  stopCallApi: false
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
  },
  CLEAR_CRYPTOS_AND_STOCKS(state) {
    state.cryptos = [];
    state.stocks = [];
    state.cryptosAndStocks = [];
  },
  STOP_CALL_API(state, opcao) {
    state.stopCallApi = opcao;
  }
};

export const actions = {
  fetchCryptoAndStock({ state, commit, getters, dispatch }) {
    var callApi = setInterval(() => {
      return CryptoAndStockService.getCryptoAndStock().then(response => {
        commit("SET_CRYPTOS_AND_STOCKS", response.data);
        dispatch("walletModule/fetchValueCurrent", response.data, {
          root: true
        });
        commit("SET_CRYPTOS", getters.getCryptos);
        commit("SET_STOCKS", getters.getStocks);
        if (state.stopCallApi) {
          clearInterval(callApi);
          commit("CLEAR_CRYPTOS_AND_STOCKS");
        }
      });
    }, 1000);
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
      cryptosAndStocks =>
        cryptosAndStocks.exchange != "CRYPTO" &&
        cryptosAndStocks.price <=
          usdToDecimal(localStorage.getItem("valueInBox"))
    );
  },
  getCheckExistAssets: state => {
    if (state.cryptosAndStocks.length == 0) return true;
    return false;
  }
};
