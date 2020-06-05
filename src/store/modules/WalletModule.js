export const namespaced = true;

function usdToDecimal(priceItem) {
  if (priceItem) {
    return parseFloat(priceItem.replace(",", ""));
  }
}

function newValuesWallet(state, valueToInvest) {
  state.valueWallet = valueToInvest;
  state.valueInBox = valueToInvest;
  state.valueToInvest = valueToInvest;
  localStorage.setItem("valueWallet", valueToInvest);
  localStorage.setItem("valueInBox", valueToInvest);
  localStorage.setItem("valueToInvest", valueToInvest);
  localStorage.removeItem("valueInvested");
  localStorage.removeItem("assetsWallet");
}

function calcValueTotal(assetWallet, position) {
  assetWallet.qtdAssets * assetWallet.valueBuy +
    state.assetsWallet[position].valueTotal;
}

function calcValueBy(assetWallet, position) {
  (assetWallet.valueBuy + state.assetsWallet[position].valueBuy) / 2;
}

function updateAssetsValueCurrent(state, cryptosAndStocks) {
  return state.assetsWallet.map(asset => {
    var cryptoOrStock = cryptosAndStocks.filter(
      cryptosAndStocks => cryptosAndStocks.symbol == asset.symbol
    );
    asset.valueCurrent = cryptoOrStock[0].price;
    return asset;
  });
}

function calcGainOrLoss(state) {
  return state.assetsWallet.reduce((total, asset) => {
    return (total += (asset.valueCurrent - asset.valueBuy) * asset.qtdAssets);
  }, 0);
}

function calcValueWalletCurrent(state) {
  return (
    state.valueInBox +
    state.assetsWallet.reduce((total, asset) => {
      return (total +=
        asset.valueTotal +
        (asset.valueCurrent - asset.valueBuy) * asset.qtdAssets);
    }, 0)
  );
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
    newValuesWallet(state, valueToInvest);
  },
  SET_VALUES_RECOVERY(state, valueToInvest) {
    newValuesWallet(state, valueToInvest);
    state.valueInvested = 0.0;
    state.assetsWallet = [];
  },
  SET_NEW_VALUE_INVEST(state, valueToInvest) {
    state.valueToInvest = state.valueToInvest + valueToInvest;
    state.valueWallet = state.valueWallet + valueToInvest;
    state.valueInBox = state.valueInBox + valueToInvest;
    localStorage.setItem("valueToInvest", state.valueToInvest);
    localStorage.setItem("valueWallet", state.valueWallet);
    localStorage.setItem("valueInBox", state.valueInBox);
  },
  RECOVERY_WALLET(state) {
    state.valueWallet = usdToDecimal(localStorage.getItem("valueWallet"));
    state.valueInBox = usdToDecimal(localStorage.getItem("valueInBox"));
    state.valueToInvest = usdToDecimal(localStorage.getItem("valueToInvest"));
    state.valueInvested = usdToDecimal(localStorage.getItem("valueInvested"));
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
    const position = state.assetsWallet.findIndex(
      assetsWallet => assetsWallet.symbol === assetWallet.symbol
    );
    if (position != -1) {
      assetWallet.valueTotal = calcValueTotal(assetWallet, position);
      assetWallet.qtdAssets += state.assetsWallet[position].qtdAssets;
      assetWallet.valueCurrent = assetWallet.valueBuy;
      assetWallet.valueBuy = calcValueBy(assetWallet, position);
      state.assetsWallet[position] = { ...assetWallet };
    } else {
      assetWallet.valueCurrent = assetWallet.valueBuy;
      assetWallet.valueTotal = assetWallet.qtdAssets * assetWallet.valueBuy;
      state.assetsWallet.push({ ...assetWallet });
    }
    state.valueInvested = state.assetsWallet.reduce(
      (valueInvested, assetsWallet) =>
        (valueInvested += assetsWallet.valueTotal)
    );
    state.valueInvested = state.assetsWallet.reduce((total, assetWallet) => {
      return (total += assetWallet.valueTotal);
    }, 0);
    state.valueInBox = state.valueWallet - state.valueInvested;

    localStorage.setItem("valueInvested", state.valueInvested);
    localStorage.setItem("valueInBox", state.valueInBox);
    localStorage.setItem("assetsWallet", JSON.stringify(state.assetsWallet));
  },
  SET_VALUE_CURRENT(state, cryptosAndStocks) {
    if (state.assetsWallet) {
      state.assetsWallet = updateAssetsValueCurrent(state, cryptosAndStocks);
      state.gainOrLoss = calcGainOrLoss(state);
      state.valueWalletCurrent = calcValueWalletCurrent(state);
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
