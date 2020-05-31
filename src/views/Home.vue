<template>
  <v-app>
    <v-container class="container-home" fluid>
      <v-card width="700" class="card-home">
        <h1>
          A melhor ferramenta de apoio a decisão em investimentos de
          Criptomoedas e Ações
        </h1>
        <img
          class="img-home"
          width="200"
          height="auto"
          src="../assets/chart.png"
        />
        <h1>
          Informe o valor em dólar que deseja aplicar:
        </h1>
        <div class="field-value">
          <h1>U$</h1>
          <v-text-field
            class="input-value"
            filled
            :error-messages="msgWarning"
            v-model.lazy="valueToInvest"
            v-money="money"
            @focus="clearMsgWarning"
          />
          <v-btn class="btn-search" @click="search">
            <span v-show="!loading">Buscar Ativos</span>
            <v-progress-circular v-show="loading" indeterminate color="white">
            </v-progress-circular>
          </v-btn>
        </div>
        <p class="obs">
          * Com base no valor que você deseja aplicar buscaremos os melhores
          ativos do mercado para apoia-lo nessa tomada de decisão.
        </p>
      </v-card>
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
      valueToInvest: null,
      loading: false,
      money: {
        decimal: ".",
        thousands: ",",
        prefix: "",
        suffix: "",
        precision: 2,
        masked: false
      },
      msgWarning: null
    };
  },
  methods: {
    search() {
      if (this.valueToInvest != 0.0) {
        this.loading = true;
        store.commit("walletModule/SET_VALUES_INIT", this.valueToInvest);
        store
          .dispatch("cryptoAndStockModule/fetchCryptoAndStock")
          .then(() => {
            this.loading = false;
            this.$router.push({ path: "/ativos" });
          })
          .catch(error => {
            this.loading = false;
            console.log("Erro: " + error);
          });
      } else {
        this.msgWarning = "Por favor, defina um valor no campo acima!";
      }
    },
    clearMsgWarning() {
      this.msgWarning = null;
    }
  },
  beforeRouteEnter(to, from, next) {
    getAssetsAgain(to, next);
  },
  computed: {
    ...mapState(["cryptoAndStockModule", "walletModule"])
  }
};
</script>

<style>
.container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
}

.card-home {
  margin-top: 50px;
  padding: 30px;
  text-align: center;
  border-radius: 20px !important;
  box-shadow: 3px 3px 10px #0000001c !important;
}

.card-home h1 {
  font-size: 24px !important;
  margin-bottom: 20px;
}

.field-value {
  display: flex;
  flex-direction: row;
  padding: 0 20px;
}

.field-value h1 {
  margin-right: 10px;
  margin-top: 10px;
}

.btn-search {
  margin-left: 10px;
  margin-top: 4px;
  background-color: #3d5af1 !important;
  color: #fff !important;
  height: 50px !important;
}
</style>
