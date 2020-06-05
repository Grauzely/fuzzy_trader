import store from "@/store/index.js";

function usdToDecimal(priceItem) {
  if (priceItem && typeof priceItem === "string") {
    return parseFloat(priceItem.replace(",", ""));
  }
}

function getAssetsAgain(to, next) {
  let valueToInvest = usdToDecimal(localStorage.getItem("valueToInvest"));
  let valueInvested = usdToDecimal(localStorage.getItem("valueInvested"));
  if (store.getters["cryptoAndStockModule/getCheckExistAssets"]) {
    if (valueInvested) {
      store.commit("walletModule/RECOVERY_WALLET");
      store.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then(() => {
        next();
      });
    }
    if (!valueInvested && valueToInvest) {
      store.commit("walletModule/SET_VALUES_RECOVERY", valueToInvest);
      store.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then(() => {
        next();
      });
    }
  }
  next();
}

export const mixinForAllPages = {
  methods: {
    maskUsd(value) {
      return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    getAssetsAgain(to, next);
  }
};
