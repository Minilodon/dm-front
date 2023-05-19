import React, { useState } from "react";
import { usePlayerContext } from "../../../../contexts/PlayerContext";
import { getNameFromClass } from "../../../../helpers/get-name-from-class";
import Header from "./components/Header";
import Page from "./components/Page";

function PlayerModal() {
  const { selectedPlayer } = usePlayerContext();
  const [currentPage, setCurrentPage] = useState(1);
  const playerClass = selectedPlayer?.class
    ? getNameFromClass(selectedPlayer?.class)
    : "Sem classe";
  return (
    <div className="w-[40vw] h-[80vh] flex flex-col overflow-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Page currentPage={currentPage} />
    </div>
  );
}

export default PlayerModal;
