import clsx from "clsx";
import React from "react";

interface InputContainerProps {
  children: React.ReactNode;
}

function InputContainer(props: InputContainerProps) {
  const { children } = props;
  return <div className={clsx("relative flex h-full w-full")}>{children}</div>;
}

export default InputContainer;
