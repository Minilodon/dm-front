import clsx from "clsx";
import React from "react";

interface Props {
  value: boolean;
  onChange: () => void;
}

function Checkbox(props: Props) {
  const { onChange, value } = props;
  return (
    <div
      onClick={() => onChange()}
      className={clsx(
        value ? "bg-red-600" : "",
        "w-5 h-5 border border-black text-white cursor-pointer flex items-center justify-center"
      )}
    >
      {value && "X"}
    </div>
  );
}

export default Checkbox;
