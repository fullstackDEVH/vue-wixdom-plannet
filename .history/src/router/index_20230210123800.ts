import { createRouter, createWebHistory } from "vue-router";
import CommunnityView from "../views/CommunityView.vue";
import TournamentView from "../views/TournamentView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Communnity",
      component: CommunnityView,
    },
    {
      path: "/",
      name: "Tournament",
      component: TournamentView,
    },
  ],
});

export default router;
