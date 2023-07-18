import React from "react";
import { useEquipmentsContext } from "../../contexts/EquipmentContext";
import Equipment from "./components/Equipment";

function EquipmentList() {
  const { equipments, loading } = useEquipmentsContext();
  return (
    <div className="w-full h-full flex flex-col px-2">
      <span className="self-center">Equipamentos</span>
      <ol className="border border-black w-full h-full bg-white">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          equipments?.map((equipment, index) => (
            <Equipment equipment={equipment} key={index} />
          ))
        )}
      </ol>
    </div>
  );
}

export default EquipmentList;
