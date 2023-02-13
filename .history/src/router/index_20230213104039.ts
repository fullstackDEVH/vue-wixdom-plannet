import { createRouter, createWebHistory } from "vue-router";
import routerCommunity from "@/constants/routerCommunity";

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
