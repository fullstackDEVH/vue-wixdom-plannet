import HomeView from "../views/community/HomeView.vue";
import TournamentView from "../views/community/TournamentView.vue";

interface routerInterface {}

const routerCommunity = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];
export default routerCommunity;
