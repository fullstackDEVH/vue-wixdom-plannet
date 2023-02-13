interface menuCommunityInterface {
  path: string;
  icon: string;
  pathName: string;
}
const menuCommunity: Array<menuCommunityInterface> = [
  {
    path: "/",
    icon: "house",
    pathName: "Home",
  },
  {
    path: "/calendar",
    icon: "calendar",
    pathName: "My events",
  },
];
export default menuCommunity;
