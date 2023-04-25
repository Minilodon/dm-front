import clsx from "clsx";
import React from "react";

interface OverlayProps {
  handleClickOverlay?: () => void;
  children?: React.ReactNode;
  modal?: boolean;
}

function Overlay(props: OverlayProps) {
  const { handleClickOverlay, children, modal = false } = props;
  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 bg-gray-500 bg-opacity-25 overflow-hidden backdrop-blur-sm",
        modal && "flex items-center justify-center"
      )}
      onClick={handleClickOverlay}
    >
      {children}
    </div>
  );
}

export default Overlay;
