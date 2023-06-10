import React from "react";

interface ContainerProps {
  hasIcon?: boolean;
  hasLabel?: boolean;
  width?: string;
  disabled?: boolean;
  activeLabel?: boolean;
  children: React.ReactNode;
}

function Container(props: ContainerProps) {
  const { activeLabel, disabled, hasIcon, hasLabel, width, children } = props;
  return (
    <div className="rounded-md flex items-center h-10 w-full relative bg-white">
      {children}
    </div>
  );
}

export default Container;
