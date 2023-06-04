import clsx from "clsx";
import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";

interface PlayerMagicProps {
  currentPage: number;
}

function PlayerMagic(props: PlayerMagicProps) {
  const { currentPage } = props;
  const display = currentPage === 4 ? "" : "translate-x-[calc(100%+32px)]";
  return (
    <div
      className={clsx(
        "w-full h-full transition flex flex-col absolute top-0 left-0",
        display
      )}
    >
      <section className="self-center text-lg font-semibold mb-4">
        Magias
      </section>
      <section className="w-full flex items-center justify-around mb-4">
        <div className="flex flex-col items-center flex-1">
          <span>Atributo de conjuração</span>
          <div className="border px-8 py-2 border-black">CHA</div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span>CD para evitar magias</span>
          <div className="border px-8 py-2 border-black">14</div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span>Modificador para ataques</span>
          <div className="border px-8 py-2 border-black">+6</div>
        </div>
      </section>
      <div className="w-full h-full border border-black"></div>
    </div>
  );
}

export default PlayerMagic;
