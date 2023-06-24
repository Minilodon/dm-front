import React from "react";
import { FeatFragment } from "../../../generated/graphql";
import { useModalContext } from "../../../contexts/ModalContext";
import DOMPurify from "dompurify";
import DeleteFeatModal from "./DeleteFeatModal";

interface FeatCardProps {
  feat: FeatFragment;
}

function FeatCard(props: FeatCardProps) {
  const { feat } = props;
  const { openModal, setModalContent } = useModalContext();

  const handleDelete = () => {
    setModalContent(<DeleteFeatModal feat={feat} />);
    openModal();
  };

  return (
    <div className="p-4 bg-white flex flex-col min-w-[260px] shadow m-4 relative">
      <span
        className="absolute top-2 right-4 cursor-pointer text-red-500"
        onClick={handleDelete}
      >
        X
      </span>
      <span className="self-center text-lg font-semibold mb-4">
        {feat.name}
      </span>
      <div className="h-52 overflow-auto text-sm">
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(feat.description),
          }}
        ></p>
      </div>
      {feat.players && (
        <div className="flex flex-col">
          <span>Usado em:</span>
          <div className="h-10 overflow-auto">
            {feat.players.map((player, index) => (
              <div className="text-sm" key={index}>
                {player?.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeatCard;
