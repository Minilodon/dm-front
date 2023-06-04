import React from "react";
import StrengthRow from "./components/Rows/StrengthRow";
import DexterityRow from "./components/Rows/DexterityRow";
import ConstitutionRow from "./components/Rows/ConstitutionRow";
import IntelligenceRow from "./components/Rows/IntelligenceRow";
import WisdomRow from "./components/Rows/WisdomRow";
import CharismaRow from "./components/Rows/CharismaRow";
import clsx from "clsx";

interface PlayerAttributesInfoProps {
  currentPage: number;
}

function PlayerAttributesInfo(props: PlayerAttributesInfoProps) {
  const { currentPage } = props;
  const display =
    currentPage === 1
      ? ""
      : currentPage === 2
      ? "-translate-x-[calc(100%+32px)]"
      : "-translate-x-[calc(200%+64px)]";
  return (
    <div
      className={clsx(
        "w-full h-full flex flex-col absolute top-0 left-0 transition",
        display
      )}
    >
      <section className="self-center text-lg font-semibold">
        Atributos e Habilidades
      </section>
      <section className="w-full h-full flex flex-col">
        <StrengthRow />
        <DexterityRow />
        <ConstitutionRow />
        <IntelligenceRow />
        <WisdomRow />
        <CharismaRow />
      </section>
    </div>
  );
}

export default PlayerAttributesInfo;
