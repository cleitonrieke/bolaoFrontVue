import { createWebHistory, createRouter } from "vue-router";
import Registrar from "@/views/Registrar.vue";
import Dashboard from "@/views/Dashboard.vue";
import GerarNumeros from "@/views/GerarNumeros.vue";
import RegistrarCartoes from "@/views/RegistrarCartoes.vue"
import ValidarResultado from "@/views/ValidarResultado.vue"
import ValidarJackpot from "@/views/ValidarJackpot.vue"

const routes = [  
  {
    path: "/",
    name: "Registrar",
    component: Registrar,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/gerarnumeros",
    name: "GerarNumeros",
    component: GerarNumeros,
  },
  {
    path: "/registrarcartoes",
    name: "RegistrarCartoes",
    component: RegistrarCartoes,
  },
  {
    path: "/validarresultado",
    name: "ValidarResultado",
    component: ValidarResultado,
  },
  {
    path: "/validarjackpot",
    name: "ValidarJackpot",
    component: ValidarJackpot,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;