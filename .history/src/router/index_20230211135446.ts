import { createRouter, createWebHistory } from "vue-router";
import CommunnityView from "../views/CommunityView.vue";
import TournamentView from "../views/TournamentView.vue";
import CommunityCreateView from "../views/CommunityCreateView.vue";
import CMSHomeView from "../views/CMSHomeView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Communnity",
      component: CommunnityView,
    },
    {
      path: "/tournament",
      name: "Tournament",
      component: TournamentView,
    },
    {
      path: "/create",
      name: "Create Communnity",
      component: CommunityCreateView,
    },
    {
      path: "/cms",
      name: "CMS",
      component: CMSHomeView,
    },
  ],
});

export default router;
