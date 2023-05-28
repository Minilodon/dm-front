import React from "react";
import ProgressiveBar from "../../../../../../components/ProgressiveBar/ProgressiveBar";

interface HitPointsDisplayProps {
  current: number | undefined;
  total: number | undefined;
  label: string;
}

function HitPointsDisplay(props: HitPointsDisplayProps) {
  const { current, label, total } = props;
  return (
    <div className="h-6 flex items-center gap-x-2 w-full pr-2">
      <span className="break-keep">{label}</span>
      <ProgressiveBar currentValue={current} maxValue={total} />
    </div>
  );
}

export default HitPointsDisplay;
