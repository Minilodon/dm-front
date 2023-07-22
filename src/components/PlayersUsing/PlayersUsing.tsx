import { Tooltip } from "@mui/material";
import React from "react";

interface PlayersUsingProps {
  playersNames: string[];
}

function PlayersUsing(props: PlayersUsingProps) {
  const { playersNames } = props;
  return (
    <Tooltip
      title={
        <ul className="flex flex-col">
          {playersNames.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      }
    >
      <div className="flex items-center justify-center text-white bg-red-600 border border-black rounded-full w-5 h-5 text-sm font-medium">
        E
      </div>
    </Tooltip>
  );
}

export default PlayersUsing;
