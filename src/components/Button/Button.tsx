import clsx from "clsx";
import React from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  outlined?: boolean;
}

function Button(props: ButtonProps) {
  const {
    onClick = () => {},
    label,
    type,
    className,
    disabled,
    outlined,
  } = props;
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className={clsx(
          "py-3 text-md w-40 border border-black transition",
          outlined
            ? "text-red-600 font-semibold hover:text-white hover:bg-red-800"
            : "bg-red-600 text-white hover:bg-red-800",
          disabled &&
            "cursor-not-allowed bg-slate-500 text-gray-400 hover:bg-slate-500"
        )}
        type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
