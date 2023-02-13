import { createRouter, createWebHistory } from "vue-router";
import CommunnityView from "../views/community/CommunityView.vue";
import TournamentView from "../views/community/TournamentView.vue";
import CommunityCreateView from "../views/cms/CommunityCreateView.vue";
import CMSHomeView from "../views/cms/CMSHomeView.vue";
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
