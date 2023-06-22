import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";
import { useGetAllWeaponsQuery, WeaponFragment } from "../generated/graphql";

interface WeaponsContextValues {
  loading: boolean;
  weapons: WeaponFragment[] | null;
}

interface WeaponsContextProviderProps {
  children: ReactNode;
}

const WeaponsContext = createContext({} as WeaponsContextValues);

function WeaponsContextProvider(props: WeaponsContextProviderProps) {
  const { children } = props;
  const location = useLocation();
  const { data, loading: loadingWeapons } = useGetAllWeaponsQuery();

  const weapons: WeaponFragment[] | [] = useMemo(() => {
    if (!data?.getWeapons) return [];
    return data.getWeapons;
  }, [data?.getWeapons]);

  const loading = loadingWeapons;

  const value = useMemo(
    () => ({
      loading,
      weapons,
    }),
    [loading, weapons]
  );

  return (
    <WeaponsContext.Provider value={value}>{children}</WeaponsContext.Provider>
  );
}

export function useWeaponsContext() {
  const context = useContext(WeaponsContext);

  if (!context) {
    throw new Error(
      "useWeaponsContext must be used within a WeaponsContextProvider."
    );
  }

  return context;
}

export default WeaponsContextProvider;
