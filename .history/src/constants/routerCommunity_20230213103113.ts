import type IRouter from "@/interface/IRouter";
import HomeView from "../views/community/HomeView.vue";
import TournamentView from "../views/community/TournamentView.vue";

const routerCommunity: IRouter = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];
export default routerCommunity;
