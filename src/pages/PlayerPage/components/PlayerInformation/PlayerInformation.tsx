import React, { useState } from "react";
import PlayerGeneralInfo from "./PlayerGeneralInfo/PlayerGeneralInfo";
import PlayerAttributesInfo from "./PlayerAttributesInfo/PlayerAttributesInfo";
import clsx from "clsx";
import PlayerInventory from "./PlayerInventory/PlayerInventory";

function PlayerInformation() {
  const [currentPage, setCurrentPage] = useState(1);
  const handleGoLeft = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleGoRight = () => {
    if (currentPage === 2) return;
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="flex items-center w-full h-full shadow">
      <PlayerGeneralInfo />
      <div className="flex-1 bg-white w-full h-full p-8 border-l-2 relative overflow-hidden">
        <span
          className="absolute top-1/2 left-2 cursor-pointer"
          onClick={handleGoLeft}
        >
          {"<"}
        </span>
        <span
          className="absolute top-1/2 right-2 cursor-pointer"
          onClick={handleGoRight}
        >
          {">"}
        </span>
        <div className="w-full h-full relative">
          <PlayerAttributesInfo currentPage={currentPage} />
          <PlayerInventory currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}

export default PlayerInformation;
