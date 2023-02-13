import type IRouter from "@/interface/IRouter";
import HomeView from "../views/community/HomeView.vue";
import TournamentView from "../views/community/TournamentView.vue";

const routerCommunity: Array<IRouter> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/tournament/:id",
    name: "Tournament",
    component: TournamentView,
  },
];
export default routerCommunity;
