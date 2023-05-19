import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import HeaderContent from "./HeaderContent";

interface HeaderProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

function Header(props: HeaderProps) {
  const { currentPage, setCurrentPage } = props;
  const handleClickLeftArrow = () => {
    if (currentPage === 1) return;
    return setCurrentPage(1);
  };
  const handleClickRightArrow = () => {
    if (currentPage === 2) return;
    return setCurrentPage(2);
  };
  return (
    <section className="w-full h-25 flex">
      <span
        className=" cursor-pointer justify-self-start self-center"
        onClick={handleClickLeftArrow}
      >
        {"<"}
      </span>

      <HeaderContent />
      <span
        className="cursor-pointer justify-self-end self-center"
        onClick={handleClickRightArrow}
      >
        {">"}
      </span>
    </section>
  );
}

export default Header;
