import clsx from "clsx";
import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import PlayerCurrencies from "./components/PlayerCurrencies";
import CarryingCapacity from "./components/CarryingCapacity";
import EquipmentAndProficiencies from "./components/EquipmentAndProficiencies";

interface PlayerInventoryProps {
  currentPage: number;
}

function PlayerInventory(props: PlayerInventoryProps) {
  const { currentPage } = props;
  const { player } = usePlayerContext();
  return (
    <div
      className={clsx(
        "w-full h-full transition flex flex-col",
        currentPage === 1 ? "translate-x-[calc(100%+32px)]" : ""
      )}
    >
      <section className="self-center text-lg font-semibold mb-4">
        Inventário e Proficiências
      </section>
      <div className="flex w-full">
        <div className="flex flex-col flex-1">
          <h1 className="self-center mb-2 font-semibold">Moedas</h1>
          <PlayerCurrencies
            copper={player?.currency?.copper || 0}
            elektrum={player?.currency?.elektrum || 0}
            platinum={player?.currency?.platinum || 0}
            gold={player?.currency?.gold || 0}
            silver={player?.currency?.silver || 0}
          />
        </div>
        <CarryingCapacity />
      </div>
      <EquipmentAndProficiencies />
    </div>
  );
}

export default PlayerInventory;
