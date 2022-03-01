import {
  FaHome,
  FaHeart,
  FaInfo,
  FaLocationArrow,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaHeart />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaInfo />,
    cName: "nav-text",
  },
  {
    title: "Service",
    path: "/service",
    icon: <FaLocationArrow />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaLock />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <FaMobileAlt />,
    cName: "nav-text",
  },
];
