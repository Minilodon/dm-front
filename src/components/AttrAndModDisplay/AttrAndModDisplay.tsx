import React from "react";
import { getModFromAttributes } from "../../helpers/get-mod-from-attributes";

interface AttrAndModDisplayProps {
  attributeName: string;
  attributeValue: number | undefined;
}

function AttrAndModDisplay(props: AttrAndModDisplayProps) {
  const { attributeName, attributeValue } = props;
  const modifier = getModFromAttributes(attributeValue);
  return (
    <div className="flex flex-col items-center relative w-20 ml-8 w-1/7">
      <span className="font-semibold">{attributeName}</span>
      <div className="border-2 border-black flex items-center justify-center w-14 h-[70px]">
        <span className="font-semibold">
          {modifier < 0 ? modifier : `+${modifier}`}
        </span>
      </div>
      <div className="absolute -bottom-3 w-10 h-8 border-2 border-black flex items-center justify-center rounded-3xl z-10 bg-white">
        <span className="font-semibold">{attributeValue}</span>
      </div>
    </div>
  );
}

export default AttrAndModDisplay;
