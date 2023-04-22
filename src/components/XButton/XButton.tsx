import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

interface XButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function XButton(props: XButtonProps) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiFillCloseSquare color="red" />
    </div>
  );
}

export default XButton;
