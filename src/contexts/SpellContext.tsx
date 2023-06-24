import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";
import { SpellFragment, useGetAllSpellsQuery } from "../generated/graphql";

interface SpellContextValues {
  loading: boolean;
  spells: SpellFragment[] | null;
}

interface SpellContextProviderProps {
  children: ReactNode;
}

const SpellContext = createContext({} as SpellContextValues);

function SpellContextProvider(props: SpellContextProviderProps) {
  const { children } = props;
  const location = useLocation();
  const { data, loading: loadingSpell } = useGetAllSpellsQuery();

  const spells: SpellFragment[] | [] = useMemo(() => {
    if (!data?.getSpells) return [];
    return data.getSpells;
  }, [data?.getSpells]);

  const loading = loadingSpell;

  const value = useMemo(
    () => ({
      loading,
      spells,
    }),
    [loading, spells]
  );

  return (
    <SpellContext.Provider value={value}>{children}</SpellContext.Provider>
  );
}

export function useSpellContext() {
  const context = useContext(SpellContext);

  if (!context) {
    throw new Error(
      "useSpellContext must be used within a SpellContextProvider."
    );
  }

  return context;
}

export default SpellContextProvider;
