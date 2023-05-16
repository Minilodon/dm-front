import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";

interface HeaderProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

function Header(props: HeaderProps) {
  const { currentPage, setCurrentPage } = props;
  const { selectedPlayer } = usePlayerContext();
  const handleClickLeftArrow = () => {
    if (currentPage === 1) return;
    return setCurrentPage(1);
  };
  const handleClickRightArrow = () => {
    if (currentPage === 2) return;
    return setCurrentPage(2);
  };
  return (
    <section className="w-full h-20 bg-blue-50 relative">
      {selectedPlayer?.name}
      <span
        className="absolute top-[calc(50%-12px)] -right-3 cursor-pointer"
        onClick={handleClickRightArrow}
      >
        {">"}
      </span>
      <span
        className="absolute top-[calc(50%-12px)] -left-3 cursor-pointer"
        onClick={handleClickLeftArrow}
      >
        {"<"}
      </span>
    </section>
  );
}

export default Header;
