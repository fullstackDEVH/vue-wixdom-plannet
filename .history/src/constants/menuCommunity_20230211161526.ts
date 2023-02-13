interface menuCommunityInterface {
  path: string;
  icon: string;
  name: string;
}
const menuCommunity: Array<menuCommunityInterface> = [
  {
    path: "/",
    icon: "house",
    name: "Home",
  },
  {
    path: "/calendar",
    icon: "calendar",
    name: "My events",
  },
];
export default menuCommunity;
