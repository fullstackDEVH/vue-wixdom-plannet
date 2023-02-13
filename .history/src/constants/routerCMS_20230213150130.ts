import type IRouter from "@/interface/IRouter";
import HomeView from "../views/cms/HomeView.vue";
import CreateCommunityView from "../views/cms/CreateCommunityView.vue";

const ROUTER_CMS: Array<IRouter> = [
  {
    path: "/cms/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "",
    name: "Create Community",
    component: CreateCommunityView,
  },
];
export default ROUTER_CMS;
