import React from "react";
import { useEquipmentsContext } from "../../../../contexts/EquipmentContext";
import { useModalContext } from "../../../../contexts/ModalContext";

function EquipmentList() {
  const { equipments, loading } = useEquipmentsContext();
  const { openModal, setModalContent } = useModalContext();
  return (
    <div className="w-full h-full flex flex-col px-2">
      <span className="self-center">Armaduras</span>
      <ol className="border border-black w-full h-full bg-white">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          equipments?.map((equipment, index) => {
            const handleClickItem = () => {
              setModalContent(<div>{equipment.name}</div>);
              openModal();
            };
            return (
              <li
                key={index}
                className="px-4 py-2 border-b border-black cursor-pointer"
                onClick={handleClickItem}
              >
                {equipment.name}
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
}

export default EquipmentList;
