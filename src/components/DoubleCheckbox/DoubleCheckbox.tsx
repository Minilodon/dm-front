import { Tooltip } from "@mui/material";
import React from "react";
import { SkillsEnum, getSkillMutation } from "../../constants/skills";
import {
  PlayerFragment,
  UpdateSkillsInput,
  useUpdatePlayerSkillsMutation,
} from "../../generated/graphql";

interface DoubleCheckboxProps {
  biggerBoolean: boolean;
  smallerBoolean: boolean;
  skill: SkillsEnum;
  player: PlayerFragment;
}

function DoubleCheckbox(props: DoubleCheckboxProps) {
  const { smallerBoolean, biggerBoolean, skill, player } = props;
  const [updateSkill, { loading }] = useUpdatePlayerSkillsMutation({
    refetchQueries: "all",
  });
  const profKeyMutation = getSkillMutation(skill, "prof");
  const expKeyMutation = getSkillMutation(skill, "exp");
  const handleChangeProf = async () => {
    if (!player) return;
    const payload: UpdateSkillsInput = {};
    payload[profKeyMutation] = player.skills
      ? !player.skills[profKeyMutation]
      : false;
    payload[expKeyMutation] = false;
    try {
      await updateSkill({ variables: { playerId: player.id, payload } });
    } catch (error) {
      console.log("algo deu errado");
    }
  };
  const handleChangeExp = async () => {
    if (!player) return;
    const payload: UpdateSkillsInput = {};
    payload[expKeyMutation] = player.skills
      ? !player.skills[expKeyMutation]
      : false;
    payload[profKeyMutation] = true;
    try {
      await updateSkill({ variables: { playerId: player.id, payload } });
    } catch (error) {
      console.log("algo deu errado");
    }
  };
  return (
    <div className="relative">
      <Tooltip title="Proficiência">
        <div
          className="rounded-full w-4 h-4 border-2 border-black flex items-center justify-center cursor-pointer"
          onClick={handleChangeProf}
        >
          {biggerBoolean && (
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          )}
        </div>
      </Tooltip>
      <Tooltip title="Expertise">
        <div
          className="rounded-full w-3 h-3 border-2 border-black absolute -top-[6px] -left-[6px] z-10 flex items-center justify-center cursor-pointer"
          onClick={handleChangeExp}
        >
          {smallerBoolean && (
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          )}
        </div>
      </Tooltip>
    </div>
  );
}

export default DoubleCheckbox;
