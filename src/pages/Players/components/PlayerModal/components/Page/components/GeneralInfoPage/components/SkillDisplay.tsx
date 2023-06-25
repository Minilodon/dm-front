import React from "react";
import Skill from "./Skill";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import { getModFromAttributes } from "../../../../../../../../../helpers/get-mod-from-attributes";

function SkillDisplay() {
  const { selectedPlayer } = usePlayerContext();
  return (
    <div className="w-3/4 flex-2 h-full flex flex-col p-2 ml-2 border border-black">
      <h1 className="text-lg h-fit border-b border-black self-center">
        Perícias
      </h1>
      <div className="grid grid-cols-3 h-full mt-2">
        <Skill
          skillMod={selectedPlayer?.skills?.acrobatics || 0}
          skillName="Acrobacia"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.dex)}
          skillProf={selectedPlayer?.skills?.acrobaticsProf || false}
          skillExp={selectedPlayer?.skills?.acrobaticsExp || false}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.arcana || 0}
          skillName="Arcanismo"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
          skillProf={selectedPlayer?.skills?.arcanaProf || false}
          skillExp={selectedPlayer?.skills?.arcanaExp || false}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.athletics || 0}
          skillName="Atletismo"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.str)}
          skillProf={selectedPlayer?.skills?.athleticsProf || false}
          skillExp={selectedPlayer?.skills?.athleticsExp || false}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.performance || 0}
          skillName="Atuação"
          skillProf={selectedPlayer?.skills?.perceptionProf || false}
          skillExp={selectedPlayer?.skills?.performanceExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.deception || 0}
          skillName="Enganação"
          skillProf={selectedPlayer?.skills?.deceptionProf || false}
          skillExp={selectedPlayer?.skills?.deceptionExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.stealth || 0}
          skillName="Furtividade"
          skillProf={selectedPlayer?.skills?.stealthProf || false}
          skillExp={selectedPlayer?.skills?.stealthExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.dex)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.history || 0}
          skillName="História"
          skillProf={selectedPlayer?.skills?.historyProf || false}
          skillExp={selectedPlayer?.skills?.historyExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.intimidation || 0}
          skillName="Intimidação"
          skillProf={selectedPlayer?.skills?.intimidationProf || false}
          skillExp={selectedPlayer?.skills?.intimidationExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.insight || 0}
          skillName="Intuição"
          skillProf={selectedPlayer?.skills?.insightProf || false}
          skillExp={selectedPlayer?.skills?.insightExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.investigation || 0}
          skillName="Investigação"
          skillProf={selectedPlayer?.skills?.investigationProf || false}
          skillExp={selectedPlayer?.skills?.investigationExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.animalHandling || 0}
          skillName="Lidar com Animais"
          skillProf={selectedPlayer?.skills?.animalHandlingProf || false}
          skillExp={selectedPlayer?.skills?.animalHandlingExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.medicine || 0}
          skillName="Medicina"
          skillProf={selectedPlayer?.skills?.medicineProf || false}
          skillExp={selectedPlayer?.skills?.medicineExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.nature || 0}
          skillName="Natureza"
          skillProf={selectedPlayer?.skills?.natureProf || false}
          skillExp={selectedPlayer?.skills?.natureExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.perception || 0}
          skillName="Percepção"
          skillProf={selectedPlayer?.skills?.perceptionProf || false}
          skillExp={selectedPlayer?.skills?.perceptionExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.persuasion || 0}
          skillName="Persuasão"
          skillProf={selectedPlayer?.skills?.persuasionProf || false}
          skillExp={selectedPlayer?.skills?.persuasionExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.sleightOfHand || 0}
          skillName="Prestidigitação"
          skillProf={selectedPlayer?.skills?.sleightOfHandProf || false}
          skillExp={selectedPlayer?.skills?.sleightOfHandExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.dex)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.religion || 0}
          skillName="Religião"
          skillProf={selectedPlayer?.skills?.religionProf || false}
          skillExp={selectedPlayer?.skills?.religionExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.survival || 0}
          skillName="Sobrevivência"
          skillProf={selectedPlayer?.skills?.survivalProf || false}
          skillExp={selectedPlayer?.skills?.survivalExp || false}
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
      </div>
    </div>
  );
}

export default SkillDisplay;
