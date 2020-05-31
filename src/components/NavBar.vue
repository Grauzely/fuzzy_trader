<template>
  <div id="nav">
    <v-app-bar class="navTop" color="#0e153a" fixed dark>
      <v-toolbar-title class="brand">Fuzzy Trader</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'Home' }" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Ativos' }" icon>
        <v-icon>mdi-chart-areaspline</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Carteira' }" icon>
        <v-icon>mdi-wallet</v-icon>
      </v-btn>
      <h1>U$ {{ walletModule.valueWallet }}</h1>
    </v-app-bar>
    <v-bottom-navigation class="navBottom" v-model="bottomNav" fixed>
      <v-btn value="inicio">
        <span>Inicio</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn value="ativo">
        <span>Ativos</span>
        <v-icon>mdi-chart-areaspline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn value="carteira">
        <span>Carteira</span>
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
  computed: {
    ...mapState(["walletModule"])
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap");

.navTop {
  height: 60px;
  padding: 0 250px;
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
    display: none !important;
  }
  .navBottom {
    bottom: -1px !important;
    display: flex !important;
    padding: 0 20px;
  }
}
</style>
