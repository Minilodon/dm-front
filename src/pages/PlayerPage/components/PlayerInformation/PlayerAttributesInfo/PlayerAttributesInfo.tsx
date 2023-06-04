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
  return (
    <div
      className={clsx(
        "w-full h-full flex flex-col absolute top-0 left-0 transition",
        currentPage === 1 ? "" : "-translate-x-[calc(100%+32px)]"
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
