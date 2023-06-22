import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";
import { ArmorFragment, useGetAllArmorsQuery } from "../generated/graphql";

interface ArmorContextValues {
  loading: boolean;
  armors: ArmorFragment[] | null;
}

interface ArmorContextProviderProps {
  children: ReactNode;
}

const ArmorContext = createContext({} as ArmorContextValues);

function ArmorContextProvider(props: ArmorContextProviderProps) {
  const { children } = props;
  const location = useLocation();
  const { data, loading: loadingArmor } = useGetAllArmorsQuery();

  const armors: ArmorFragment[] | [] = useMemo(() => {
    if (!data?.getArmors) return [];
    return data.getArmors;
  }, [data?.getArmors]);

  const loading = loadingArmor;

  const value = useMemo(
    () => ({
      loading,
      armors,
    }),
    [loading, armors]
  );

  return (
    <ArmorContext.Provider value={value}>{children}</ArmorContext.Provider>
  );
}

export function useArmorContext() {
  const context = useContext(ArmorContext);

  if (!context) {
    throw new Error(
      "useArmorContext must be used within a ArmorContextProvider."
    );
  }

  return context;
}

export default ArmorContextProvider;
