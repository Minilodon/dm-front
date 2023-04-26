import React from "react";
import ActionCard from "./ActionCard";

interface ActionsContainerProps {
  currencyValue: number;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectedChoice: "change" | "add" | "subtract" | undefined;
  setSelectedChoice: React.Dispatch<
    React.SetStateAction<"change" | "add" | "subtract" | undefined>
  >;
}

function ActionsContainer(props: ActionsContainerProps) {
  const {
    currencyValue,
    inputValue,
    setInputValue,
    selectedChoice,
    setSelectedChoice,
  } = props;

  const handleCancel = () => {
    setInputValue("0");
    setSelectedChoice(undefined);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col mt-3">
      <span className="text-lg text-center">
        Valor atual: <b className="font-semibold">{currencyValue}</b>
      </span>
      {!selectedChoice ? (
        <div className="flex flex-col gap-y-2">
          <button
            onClick={() => setSelectedChoice("change")}
            className="border border-black hover:bg-red-800 hover:text-white transition"
          >
            Alterar valor
          </button>
          <button
            onClick={() => setSelectedChoice("add")}
            className="border border-black hover:bg-red-800 hover:text-white transition"
          >
            Adicionar
          </button>
          <button
            onClick={() => setSelectedChoice("subtract")}
            className="border border-black hover:bg-red-800 hover:text-white transition"
          >
            Subtrair
          </button>
        </div>
      ) : selectedChoice === "change" ? (
        <ActionCard
          type="change"
          handleCancel={handleCancel}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          currencyValue={currencyValue}
        />
      ) : selectedChoice === "add" ? (
        <ActionCard
          handleCancel={handleCancel}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          type="add"
          currencyValue={currencyValue}
        />
      ) : (
        <ActionCard
          handleCancel={handleCancel}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          type="subtract"
          currencyValue={currencyValue}
        />
      )}
    </div>
  );
}

export default ActionsContainer;
