<template>
  <v-app>
    <v-container class="container-wallet" fluid>
      <div class="header">
        <h1>
          Minha Carteira de Ativos
        </h1>
      </div>
      <v-row no-gutters>
        <v-col cols="4">
          <v-card class="card-wallet">
            <div class="card-wallet-header">
              <h1>Valor Total</h1>
            </div>
            <div class="card-wallet-body">
              <h1>
                U$
                {{
                  this.walletModule.valueWallet
                    ? this.walletModule.valueWallet
                    : "0.00"
                }}
              </h1>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="card-wallet">
            <div class="card-wallet-header">
              <h1>Valor em Caixa</h1>
            </div>
            <div class="card-wallet-body">
              <h1>
                U$
                {{
                  this.walletModule.valueInBox
                    ? this.walletModule.valueInBox
                    : "0.00"
                }}
              </h1>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="card-wallet">
            <div class="card-wallet-header">
              <h1>Valor em Investido</h1>
            </div>
            <div class="card-wallet-body">
              <h1>
                U$
                {{
                  this.walletModule.valueInvested
                    ? this.walletModule.valueInvested
                    : "0.00"
                }}
              </h1>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="row-assets-wallet">
        <v-col
          class="col-assets-wallet"
          cols="4"
          v-for="(asset, index) in this.walletModule.assetsWallet"
          :key="index"
        >
          <v-card class="card-asset-wallet">
            <div class="card-header-wallet">
              <h1>{{ asset.name }}</h1>
            </div>
            <div class="card-body">
              <div class="card-line">
                <h2>Valor Total:</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ asset.valueTotal }}</h2>
              </div>
              <div class="card-line">
                <h2>Quantidade Total:</h2>
                <v-spacer></v-spacer>
                <h2>{{ asset.qtdAssets }}</h2>
              </div>
              <div class="card-line">
                <h2>Preço Médio:</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ asset.valueBuy }}</h2>
              </div>
              <div class="card-line">
                <h2>Preço Atual:</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ asset.valueCurrent }}</h2>
              </div>
              <div
                :class="
                  asset.valueBuy >= asset.valueCurrent
                    ? 'card-line-green'
                    : 'card-line-red'
                "
              >
                <h2>Lucro/Prejuizo:</h2>
                <v-spacer></v-spacer>
                <h2>
                  U$
                  {{
                    (
                      (asset.valueBuy - asset.valueCurrent) *
                      asset.qtdAssets
                    ).toFixed(2)
                  }}
                </h2>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index.js";

function getAssetsAgain(to, next) {
  let valueToInvest = localStorage.getItem("valueToInvest");
  let valueInvested = localStorage.getItem("valueInvested");
  if (store.getters["cryptoAndStockModule/getCheckExistAssets"]) {
    if (valueInvested) {
      store.commit("walletModule/RECOVERY_WALLET");
      store.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then(() => {
        next();
      });
    }
    if (!valueInvested && valueToInvest) {
      store.commit("walletModule/SET_VALUES_INIT", valueToInvest);
      store.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then(() => {
        next();
      });
    }
  }
  next();
}

export default {
  data: function() {
    return {
      loading: false
    };
  },
  beforeRouteEnter(to, from, next) {
    getAssetsAgain(to, next);
  },
  computed: {
    ...mapState(["walletModule"])
  }
};
</script>

<style>
.container-wallet {
  padding: 70px 250px 70px 250px;
}

.header {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  justify-content: center;
}

.header h1 {
  font-size: 26px;
}

.card-wallet {
  border-radius: 0px !important;
  box-shadow: 3px 3px 10px #0000001c !important;
}

.card-asset-wallet {
  padding: 20px;
  border-radius: 20px !important;
  box-shadow: 3px 3px 10px #0000001c !important;
}

.card-wallet-header {
  text-align: center;
  background: #3d5af1;
  color: #fff;
  padding: 20px;
}

.card-wallet-body {
  text-align: center;
  color: #000;
  padding: 20px;
}

.row-assets-wallet {
  margin-top: 15px;
}

.card-header-wallet {
  text-align: center;
}

.card-line-green {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}

.card-line-green h2 {
  font-size: 18px;
  color: green;
}

.card-line-red {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}

.card-line-red h2 {
  font-size: 18px;
  color: red;
}
</style>
