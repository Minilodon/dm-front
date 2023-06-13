import React, { useState } from "react";
import { motion } from "framer-motion";
import { availableRoutes } from "../AppRoutes/Routes";
import { NavLink, useLocation } from "react-router-dom";
import SidebarTop from "./components/SidebarTop";
import Divider from "../../components/Divider/Divider";
import { clsx } from "clsx";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <motion.div
      animate={{ width: isOpen ? "200px" : "50px" }}
      className="bg-red-600 h-screen overflow-hidden"
    >
      <SidebarTop isOpen={isOpen} setIsOpen={setIsOpen} />
      <Divider />
      <section>
        {availableRoutes.map((route) => {
          const isActive = location.pathname === route.path;
          return (
            <NavLink
              to={route.path}
              key={route.name}
              className={clsx(
                "flex items-center justify-start py-4 gap-4 group hover:bg-slate-100 hover:border-r-8 hover:border-r-black",
                isOpen ? "px-5" : "px-4",
                isActive ? "bg-slate-100 border-r-8 border-r-black" : ""
              )}
            >
              <div
                className={clsx(
                  " group-hover:text-black",
                  isActive ? "text-black" : "text-slate-100"
                )}
              ></div>
              <span
                className={clsx(
                  " group-hover:text-black",
                  isActive ? "text-black" : "text-slate-100"
                )}
              >
                {route.name}
              </span>
            </NavLink>
          );
        })}
      </section>
    </motion.div>
  );
}

export default Sidebar;
