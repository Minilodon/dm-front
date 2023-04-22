import React from "react";
import { FaBars } from "react-icons/fa";
import { clsx } from "clsx";

interface SidebarTopProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SidebarTop = (props: SidebarTopProps) => {
  const { isOpen, setIsOpen } = props;
  return (
    <div
      className={clsx(
        isOpen ? "px-5" : "px-[10px]",
        "flex items-center justify-between py-4"
      )}
    >
      {isOpen && (
        <h1 className="text-slate-100 whitespace-nowrap">DM Helper</h1>
      )}
      <div
        className="text-[18px] text-slate-100 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </div>
    </div>
  );
};

export default SidebarTop;
