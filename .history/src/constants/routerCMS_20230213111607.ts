import type IRouter from "@/interface/IRouter";
import HomeView from "../views/cms/HomeView.vue";
import CreateCommunityView from "../views/cms/CreateCommunityView.vue";

const ROUTERCMS: Array<IRouter> = [
  {
    path: "/cms",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/cms/create",
    name: "Create Community",
    component: CreateCommunityView,
  },
];
export default ROUTERCMS;
