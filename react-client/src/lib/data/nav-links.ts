import { DashboardIcon } from "@radix-ui/react-icons";
import { HotelIcon, SettingsIcon, UsersIcon } from "lucide-react";
const publicRoutes = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/#contact-us" },
  { name: "FAQ", path: "/faq" },
];

const privateRoutes = [
  { name: "Profile", path: "/profile" },
  { name: "Settings", path: "/settings" },
];
const adminRoutes = [
  { name: "Dashboard", path: "/admin/dashboard", Icon: DashboardIcon },
  { name: "Users", path: "/admin/users", Icon: UsersIcon },
  { name: "Restaurants", path: "/admin/restaurants", Icon: HotelIcon },
  { name: "Settings", path: "/admin/settings", Icon: SettingsIcon },
];

export { adminRoutes, privateRoutes, publicRoutes };
