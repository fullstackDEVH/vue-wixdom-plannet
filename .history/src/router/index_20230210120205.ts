import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TournamentView from "../views/TournamentView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/tournament",
      name: "Tournament",
      component: TournamentView,
    },
  ],
});

export default router;
