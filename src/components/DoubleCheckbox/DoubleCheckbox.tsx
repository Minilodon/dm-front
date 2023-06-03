import { Tooltip } from "@mui/material";
import React from "react";

interface DoubleCheckboxProps {
  biggerBoolean: boolean;
  smallerBoolean: boolean;
}

function DoubleCheckbox(props: DoubleCheckboxProps) {
  const { smallerBoolean, biggerBoolean } = props;
  return (
    <div className="relative">
      <Tooltip title="Proficiência">
        <div className="rounded-full w-4 h-4 border-2 border-black flex items-center justify-center cursor-pointer">
          {biggerBoolean && (
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          )}
        </div>
      </Tooltip>
      <Tooltip title="Expertise">
        <div className="rounded-full w-3 h-3 border-2 border-black absolute -top-[6px] -left-[6px] z-10 flex items-center justify-center">
          {smallerBoolean && (
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          )}
        </div>
      </Tooltip>
    </div>
  );
}

export default DoubleCheckbox;
