import Vue from "vue";
import Vuex from "vuex";
import * as cryptoAndStockModule from "@/store/modules/CryptoAndStokeModule.js";
import * as walletModule from "@/store/modules/WalletModule.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cryptoAndStockModule,
    walletModule
  }
});
