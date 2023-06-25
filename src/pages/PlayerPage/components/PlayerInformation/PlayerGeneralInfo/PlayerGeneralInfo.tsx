import React from "react";
import { usePlayerContext } from "../../../../Players/contexts/PlayerContext";
import HitPointsDisplay from "./components/HitPointsDisplay";
import PlayerImage from "./components/PlayerImage";
import { Checkbox } from "@mui/material";
import ACDisplay from "./components/ACDisplay";
import InspirationDisplay from "./components/InspirationDisplay";
import MovementDisplay from "./components/MovementDisplay";
import Circle from "../../../../../components/Circle/Circle";
import { getProfBonus } from "../../../../../helpers/get-prof-bonus";
import { getNameFromClass } from "../../../../../helpers/get-name-from-class";
import { getSubclassFromClass } from "../../../../../helpers/get-subclass-from-class";
import { getNameFromRace } from "../../../../../helpers/get-name-from-race";
import { getPlayerLanguagesArray } from "../../../../../helpers/get-player-languages-array";

function PlayerGeneralInfo() {
  const { player, fetchingPlayer } = usePlayerContext();
  const playerLanguages = getPlayerLanguagesArray(player);
  return (
    <div className="flex-1 bg-white w-full h-full p-8">
      <div className="h-full w-full flex items-center">
        <div className="w-full h-full flex-1 flex flex-col">
          <HitPointsDisplay
            label="HP:"
            current={player?.currentHitPoints}
            total={player?.hitPoints}
            type="normal"
          />
          <HitPointsDisplay
            label="Extra:"
            current={player?.currentTemporaryHitPoints}
            total={player?.temporaryHitPoints}
            type="current"
          />
          <PlayerImage />
        </div>
        <div className="w-full h-full flex-1 flex flex-col pl-4">
          <section className="mb-2 self-center">Nível: {player?.level}</section>
          <section className="flex items-center justify-around w-full mb-4">
            <ACDisplay />
            <InspirationDisplay />
            <MovementDisplay />
          </section>
          <section className="flex items-center gap-x-2 mb-4">
            <Circle text={`+ ${getProfBonus(player?.level).toString()}`} />
            <p>Bônus de proficiência</p>
          </section>
          <section className="flex flex-col mb-4">
            <p className="text-lg font-semibold mb-2">Classe</p>
            <p className=" mb-2">{getNameFromClass(player?.class)}</p>
            <p className=" mb-2">{getSubclassFromClass(player?.class)}</p>
          </section>
          <section className="flex flex-col mb-4">
            <p className="text-lg font-semibold mb-2">Raça</p>
            <p className=" mb-2">{getNameFromRace(player?.race)}</p>
          </section>
          <section className="flex flex-col mb-4">
            <p className="text-lg font-semibold mb-2">Antecedente</p>
            <p className=" mb-2">Charlatão</p>
          </section>
          <section className="flex flex-col mb-4 pr-4">
            <p className="text-lg font-semibold mb-2">Idiomas</p>
            <ul className="w-full h-32 overflow-auto border border-black px-2 py-1">
              {playerLanguages.map((language, index) => {
                return (
                  <li key={index} className="mb-2">
                    {language}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PlayerGeneralInfo;
