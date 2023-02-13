import { createRouter, createWebHistory } from "vue-router";
import { ROUTERCMS, ROUTERCOMMUNITY } from "@/constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...ROUTERCOMMUNITY, ...ROUTERCMS] as any,
});

export default router;
