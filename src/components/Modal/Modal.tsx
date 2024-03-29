import React from "react";
import Overlay from "../Overlay/Overlay";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  modalContent?: React.ReactNode;
}

function Modal(props: ModalProps) {
  const { isOpen, setIsOpen, modalContent } = props;
  return (
    <>
      {isOpen ? (
        <Overlay
          modal
          handleClickOverlay={() => {
            setIsOpen(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx("bg-white z-50 p-3 rounded-sm shadow")}
          >
            <div className="h-full">
              <div className="h-full">{modalContent}</div>
            </div>
          </div>
        </Overlay>
      ) : null}
    </>
  );
}

export default Modal;
