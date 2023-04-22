import { createContext, ReactNode, useContext, useState } from "react";
import Drawer from "../components/Drawer/Drawer";

interface DrawerContextValues {
  openDrawer: () => void;
  closeDrawer: () => void;
  setDrawerTitle: (drawerTitle: string) => void;
  setDrawerContent: React.Dispatch<React.SetStateAction<ReactNode>>;
}

interface DrawerContextProviderProps {
  children: ReactNode;
}

const DrawerContext = createContext({} as DrawerContextValues);

function DrawerContextProvider(props: DrawerContextProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [drawerContent, setDrawerContent] = useState<
    React.ReactNode | undefined
  >();

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const value = {
    openDrawer,
    closeDrawer,
    setDrawerTitle,
    setDrawerContent,
  };
  return (
    <DrawerContext.Provider value={value}>
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        drawerTitle={drawerTitle}
        drawerContent={drawerContent}
      />
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawerContext() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error(
      "useDrawerContext must be used within a DrawerContextProvider."
    );
  }

  return context;
}

export default DrawerContextProvider;
