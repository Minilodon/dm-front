import { NavLink, useLocation } from "react-router-dom";
import { splitArrayInTwo } from "../../helpers/split-array-in-two";
import { availableRoutes } from "../AppRoutes/Routes";
import clsx from "clsx";

function TopBar() {
  const location = useLocation();
  return (
    <div className="bg-red-600 shadow w-full flex justify-center py-2 px-44 gap-x-8 items-center">
      {availableRoutes.map((route) => {
        const isActive = location.pathname === route.path;
        const isMain = route.path === "/";
        return (
          <NavLink
            to={route.path}
            key={route.name}
            className={clsx(
              isMain ? "text-white text-lg" : isActive ? "text-white" : ""
            )}
          >
            {route.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default TopBar;
