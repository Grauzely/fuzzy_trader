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
        <h1 v-show="!this.walletModule.valueInBox">
          Informe o valor em dólar que deseja aplicar:
        </h1>
        <h1 v-show="this.walletModule.valueInBox">
          Você tem disponível em caixa U$
          {{
            this.walletModule.valueInBox
              ? maskUsd(this.walletModule.valueInBox)
              : "0.00"
          }}, deseja adicionar mais?
        </h1>
        <div class="field-value">
          <v-row>
            <v-col class="col-field-value" cols="12" md="9">
              <h1>U$</h1>
              <v-text-field
                class="input-value"
                filled
                :error-messages="msgWarning"
                v-model.lazy="valueToInvest"
                v-money="money"
                @focus="clearMsgWarning"
              />
            </v-col>
            <v-col class="col-field-value" cols="12" md="3">
              <v-btn class="btn-search" @click="search">
                Adicionar
              </v-btn>
            </v-col>
          </v-row>
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
import { mixinForAllPages } from "@/mixins/mixinForAllPages.js";

function usdToDecimal(priceItem) {
  if (priceItem && typeof priceItem === "string") {
    return parseFloat(priceItem.replace(",", ""));
  }
}

export default {
  mixins: [mixinForAllPages],
  data: function() {
    return {
      valueToInvest: null,
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
      this.valueToInvest = usdToDecimal(this.valueToInvest);
      if (this.valueToInvest > 0.0) {
        if (this.walletModule.valueWallet) {
          store.commit("walletModule/SET_NEW_VALUE_INVEST", this.valueToInvest);
        } else {
          store.commit("walletModule/SET_VALUES_INIT", this.valueToInvest);
        }
        store.commit("cryptoAndStockModule/STOP_CALL_API", false);
        store.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then(() => {
          this.$router.push({ path: "/ativos" });
        });
      } else {
        this.msgWarning = "O campo acima não pode ser vazio ou negativo!";
      }
    },
    clearMsgWarning() {
      this.msgWarning = null;
    },
    maskUsd(value) {
      return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
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
  justify-content: center;
}

.col-field-value {
  display: flex;
  flex-direction: row;
  padding: 0;
}

.field-value h1 {
  margin-right: 10px;
  margin-top: 10px;
}

.btn-search {
  margin-top: 4px;
  margin-left: 10px;
  background-color: #3d5af1 !important;
  color: #fff !important;
  height: 50px !important;
}

/*--------------------------------------------------------------
# Responsive Media Queries
--------------------------------------------------------------*/
@media (max-width: 991px) {
  .container-home {
    padding-top: 40px;
  }
  .btn-search {
    margin-top: 4px;
    margin-left: 0px;
  }
  .col-field-value {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: center;
  }
  .obs {
    margin-top: 20px;
  }
}
</style>
