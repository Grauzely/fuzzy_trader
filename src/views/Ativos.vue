<template>
  <v-app>
    <v-container class="container-assets" fluid>
      <div
        class="info-msg"
        v-if="
          this.cryptoAndStockModule.cryptosAndStocks.length == 0 &&
            !this.walletModule.valueToInvest
        "
      >
        <h1>
          Por favor, informe um valor que deseja investir, para vizualizar os
          ativos!
        </h1>
      </div>
      <div
        v-show="
          this.cryptoAndStockModule.cryptosAndStocks.length == 0 &&
            this.walletModule.valueToInvest
        "
        class="loading"
      >
        <v-progress-circular indeterminate size="50" color="#3d5af1">
        </v-progress-circular>
      </div>
      <div
        v-show="this.cryptoAndStockModule.cryptosAndStocks.length > 0"
        class="header-title"
      >
        <h1>
          Valor disponível em caixa U$
          {{
            this.walletModule.valueInBox
              ? maskUsd(this.walletModule.valueInBox)
              : "0.00"
          }}, sugerimos os seguintes ativos:
        </h1>
      </div>
      <v-alert v-if="success" dense text dismissible type="success">
        A compra de
        <strong>{{ this.wallet.qtdAssets + " " + this.wallet.symbol }}</strong>
        foi realizada com sucesso!
      </v-alert>
      <h1
        v-show="this.cryptoAndStockModule.cryptos.length != 0"
        class="body-title"
      >
        Criptomoeadas
      </h1>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          v-for="(crypto, index) in this.cryptoAndStockModule.cryptos"
          :key="index"
        >
          <v-card class="card-assets">
            <div class="card-header">
              <h1>{{ crypto.name.split(" ")[0] }}</h1>
            </div>
            <div class="card-body">
              <div class="card-line">
                <h2>1 {{ crypto.symbol.substring(0, 3) }}</h2>
                <v-spacer></v-spacer>
                <h2>
                  <v-icon
                    :class="crypto.change > 0 ? 'colorGreen' : 'colorRed'"
                    >{{
                      crypto.changesPercentage > 0
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                    }}</v-icon
                  >
                  U$ {{ crypto.price }}
                </h2>
              </div>
              <div class="card-line">
                <h2>Abertura</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ crypto.open }}</h2>
              </div>
              <div class="card-line">
                <h2>Mínima</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ crypto.dayLow }}</h2>
              </div>
              <div class="card-line">
                <h2>Máxima</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ crypto.dayHigh }}</h2>
              </div>
              <div class="card-line">
                <h2>Variação atual</h2>
                <v-spacer></v-spacer>
                <h2 :class="crypto.change > 0 ? 'colorGreen' : 'colorRed'">
                  <v-icon
                    :class="crypto.change > 0 ? 'colorGreen' : 'colorRed'"
                    >{{
                      crypto.changesPercentage > 0
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                    }}</v-icon
                  >
                  U$ {{ crypto.change }}
                </h2>
              </div>
              <div class="card-line">
                <h2>Variação Percentual</h2>
                <v-spacer></v-spacer>
                <h2 :class="crypto.change > 0 ? 'colorGreen' : 'colorRed'">
                  <v-icon
                    :class="crypto.change > 0 ? 'colorGreen' : 'colorRed'"
                    >{{
                      crypto.changesPercentage > 0
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                    }}</v-icon
                  >
                  {{ crypto.changesPercentage }} %
                </h2>
              </div>
            </div>
            <div class="card-footer">
              <v-dialog
                v-model="dialogCrypto"
                :retain-focus="false"
                persistent
                max-width="450"
              >
                <template v-slot:activator="{ on }">
                  <v-btn class="btn-add" @click="fillDialog(crypto)" v-on="on">
                    Adicionar <v-icon>mdi-wallet</v-icon>
                  </v-btn>
                </template>
                <v-card class="card-assets">
                  <div class="card-header">
                    <h1>
                      {{ wallet.name }}
                    </h1>
                  </div>
                  <div class="card-line">
                    <h2>1 {{ wallet.symbol_short }}</h2>
                    <v-spacer></v-spacer>
                    <h2>U$ {{ wallet.valueBuy }}</h2>
                  </div>
                  <div class="card-line">
                    <h2>Caixa disponível</h2>
                    <v-spacer></v-spacer>
                    <h2>U$ {{ valueAvailable }}</h2>
                  </div>
                  <div class="card-line1">
                    <h2>U$</h2>
                    <v-text-field
                      label="Quantos U$ deseja investir?"
                      class="input-invest"
                      type="number"
                      filled
                      :error-messages="msgWarning"
                      @focus="clearMsgWarning"
                      rounded
                      v-model="valueAdd"
                    />
                  </div>
                  <div class="card-line2">
                    <h2>{{ wallet.symbol_short }}</h2>
                    <v-spacer></v-spacer>
                    <h2>{{ cryptoToAdd }}</h2>
                  </div>
                  <v-card-actions class="wallet-actions">
                    <v-btn class="btn-add" color="#FFC529" @click="cancelAdd">
                      Cancelar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="btn-add"
                      color="#FFC529"
                      @click="addInWallet('crypto')"
                      >Comprar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <h1
        v-show="this.cryptoAndStockModule.stocks.length != 0"
        class="body-title"
      >
        Ações
      </h1>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="4"
          xl="4"
          v-for="(stocks, index) in this.cryptoAndStockModule.stocks"
          :key="index"
        >
          <v-card class="card-assets">
            <div class="card-header">
              <h1>{{ stocks.name }}</h1>
            </div>
            <div class="card-body">
              <div class="card-line">
                <h2>1 {{ stocks.symbol }}</h2>
                <v-spacer></v-spacer>
                <h2>
                  <v-icon
                    :class="stocks.change > 0 ? 'colorGreen' : 'colorRed'"
                    >{{
                      stocks.changesPercentage > 0
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                    }}</v-icon
                  >
                  U$ {{ stocks.price.toFixed(2) }}
                </h2>
              </div>
              <div class="card-line">
                <h2>Abertura</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ stocks.open.toFixed(2) }}</h2>
              </div>
              <div class="card-line">
                <h2>Mínima</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ stocks.dayLow.toFixed(2) }}</h2>
              </div>
              <div class="card-line">
                <h2>Máxima</h2>
                <v-spacer></v-spacer>
                <h2>U$ {{ stocks.dayHigh.toFixed(2) }}</h2>
              </div>
              <div class="card-line">
                <h2>Variação atual</h2>
                <v-spacer></v-spacer>
                <h2 :class="stocks.change > 0 ? 'colorGreen' : 'colorRed'">
                  <v-icon
                    :class="stocks.change > 0 ? 'colorGreen' : 'colorRed'"
                    >{{
                      stocks.changesPercentage > 0
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                    }}</v-icon
                  >
                  U$ {{ stocks.change.toFixed(2) }}
                </h2>
              </div>
              <div class="card-line">
                <h2>Variação Percentual</h2>
                <v-spacer></v-spacer>
                <h2 :class="stocks.change > 0 ? 'colorGreen' : 'colorRed'">
                  <v-icon
                    :class="stocks.change > 0 ? 'colorGreen' : 'colorRed'"
                    >{{
                      stocks.changesPercentage > 0
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                    }}</v-icon
                  >
                  {{ stocks.changesPercentage.toFixed(2) }} %
                </h2>
              </div>
            </div>
            <div class="card-footer">
              <v-dialog
                v-model="dialogStock"
                :retain-focus="false"
                persistent
                max-width="450"
              >
                <template v-slot:activator="{ on }">
                  <v-btn class="btn-add" @click="fillDialog(stocks)" v-on="on">
                    Adicionar <v-icon>mdi-wallet</v-icon>
                  </v-btn>
                </template>
                <v-card class="card-assets">
                  <div class="card-header">
                    <h1>
                      {{ wallet.name }}
                    </h1>
                  </div>
                  <div class="card-line">
                    <h2>1 {{ wallet.symbol }}</h2>
                    <v-spacer></v-spacer>
                    <h2>
                      {{ wallet.valueBuy }}
                    </h2>
                  </div>
                  <div class="card-line">
                    <h2>Caixa disponível</h2>
                    <v-spacer></v-spacer>
                    <h2>U$ {{ valueAvailable }}</h2>
                  </div>
                  <div class="card-line1">
                    <h2>{{ wallet.symbol }}</h2>
                    <v-text-field
                      label="Quantas ações deseja adquirir?"
                      type="number"
                      class="input-invest"
                      filled
                      :error-messages="msgWarning"
                      @focus="clearMsgWarning"
                      rounded
                      v-model="valueAdd"
                    />
                  </div>
                  <div class="card-line2">
                    <h2>U$</h2>
                    <v-spacer></v-spacer>
                    <h2>{{ stockToAdd }}</h2>
                  </div>
                  <v-card-actions class="wallet-actions">
                    <v-btn class="btn-add" color="#FFC529" @click="cancelAdd">
                      Cancelar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="btn-add"
                      color="#FFC529"
                      @click="addInWallet('stock')"
                      >Comprar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
