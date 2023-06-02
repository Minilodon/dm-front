import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "./components/SaveDisplay";
import SkillDisplay from "./components/SkillDisplay";
import StrengthRow from "./components/Rows/StrengthRow";
import DexterityRow from "./components/Rows/DexterityRow";
import ConstitutionRow from "./components/Rows/ConstitutionRow";
import IntelligenceRow from "./components/Rows/IntelligenceRow";
import WisdomRow from "./components/Rows/WisdomRow";
import CharismaRow from "./components/Rows/CharismaRow";

function PlayerAttributesInfo() {
  const { player } = usePlayerContext();

  return (
    <div className="flex-1 bg-white w-full h-full flex flex-col p-8 border-l-2">
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
