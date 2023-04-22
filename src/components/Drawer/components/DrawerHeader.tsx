import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDrawerContext } from "../../../contexts/DrawerContext";

interface DrawerHeaderProps {
  title: string;
}

function DrawerHeader(props: DrawerHeaderProps) {
  const { title } = props;
  const { closeDrawer } = useDrawerContext();
  return (
    <div className="flex items-center gap-4">
      <AiOutlineArrowLeft
        size={"20px"}
        cursor={"pointer"}
        onClick={closeDrawer}
      />
      <h1 className="text-xl">{title}</h1>
    </div>
  );
}

export default DrawerHeader;
