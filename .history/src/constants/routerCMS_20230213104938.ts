import type IRouter from "@/interface/IRouter";
import HomeView from "../views/cms/HomeView.vue";
const routerCMS: Array<IRouter> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];
export default routerCMS;
