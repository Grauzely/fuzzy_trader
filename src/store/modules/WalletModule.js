export const namespaced = true;

function decimalToUsd(priceItem) {
  if (priceItem) {
    return priceItem.toLocaleString("en-US", {
      minimumFractionDigits: 2
    });
  }
}

function usdToDecimal(priceItem) {
  if (priceItem) {
    return parseFloat(priceItem.replace(",", ""));
  }
}

export const state = {
  valueInBox: 0.0,
  valueToInvest: 0.0,
  valueWallet: 0.0,
  valueInvested: 0.0,
  assetsWallet: []
};

export const mutations = {
  SET_VALUE_INVESTED(state, valueInvested) {
    state.valueInvested = valueInvested;
  },
  SET_VALUES_INIT(state, valueToInvest) {
    state.valueWallet = valueToInvest;
    state.valueInBox = valueToInvest;
    state.valueToInvest = valueToInvest;
    localStorage.setItem("valueWallet", valueToInvest);
    localStorage.setItem("valueInBox", valueToInvest);
    localStorage.setItem("valueToInvest", valueToInvest);
    localStorage.removeItem("assetsWallet");
    state.valueInvested = 0.0;
    state.assetsWallet = [];
  },
  RECOVERY_WALLET(state) {
    state.valueWallet = localStorage.getItem("valueWallet");
    state.valueInBox = localStorage.getItem("valueInBox");
    state.valueToInvest = localStorage.getItem("valueToInvest");
    state.valueInvested = localStorage.getItem("valueInvested");
    state.assetsWallet = JSON.parse(localStorage.getItem("assetsWallet"));
  },
  SET_ASSET_WALLET(state, assetWallet) {
    const index = state.assetsWallet.findIndex(
      assetsWallet => assetsWallet.symbol === assetWallet.symbol
    );
    if (index != -1) {
      // Novo valor total
      assetWallet.valueTotal = decimalToUsd(
        assetWallet.qtdAssets * assetWallet.valueBuy +
          usdToDecimal(state.assetsWallet[index].valueTotal)
      );
      // Nova quantidade de ativos
      assetWallet.qtdAssets += state.assetsWallet[index].qtdAssets;
      // Preço atual
      assetWallet.valueCurrent = assetWallet.valueBuy;
      // Novo preço médio
      assetWallet.valueBuy =
        (assetWallet.valueBuy + state.assetsWallet[index].valueBuy) / 2;

      state.assetsWallet[index] = { ...assetWallet };
    } else {
      assetWallet.valueCurrent = assetWallet.valueBuy;
      assetWallet.valueTotal = decimalToUsd(
        assetWallet.qtdAssets * assetWallet.valueBuy
      );
      state.assetsWallet.push({ ...assetWallet });
    }

    state.valueInvested = state.assetsWallet.reduce(
      (valueInvested, assetsWallet) =>
        (valueInvested += usdToDecimal(assetsWallet.valueTotal))
    );
    state.valueInvested = decimalToUsd(
      state.assetsWallet.reduce((total, elemento) => {
        return (total += usdToDecimal(elemento.valueTotal));
      }, 0)
    );
    localStorage.setItem("valueInvested", state.valueInvested);
    state.valueInBox = decimalToUsd(
      usdToDecimal(state.valueWallet) - usdToDecimal(state.valueInvested)
    );
    localStorage.setItem(
      "valueInBox",
      state.valueInBox ? state.valueInBox : "0.00"
    );
    localStorage.setItem("assetsWallet", JSON.stringify(state.assetsWallet));
  },
  SET_VALUE_CURRENT(state, cryptosAndStocks) {
    state.assetsWallet = state.assetsWallet.map(asset => {
      var cryptoOrStock = cryptosAndStocks.filter(
        cryptosAndStocks => cryptosAndStocks.symbol == asset.symbol
      );
      asset.valueCurrent = cryptoOrStock[0].price;
      return asset;
    });
  }
};

export const actions = {
  addAssetWallet({ commit }, assetWallet) {
    commit("SET_ASSET_WALLET", assetWallet);
  },
  fetchValueCurrent({ commit }, cryptosAndStocks) {
    commit("SET_VALUE_CURRENT", cryptosAndStocks);
  }
};
