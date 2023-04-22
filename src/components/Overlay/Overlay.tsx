import React from "react";

interface OverlayProps {
  handleClickOverlay?: () => void;
  children?: React.ReactNode;
}

function Overlay(props: OverlayProps) {
  const { handleClickOverlay, children } = props;
  return (
    <div
      className="w-screen h-screen absolute left-0 top-0 z-10 bg-gray-500 bg-opacity-90 overflow-hidden"
      onClick={handleClickOverlay}
    >
      {children}
    </div>
  );
}

export default Overlay;
