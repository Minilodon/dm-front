import clsx from "clsx";
import React from "react";

interface IconProps {
  color?: string;
  size?: string;
  isOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

function Icon(props: IconProps) {
  const { color, isOpen, size, children, className = "" } = props;
  const iconColor = color ? `text-[${color}]` : null;
  const iconSize = size ? `text-[${size}]` : null;
  return (
    <span
      className={clsx(
        iconColor,
        iconSize,
        className,
        isOpen ? "rotate-180" : "",
        "inline-block transition font-normal leading-none text-center normal-case align-[-0.125em]"
      )}
    >
      {children}
    </span>
  );
}

export default Icon;
