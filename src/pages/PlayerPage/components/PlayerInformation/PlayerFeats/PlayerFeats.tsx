import clsx from "clsx";
import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import { Checkbox } from "@mui/material";

interface PlayerFeatsProps {
  currentPage: number;
}

function PlayerFeats(props: PlayerFeatsProps) {
  const { currentPage } = props;
  const { playerFeats, loading } = usePlayerContext();
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
      <ol className="w-full h-full border border-black p-4 grid grid-cols-3 gap-2">
        {loading ? (
          <span>Carregando...</span>
        ) : (
          !!playerFeats &&
          playerFeats.map((feat, index) => {
            return (
              <div
                className="w-full flex flex-col border border-black max-h-64 p-2"
                key={index}
              >
                <span className="text-base font-medium">
                  {feat.featName} ({feat.source})
                </span>
                {
                  /* feat.totalCharges */ true && (
                    <div className="flex items-center">
                      <span className="text-sm">
                        Cargas: {feat.currentCharges}/{feat.totalCharges}
                      </span>
                    </div>
                  )
                }
                <span className="flex items-center text-sm">
                  Ativa:{" "}
                  {feat.currentCharges ? <span>Sim</span> : <span>Não</span>}
                </span>
                <div className="w-full h-full border overflow-auto text-sm p-1">
                  {feat.featDescription}
                </div>
              </div>
            );
          })
        )}
      </ol>
    </div>
  );
}

export default PlayerFeats;
