import clsx from "clsx";
import React from "react";

interface Props {
  itemType: "weapon" | "armor" | "equipment";
  setItemType: React.Dispatch<
    React.SetStateAction<"weapon" | "armor" | "equipment">
  >;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<{
      label: string;
      id: number;
    } | null>
  >;
}

function TypeSelector(props: Props) {
  const { itemType, setItemType, setInputValue, setSelectedItem } = props;
  return (
    <div className="flex items-center w-full border border-black">
      <span
        className={clsx(
          itemType === "weapon" ? "bg-red-600 text-white" : "",
          "w-1/3 text-center border-r border-r-black py-2 hover:bg-red-600 hover:text-white cursor-pointer"
        )}
        onClick={() => {
          setInputValue("");
          setSelectedItem(null);
          setItemType("weapon");
        }}
      >
        Armas
      </span>
      <span
        className={clsx(
          itemType === "armor" ? "bg-red-600 text-white" : "",
          "w-1/3 text-center border-r border-r-black py-2 cursor-pointer hover:bg-red-600 hover:text-white"
        )}
        onClick={() => {
          setInputValue("");
          setSelectedItem(null);
          setItemType("armor");
        }}
      >
        Armaduras
      </span>
      <span
        className={clsx(
          itemType === "equipment" ? "bg-red-600 text-white" : "",
          "w-1/3 text-center py-2 cursor-pointer hover:bg-red-600 hover:text-white"
        )}
        onClick={() => {
          setInputValue("");
          setSelectedItem(null);
          setItemType("equipment");
        }}
      >
        Equipamentos
      </span>
    </div>
  );
}

export default TypeSelector;
