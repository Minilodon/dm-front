import React from "react";
import { getModFromAttributes } from "../../helpers/get-mod-from-attributes";
import { useModalContext } from "../../contexts/ModalContext";
import EditAttrModal from "../Modals/EditAttrModal";
import { AttributesEnum, PlayerFragment } from "../../generated/graphql";
import { getAttributeName } from "../../constants/attributes";

interface AttrAndModDisplayProps {
  attributeName: AttributesEnum;
  attributeValue: number | undefined;
  player: PlayerFragment | undefined;
}

function AttrAndModDisplay(props: AttrAndModDisplayProps) {
  const { attributeName, attributeValue, player } = props;
  const modifier = getModFromAttributes(attributeValue);
  const name = getAttributeName(attributeName);
  const { openModal, setModalContent } = useModalContext();
  const handleEditAttr = () => {
    setModalContent(<EditAttrModal attr={attributeName} player={player} />);
    openModal();
  };
  return (
    <div className="flex flex-col items-center relative w-20 ml-8">
      <span className="font-semibold">{name}</span>
      <div className="border-2 border-black flex items-center justify-center w-14 h-[70px]">
        <span className="font-semibold">
          {modifier < 0 ? modifier : `+${modifier}`}
        </span>
      </div>
      <div
        className="absolute -bottom-3 w-10 h-8 border-2 border-black flex items-center justify-center rounded-3xl z-10 bg-white cursor-pointer"
        onClick={handleEditAttr}
      >
        <span className="font-semibold">{attributeValue}</span>
      </div>
    </div>
  );
}

export default AttrAndModDisplay;
