import React from "react";
import { useWeaponsContext } from "../../../../contexts/WeaponsContext";
import { useModalContext } from "../../../../contexts/ModalContext";

function WeaponsList() {
  const { weapons, loading } = useWeaponsContext();
  const { openModal, setModalContent } = useModalContext();
  return (
    <div className="w-full h-full flex flex-col px-2">
      <span className="self-center">Armas</span>
      <ol className="border border-black w-full h-full bg-white">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          weapons?.map((weapon, index) => {
            const handleClickItem = () => {
              setModalContent(<div>{weapon.name}</div>);
              openModal();
            };
            return (
              <li
                key={index}
                className="px-4 py-2 border-b border-black cursor-pointer"
                onClick={handleClickItem}
              >
                {weapon.name}
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
}

export default WeaponsList;
