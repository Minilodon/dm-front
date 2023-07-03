import clsx from "clsx";
import React from "react";
import { usePlayerContext } from "../../../../../../contexts/PlayerContext";
import AttributesDisplay from "./components/AttributesDisplay";
import SkillDisplay from "./components/SkillDisplay";
import SavesDisplay from "./components/SavesDisplay";

interface GeneralInfoPageProps {
  currentPage: number;
}

function GeneralInfoPage(props: GeneralInfoPageProps) {
  const { currentPage } = props;
  return (
    <div
      className={clsx(
        "absolute top-0 right-0 w-full h-full transition flex flex-col",
        currentPage === 1 ? "" : "-translate-x-[calc(100%+12px)]"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="w-[18vw] h-[30vh] ml-3 mt-3 flex items-center shadow">
          <img
            src={selectedPlayer?.playerImageUrl || ""}
            alt="imagem do jogador"
            className="w-full h-full object-fill shadow"
          />
        </div>
        <AttributesDisplay />
      </div>
      <div className="w-full h-full flex p-3">
        <SavesDisplay />
        <SkillDisplay />
      </div>
    </div>
  );
}

export default GeneralInfoPage;
