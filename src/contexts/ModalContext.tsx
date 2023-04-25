import { createContext, ReactNode, useContext, useState } from "react";
import Modal from "../components/Modal/Modal";

interface ModalContextValues {
  openModal: () => void;
  closeModal: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<ReactNode>>;
}

interface ModalContextProviderProps {
  children: ReactNode;
}

const ModalContext = createContext({} as ModalContextValues);

function ModalContextProvider(props: ModalContextProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<
    React.ReactNode | undefined
  >();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const value = {
    openModal,
    closeModal,
    setModalContent,
  };
  return (
    <ModalContext.Provider value={value}>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={modalContent}
      />
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider."
    );
  }

  return context;
}

export default ModalContextProvider;
