import React from "react";

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
        <div className="flex flex-col items-center border border-black p-2">
          <span className="font-semibold">Insira novo valor</span>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            min={0}
            className="w-24 text-center bg-gray-100 border border-gray-500 rounded outline-none"
          />
          <button
            onClick={() => {
              setInputValue("0");
              setSelectedChoice(undefined);
            }}
            className="border border-black hover:bg-red-800 hover:text-white transition px-5 py-1 mt-3"
          >
            Cancelar
          </button>
          <span className="font-medium">
            Novo valor: <b className="text-red-700 font-medium">{inputValue}</b>
          </span>
        </div>
      ) : selectedChoice === "add" ? (
        <div className="flex flex-col items-center border border-black p-2">
          <span className="font-semibold">Adicione ao valor atual</span>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            min="0"
            className="w-24 text-center bg-gray-100 border border-gray-500 rounded outline-none"
          />
          <button
            onClick={() => {
              setInputValue("0");
              setSelectedChoice(undefined);
            }}
            className="border border-black hover:bg-red-800 hover:text-white transition px-5 py-1 mt-3"
          >
            Cancelar
          </button>
          <span className="font-medium">
            Novo valor:{" "}
            <b className="text-red-700 font-medium">
              {parseInt(inputValue || "0") + currencyValue}
            </b>
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center border border-black p-2">
          <span className="font-semibold">Remova do valor atual</span>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            min="0"
            max={currencyValue}
            className="w-24 text-center bg-gray-100 border border-gray-500 rounded outline-none"
          />
          <button
            onClick={() => {
              setInputValue("0");
              setSelectedChoice(undefined);
            }}
            className="border border-black hover:bg-red-800 hover:text-white transition px-5 py-1 mt-3"
          >
            Cancelar
          </button>
          <span className="font-medium">
            Novo valor:{" "}
            <b className="text-red-700 font-medium">
              {currencyValue - parseInt(inputValue || "0")}
            </b>
          </span>
        </div>
      )}
    </div>
  );
}

export default ActionsContainer;
