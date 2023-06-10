import React from "react";

interface LoadingContainerProps {
  children: React.ReactNode;
}

function LoadingContainer(props: LoadingContainerProps) {
  const { children } = props;
  return <div className="block w-full">{children}</div>;
}

export default LoadingContainer;
