import React from "react";
import { useArmorContext } from "../../../../contexts/ArmorContext";
import { useModalContext } from "../../../../contexts/ModalContext";

function ArmorsList() {
  const { armors, loading } = useArmorContext();
  const { openModal, setModalContent } = useModalContext();
  return (
    <div className="w-full h-full flex flex-col px-2">
      <span className="self-center">Armaduras</span>
      <ol className="border border-black w-full h-full bg-white">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          armors?.map((armor, index) => {
            const handleClickItem = () => {
              setModalContent(<div>{armor.name}</div>);
              openModal();
            };
            return (
              <li
                key={index}
                className="px-4 py-2 border-b border-black cursor-pointer"
                onClick={handleClickItem}
              >
                {armor.name}
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
}

export default ArmorsList;
