import React from "react";

interface ActionCardProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  handleCancel: () => void;
  type: "change" | "add" | "subtract";
  currencyValue: number;
}

function ActionCard(props: ActionCardProps) {
  const { handleInputChange, inputValue, handleCancel, type, currencyValue } =
    props;
  return (
    <div className="flex flex-col items-center border border-black p-2">
      <span className="font-semibold">
        {type === "change"
          ? "Insira novo valor"
          : type === "add"
          ? "Adicione ao valor atual"
          : "Remova do valor atual"}
      </span>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="number"
        min={0}
        className="w-24 text-center bg-gray-100 border border-gray-500 rounded outline-none"
        max={type === "subtract" ? currencyValue : 100000}
      />
      <button
        onClick={handleCancel}
        className="border border-black hover:bg-red-800 hover:text-white transition px-5 py-1 mt-3"
      >
        Cancelar
      </button>
      <span className="font-medium">
        Novo valor:{" "}
        <b className="text-red-700 font-medium">
          {type === "add"
            ? parseInt(inputValue || "0") + currencyValue
            : type === "subtract"
            ? currencyValue - parseInt(inputValue || "0")
            : inputValue}
        </b>
      </span>
    </div>
  );
}

export default ActionCard;
