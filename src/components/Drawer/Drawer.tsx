import React from "react";
import Overlay from "../Overlay/Overlay";
import clsx from "clsx";
import DrawerHeader from "./components/DrawerHeader";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  drawerTitle: string;
  drawerContent?: React.ReactNode;
}

function Drawer(props: DrawerProps) {
  const { isOpen, setIsOpen, drawerTitle, drawerContent } = props;
  return (
    <>
      {isOpen ? (
        <Overlay handleClickOverlay={() => setIsOpen(false)}></Overlay>
      ) : null}
      <div
        className={clsx(
          "bg-white h-screen w-1/4 top-0 right-0 fixed ease-in-out duration-300 z-20 p-8 overflow-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full">
          <DrawerHeader title={drawerTitle} />
          <div className="h-full">{drawerContent}</div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
