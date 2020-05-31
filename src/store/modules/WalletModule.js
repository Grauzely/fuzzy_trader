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
  gainOrLoss: 0.0,
  valueWalletCurrent: 0.0,
  assetsWallet: []
};

export const mutations = {
  SET_VALUES_INIT(state, valueToInvest) {
    state.valueWallet = valueToInvest;
    state.valueInBox = valueToInvest;
    state.valueToInvest = valueToInvest;
    localStorage.setItem("valueWallet", valueToInvest);
    localStorage.setItem("valueInBox", valueToInvest);
    localStorage.setItem("valueToInvest", valueToInvest);
    localStorage.removeItem("valueInvested");
    localStorage.removeItem("assetsWallet");
  },
  SET_VALUES_RECOVERY(state, valueToInvest) {
    state.valueWallet = valueToInvest;
    state.valueInBox = valueToInvest;
    state.valueToInvest = valueToInvest;
    localStorage.setItem("valueWallet", valueToInvest);
    localStorage.setItem("valueInBox", valueToInvest);
    localStorage.setItem("valueToInvest", valueToInvest);
    localStorage.removeItem("valueInvested");
    localStorage.removeItem("assetsWallet");
    state.valueInvested = 0.0;
    state.assetsWallet = [];
  },
  SET_NEW_VALUE_INVEST(state, valueToInvest) {
    state.valueToInvest = decimalToUsd(
      usdToDecimal(state.valueToInvest) + usdToDecimal(valueToInvest)
    );
    state.valueWallet = decimalToUsd(
      usdToDecimal(state.valueWallet) + usdToDecimal(valueToInvest)
    );
    state.valueInBox = decimalToUsd(
      usdToDecimal(state.valueInBox) + usdToDecimal(valueToInvest)
    );
    localStorage.setItem("valueToInvest", state.valueToInvest);
    localStorage.setItem("valueWallet", state.valueWallet);
    localStorage.setItem("valueInBox", state.valueInBox);
  },
  RECOVERY_WALLET(state) {
    state.valueWallet = localStorage.getItem("valueWallet");
    state.valueInBox = localStorage.getItem("valueInBox");
    state.valueToInvest = localStorage.getItem("valueToInvest");
    state.valueInvested = localStorage.getItem("valueInvested");
    state.assetsWallet = JSON.parse(localStorage.getItem("assetsWallet"));
  },
  CLEAR_WALLET(state) {
    state.valueInvested = 0.0;
    state.assetsWallet = [];
    state.valueWallet = 0.0;
    state.valueInBox = 0.0;
    state.valueToInvest = 0.0;
    state.gainOrLoss - 0.0;
    state.valueWalletCurrent = 0.0;
    localStorage.removeItem("valueWallet");
    localStorage.removeItem("valueInBox");
    localStorage.removeItem("valueToInvest");
    localStorage.removeItem("valueInvested");
    localStorage.removeItem("assetsWallet");
    state.valueInvested = 0.0;
    state.assetsWallet = [];
  },
  SET_ASSET_WALLET(state, assetWallet) {
    const index = state.assetsWallet.findIndex(
      assetsWallet => assetsWallet.symbol === assetWallet.symbol
    );
    if (index != -1) {
      assetWallet.valueTotal = decimalToUsd(
        assetWallet.qtdAssets * assetWallet.valueBuy +
          usdToDecimal(state.assetsWallet[index].valueTotal)
      );

      assetWallet.qtdAssets += state.assetsWallet[index].qtdAssets;

      assetWallet.valueCurrent = assetWallet.valueBuy;

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
    if (state.assetsWallet) {
      state.assetsWallet = state.assetsWallet.map(asset => {
        var cryptoOrStock = cryptosAndStocks.filter(
          cryptosAndStocks => cryptosAndStocks.symbol == asset.symbol
        );
        asset.valueCurrent = cryptoOrStock[0].price;
        return asset;
      });
      state.gainOrLoss = state.assetsWallet.reduce((total, asset) => {
        return (total +=
          (asset.valueBuy - asset.valueCurrent) * asset.qtdAssets);
      }, 0);
      state.valueWalletCurrent = decimalToUsd(
        (
          usdToDecimal(state.valueInBox) +
          state.assetsWallet.reduce((total, asset) => {
            return (total +=
              usdToDecimal(asset.valueTotal) +
              (asset.valueBuy - asset.valueCurrent) * asset.qtdAssets);
          }, 0)
        ).toFixed(2)
      );
    }
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
