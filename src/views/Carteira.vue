<template>
  <v-app>
    <v-container class="container-wallet" fluid>
      <div class="header">
        <h1>
          Minha Carteira de Ativos
        </h1>
        <v-spacer></v-spacer>
        <div v-show="this.walletModule.valueWallet">
          <v-dialog
            v-model="confirmDialog"
            :retain-focus="false"
            persistent
            max-width="300"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                class="btn-clear"
                @click="confirmDialog = true"
                v-on="{ on }"
              >
                <span>Deletar</span><v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <v-card class="card-assets">
              <div class="card-confirm-header">
                <h1>
                  Todos os dados da carteira serão deletados, deseja prosseguir?
                </h1>
              </div>
              <v-card-actions class="wallet-actions">
                <v-btn
                  class="btn-confirm"
                  color="#FFC529"
                  @click="confirmDialog = false"
                >
                  Não
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="btn-confirm" color="#FFC529" @click="clearWallet"
                  >Sim
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <v-row no-gutters>
        <v-col cols="12" md="3">
          <v-card class="card-wallet">
            <div class="card-wallet-header">
              <h1>Valor Total Atual</h1>
            </div>
            <div class="card-wallet-body">
              <h1>
                U$
                {{
                  this.walletModule.valueWalletCurrent &&
                  !isNaN(this.walletModule.valueWalletCurrent)
                    ? maskUsd(this.walletModule.valueWalletCurrent)
                    : "0.00"
                }}
              </h1>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="card-wallet">
            <div class="card-wallet-header">
              <h1>Valor em Caixa</h1>
            </div>
            <div class="card-wallet-body">
              <h1>
                U$
                {{
                  this.walletModule.valueInBox
                    ? maskUsd(this.walletModule.valueInBox)
                    : "0.00"
                }}
              </h1>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="card-wallet">
            <div class="card-wallet-header">
              <h1>Valor Investido</h1>
            </div>
            <div class="card-wallet-body">
              <h1>
                U$
                {{
                  this.walletModule.valueInvested
                    ? maskUsd(this.walletModule.valueInvested)
                    : "0.00"
                }}
              </h1>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="card-wallet">
            <div class="card-wallet-header">
              <h1>Lucro/Prejuízo Total</h1>
            </div>
            <div class="card-wallet-body">
              <h1
                :class="
                  this.walletModule.gainOrLoss >= 0 ? 'colorGreen' : 'colorRed'
                "
              >
                U$
                {{
                  this.walletModule.gainOrLoss
                    ? maskUsd(this.walletModule.gainOrLoss)
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
          cols="12"
          md="4"
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
                <h2>
                  U$
                  {{ maskUsd(asset.valueTotal) }}
                </h2>
              </div>
              <div class="card-line">
                <h2>Quantidade Total:</h2>
                <v-spacer></v-spacer>
                <h2>{{ asset.qtdAssets }}</h2>
              </div>
              <div class="card-line">
                <h2>Preço Médio:</h2>
                <v-spacer></v-spacer>
                <h2>
                  U$
                  {{ asset.valueBuy }}
                </h2>
              </div>
              <div class="card-line">
                <h2>Preço Atual:</h2>
                <v-spacer></v-spacer>
                <h2>
                  U$
                  {{ asset.valueCurrent }}
                </h2>
              </div>
              <div
                :class="
                  asset.valueBuy <= asset.valueCurrent
                    ? 'card-line-green'
                    : 'card-line-red'
                "
              >
                <h2>Lucro/Prejuizo:</h2>
                <v-spacer></v-spacer>
                <h2>
                  U$
                  {{
                    maskUsd(
                      (asset.valueCurrent - asset.valueBuy) * asset.qtdAssets
                    )
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
import { mixinForAllPages } from "@/mixins/mixinForAllPages.js";

export default {
  mixins: [mixinForAllPages],
  data: function() {
    return {
      confirmDialog: false
    };
  },
  methods: {
    clearWallet() {
      store.commit("walletModule/CLEAR_WALLET");
      store.commit("cryptoAndStockModule/STOP_CALL_API", true);
      this.confirmDialog = false;
    }
  },
  computed: {
    ...mapState(["cryptoAndStockModule", "walletModule"])
  }
};
</script>

<style>
.container-wallet {
  padding: 70px 200px 70px 200px;
}

.btn-clear {
  height: 40px !important;
  background-color: #3d5af1 !important;
  color: #fff !important;
}

.btn-clear span {
  margin-top: 3px;
  font-size: 16px;
  margin-bottom: 3px;
}

.btn-clear .v-icon.v-icon {
  margin-bottom: 3px;
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

.card-confirm-header {
  text-align: center;
  font-size: 10px;
}

.btn-confirm {
  margin-top: 15px;
  font-size: 16px !important;
  padding: 0 30px !important;
  background-color: #3d5af1 !important;
  color: #fff !important;
  height: 50px !important;
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
/*--------------------------------------------------------------
# Responsive Media Queries
--------------------------------------------------------------*/
@media (max-width: 991px) {
  .container-wallet {
    padding: 80px 12px;
  }
  .header {
    flex-direction: column;
    margin: 20px 0;
    align-items: center;
  }
}
</style>