import { mixinForAllPages } from "@/mixins/mixinForAllPages.js";

export default {
  mixins: [mixinForAllPages],
  data: function() {
    return {
      loading: false,
      success: false,
      msgWarning: null,
      dialogCrypto: null,
      dialogStock: null,
      valueAvailable: null,
      valueAdd: null,
      wallet: this.createNewWallet()
    };
  },
  methods: {
    createNewWallet() {
      return {
        name: null,
        symbol: null,
        symbol_short: null,
        valueBuy: null,
        qtdAssets: null,
        exchange: null
      };
    },
    fillDialog(asset) {
      this.wallet.name = asset.name;
      this.wallet.symbol_short = asset.symbol.substring(0, 3);
      this.wallet.symbol = asset.symbol;
      this.wallet.valueBuy = asset.price;
      this.wallet.exchange = asset.exchange;
      this.valueAvailable = this.walletModule.valueInBox;
    },
    clearMsgWarning() {
      this.msgWarning = null;
    },
    cancelAdd() {
      this.dialogCrypto = false;
      this.dialogStock = false;
      this.valueAdd = null;
      this.msgWarning = null;
      this.createNewWallet();
    },
    addInWallet(asset) {
      if (this.valueAdd > 0.0) {
        if (
          asset == "crypto" &&
          this.walletModule.valueInBox >= this.valueAdd
        ) {
          this.wallet.qtdAssets = this.cryptoToAdd;
          store.dispatch("walletModule/addAssetWallet", this.wallet);
          this.createNewWallet();
          this.valueAdd = null;
          this.dialogCrypto = false;
          this.dialogStock = false;
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 5000);
        } else if (
          asset == "stock" &&
          this.walletModule.valueInBox >= this.stockToAdd
        ) {
          this.wallet.qtdAssets = parseInt(this.valueAdd);
          store.dispatch("walletModule/addAssetWallet", this.wallet);
          this.createNewWallet();
          this.valueAdd = null;
          this.dialogCrypto = false;
          this.dialogStock = false;
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 5000);
        } else {
          this.msgWarning =
            "Não é possivel fazer a operação, saldo insuficiente!";
        }
      } else {
        this.msgWarning = "O campo acima não pode ser vazio ou negativo!";
      }
    }
  },
  computed: {
    ...mapState(["cryptoAndStockModule", "walletModule"]),
    cryptoToAdd() {
      if (this.valueAdd)
        return parseFloat(this.valueAdd) / parseFloat(this.wallet.valueBuy);
      return 0;
    },
    stockToAdd() {
      if (this.valueAdd)
        return (
          parseFloat(this.valueAdd) * parseFloat(this.wallet.valueBuy)
        ).toFixed(2);
      return 0;
    }
  }
};
</script>

