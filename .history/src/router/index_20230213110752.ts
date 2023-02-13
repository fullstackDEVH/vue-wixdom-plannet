import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ROUTERCMS, ROUTERCOMMUNITY } from "@/constants";
const routesDomain: RouteRecordRaw[] = [...ROUTERCOMMUNITY, ...ROUTERCMS];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesDomain,
});

export default router;
