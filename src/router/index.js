import { createWebHistory, createRouter } from "vue-router";
import Registrar from "@/views/Registrar.vue";
import Dashboard from "@/views/Dashboard.vue";
import GerarNumeros from "@/views/GerarNumeros.vue";
import RegistrarCartoes from "@/views/RegistrarCartoes.vue"
import ValidarResultado from "@/views/ValidarResultado.vue"

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;