<style>
.container-assets {
  padding: 70px 200px 70px 200px;
}

.info-msg {
  text-align: center;
  margin: 100px;
}

.loading {
  margin-top: 200px;
  text-align: center;
}

.body-title {
  font-size: 26px;
  font-weight: bold;
}

.header-title {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid rgb(212, 212, 212);
  margin-bottom: 20px;
  justify-content: center;
  margin: 10px 0;
}

.header-title h1 {
  font-size: 26px;
}

.btn-update {
  height: 20px;
  background-color: #3d5af1 !important;
  color: #fff !important;
  margin-top: 4px;
}

.row h1 {
  font-size: 24px;
}

.card-assets {
  padding: 20px 30px;
  border-radius: 20px !important;
  box-shadow: 3px 3px 10px #0000001c !important;
}

.card-header {
  text-align: center;
}

.card-body {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.card-line {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  border-bottom: 2px solid #dadada;
}

.card-line h2 {
  font-size: 16px;
}

.card-line h2 .v-icon.v-icon {
  margin-bottom: 5px;
}

.colorGreen {
  color: green !important;
}

.colorRed {
  color: red !important;
}

.card-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-line1 {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.card-line1 h2 {
  margin-top: 7px;
}

.card-line2 {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.card-line1 h2 {
  margin-top: 7px;
}

.input-invest {
  margin-left: 10px !important;
}

.btn-add {
  margin-top: 15px;
  font-size: 16px !important;
  background-color: #3d5af1 !important;
  color: #fff !important;
  padding: 0 30px !important;
  height: 50px !important;
}

.btn-add .v-icon.v-icon {
  font-size: 24px !important;
  margin-bottom: 4px;
  margin-left: 5px;
}

.wallet-actions {
  display: flex;
  flex-direction: row;
  padding: 0;
}
/*--------------------------------------------------------------
# Responsive Media Queries
--------------------------------------------------------------*/
@media (max-width: 991px) {
  .container-assets {
    padding: 80px 12px;
  }
  .header-title h1 {
    font-size: 24px;
  }
  .btn-add {
    padding: 0 15px !important;
  }
  .body-title {
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
