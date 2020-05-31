import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ativos from "../views/Ativos.vue";
import Carteira from "../views/Carteira.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ativos",
    name: "Ativos",
    component: Ativos
  },
  {
    path: "/carteira",
    name: "Carteira",
    component: Carteira
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
