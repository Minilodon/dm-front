import clsx from "clsx";
import React from "react";

interface PaperProps {
  children: React.ReactNode;
  onClick?: () => void;
  minHeight?: string;
  minWidth?: string;
  shadow?: boolean;
}
function Paper(props: PaperProps) {
  const { children, onClick, minHeight, minWidth, shadow = true } = props;
  return (
    <div
      className={clsx(
        "flex flex-col items-center bg-white p-5 justify-self-start cursor-pointer hover:scale-105 transition relative",
        minHeight && `min-h-[300px]`,
        minWidth && "min-w-80",
        shadow ? "drop-shadow-md" : ""
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Paper;
