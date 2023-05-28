import React from "react";
import { getPercentageValue } from "../../helpers/get-percentage-value";
import clsx from "clsx";

interface ProgressiveBarProps {
  maxValue: number | undefined;
  currentValue: number | undefined;
}

function ProgressiveBar(props: ProgressiveBarProps) {
  const { currentValue, maxValue } = props;
  const percentageValue = getPercentageValue(currentValue, maxValue);
  const color =
    percentageValue > 50
      ? "bg-green-500"
      : percentageValue < 25
      ? "bg-red-500"
      : "bg-orange-500";
  return (
    <div className="w-full relative">
      <span className="text-xs text-black absolute top-0 right-[calc(50%-16px)]">
        {currentValue}/{maxValue}
      </span>
      <div className="w-full bg-gray-300 rounded-md border border-black h-4">
        <div
          className={clsx(color, "h-[14px] rounded-md")}
          style={{ width: percentageValue.toString() + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressiveBar;
