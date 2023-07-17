import React from "react";
import { useArmorContext } from "../../contexts/ArmorContext";
import Armor from "./components/Armor";

function ArmorsList() {
  const { armors, loading } = useArmorContext();

  return (
    <div className="w-full h-full flex flex-col px-2">
      <span className="self-center">Armaduras</span>
      <ol className="border border-black w-full h-full bg-white">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          armors?.map((armor, index) => <Armor armor={armor} key={index} />)
        )}
      </ol>
    </div>
  );
}

export default ArmorsList;
