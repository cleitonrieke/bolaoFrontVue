import { createWebHistory, createRouter } from "vue-router";
import Registrar from "@/views/Registrar.vue";
import Dashboard from "@/views/Dashboard.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;