import type IRouter from "../interface/IRouter";
import HomeView from "../views/community/HomeView.vue";
import TournamentView from "../views/community/TournamentView.vue";

const ROUTERCOMMUNITY: Array<IRouter> = [
  {
    path: "/community/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/community/tournament/:id",
    name: "Tournament",
    component: TournamentView,
  },
];
export default ROUTERCOMMUNITY;
