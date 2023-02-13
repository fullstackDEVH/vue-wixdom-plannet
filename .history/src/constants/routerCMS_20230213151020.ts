import type IRouter from "@/interface/IRouter";
import HomeView from "../views/cms/HomeView.vue";
import CreateCommunityView from "../views/cms/CreateCommunityView.vue";

const ROUTER_CMS: Array<IRouter> = [
  {
    path: "/cms/",
    name: "home-cms",
    component: HomeView,
  },
  {
    path: "",
    name: "create-community",
    component: CreateCommunityView,
  },
];
export default ROUTER_CMS;
