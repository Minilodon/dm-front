import React from "react";
import Skill from "./Skill";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import { getModFromAttributes } from "../../../../../helpers/get-mod-from-attributes";

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
        />
        <Skill
          skillMod={selectedPlayer?.skills?.arcana || 0}
          skillName="Arcanismo"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.athletics || 0}
          skillName="Atletismo"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.str)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.performance || 0}
          skillName="Atuação"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.deception || 0}
          skillName="Enganação"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.stealth || 0}
          skillName="Furtividade"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.dex)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.history || 0}
          skillName="História"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.intimidation || 0}
          skillName="Intimidação"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.insight || 0}
          skillName="Intuição"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.investigation || 0}
          skillName="Investigação"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.animalHandling || 0}
          skillName="Lidar com Animais"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.medicine || 0}
          skillName="Medicina"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.nature || 0}
          skillName="Natureza"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.perception || 0}
          skillName="Percepção"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.persuasion || 0}
          skillName="Persuasão"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.sleightOfHand || 0}
          skillName="Prestidigitação"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.dex)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.religion || 0}
          skillName="Religião"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
        />
        <Skill
          skillMod={selectedPlayer?.skills?.survival || 0}
          skillName="Sobrevivência"
          attributeMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
        />
      </div>
    </div>
  );
}

export default SkillDisplay;
