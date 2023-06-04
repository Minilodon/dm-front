import clsx from "clsx";
import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";

interface PlayerFeatsProps {
  currentPage: number;
}

function PlayerFeats(props: PlayerFeatsProps) {
  const { currentPage } = props;
  const display =
    currentPage === 3
      ? ""
      : currentPage === 4
      ? "-translate-x-[calc(100%+32px)]"
      : "translate-x-[calc(100%+32px)]";
  return (
    <div
      className={clsx(
        "w-full h-full transition flex flex-col absolute top-0 left-0",
        display
      )}
    >
      <section className="self-center text-lg font-semibold mb-4">
        Características e Talentos
      </section>
      <ol className="w-full h-full border border-black"></ol>
    </div>
  );
}

export default PlayerFeats;
