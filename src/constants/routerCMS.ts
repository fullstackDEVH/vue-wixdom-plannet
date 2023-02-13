import type IRouter from "@/interfaces/IRouter";
import HomeView from "@/views/cms/HomeView.vue";
import CreateCommunityView from "@/views/cms/CreateCommunityView.vue";

const ROUTER_CMS: Array<IRouter> = [
  {
    path: "/cms/",
    name: "home-cms",
    component: HomeView,
  },
  {
    path: "/cms/create",
    name: "create-community",
    component: CreateCommunityView,
  },
];
export default ROUTER_CMS;
