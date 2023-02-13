import { createRouter, createWebHistory } from "vue-router";
// import CommunnityView from "../views/CommunityView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: CommunnityView,
    // },
  ],
});

export default router;
