import { FaHome, FaUser } from "react-icons/fa";

export const availableRoutes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/players",
    name: "Jogadores",
    icon: <FaUser />,
  },
];
