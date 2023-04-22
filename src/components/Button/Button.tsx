import React from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const { onClick = () => {}, label, type, className, disabled } = props;
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="py-3 bg-red-600 text-md w-40 text-white hover:bg-red-800"
        type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
