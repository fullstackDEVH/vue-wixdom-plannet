import type IRouter from "../interface/IRouter";
import HomeViewCommunity from "../views/community/HomeView.vue";
import TournamentView from "../views/community/TournamentView.vue";

const ROUTER_COMMUNITY: Array<IRouter> = [
  {
    path: "/community",
    name: "home",
    component: HomeViewCommunity,
  },
  {
    path: "/community/tournament/:id",
    name: "tournament",
    component: TournamentView,
  },
];
export default ROUTER_COMMUNITY;
