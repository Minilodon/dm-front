import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper(props: WrapperProps) {
  const { children } = props;
  return <div className="flex flex-col w-full">{children}</div>;
}

export default Wrapper;
