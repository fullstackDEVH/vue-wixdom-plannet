interface menuCMSInterface {
  path: string;
  icon: string;
  name: string;
}
const menuCMS: Array<menuCMSInterface> = [
  {
    path: "/events",
    icon: "calendar",
    name: "Events",
  },
  {
    path: "/missions",
    icon: "calendar",
    name: "Missions",
  },
  {
    path: "/settings",
    icon: "calendar",
    name: "Settings",
  },
];
export default menuCMS;
