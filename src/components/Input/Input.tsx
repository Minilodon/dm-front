import React from "react";

interface InputProps {
  label: string;
  error?: boolean;
  errorMessage?: string;
  onChange: (...event: any[]) => void;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
}

function Input(props: InputProps) {
  const {
    error = false,
    errorMessage,
    label,
    onChange,
    type,
    disabled,
    value,
  } = props;
  return (
    <div className="flex flex-col w-full">
      <span className="text-sm">{label}</span>
      <div className="border-gray-400 border">
        <input
          onChange={onChange}
          className="w-full outline-none px-2 py-1"
          type={type}
          disabled={disabled}
          value={value}
        />
      </div>
      {error && <span className="text-red-600">{errorMessage}</span>}
    </div>
  );
}

export default Input;
