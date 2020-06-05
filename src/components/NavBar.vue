<template>
  <div id="nav">
    <v-app-bar class="navTop" color="#0e153a" fixed dark>
      <v-toolbar-title class="brand">Fuzzy Trader</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="btn-nav">
        <v-btn :to="{ name: 'Home' }" icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn :to="{ name: 'Ativos' }" icon>
          <v-icon>mdi-chart-areaspline</v-icon>
        </v-btn>

        <v-btn :to="{ name: 'Carteira' }" icon>
          <v-icon>mdi-wallet</v-icon>
        </v-btn>
      </div>

      <h1
        v-if="
          this.walletModule.valueWalletCurrent &&
            !isNaN(this.walletModule.valueWalletCurrent)
        "
      >
        U$
        {{ maskUsd(this.walletModule.valueWalletCurrent) }}
      </h1>
      <h1 v-else>
        U$ 0.00
      </h1>
    </v-app-bar>
    <v-bottom-navigation
      class="navBottom"
      v-model="bottomNav"
      color="#fff"
      dark
      fixed
    >
      <v-btn :to="{ name: 'Home' }" value="inicio">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'Ativos' }" value="ativo">
        <v-icon>mdi-chart-areaspline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'Carteira' }" value="carteira">
        <v-icon>mdi-wallet</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      bottomNav: "1"
    };
  },
  methods: {
    maskUsd(value) {
      return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  },
  computed: {
    ...mapState(["walletModule"])
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap");

.navTop {
  height: 60px;
  padding: 0 200px;
}

.navBottom {
  display: none !important;
}

.brand {
  font-family: "Baloo 2", cursive;
  font-weight: 600;
  font-size: 40px !important;
  color: #fff;
  text-decoration: none;
}

.navTop h1 {
  font-size: 25px !important;
}

.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
  opacity: 0 !important;
}

/*--------------------------------------------------------------
# Responsive Media Queries
--------------------------------------------------------------*/
@media (max-width: 991px) {
  .navTop {
    height: 80px !important;
    padding: 10px 0;
  }
  .navTop h1 {
    font-size: 20px !important;
  }
  .brand {
    font-size: 25px !important;
  }
  .btn-nav {
    display: none !important;
  }
  .navBottom {
    bottom: -1px !important;
    display: flex !important;
    padding: 10px 20px;
    height: 60px !important;
    background-color: #0e153a !important;
  }
}
</style>
