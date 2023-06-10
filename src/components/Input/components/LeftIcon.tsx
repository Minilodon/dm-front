import React from "react";

interface LeftIconProps {
  children: React.ReactNode;
}

function LeftIcon(props: LeftIconProps) {
  const { children } = props;
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-[0.625rem]">
      {children}
    </div>
  );
}

export default LeftIcon;
