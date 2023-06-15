import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { FeatFragment, useGetAllFeatsQuery } from "../generated/graphql";
import { useLocation } from "react-router-dom";
import { getPlayerIdInPathname } from "../helpers/get-player-id-in-pathname";

interface FeatsContextValues {
  loading: boolean;
  feats: FeatFragment[] | null;
}

interface FeatsContextProviderProps {
  children: ReactNode;
}

const FeatsContext = createContext({} as FeatsContextValues);

function FeatsContextProvider(props: FeatsContextProviderProps) {
  const { children } = props;
  const location = useLocation();
  const { data, loading: loadingFeats } = useGetAllFeatsQuery();

  const feats: FeatFragment[] | [] = useMemo(() => {
    if (!data?.getAllFeats) return [];
    return data.getAllFeats;
  }, [data?.getAllFeats]);

  const loading = loadingFeats;

  const value = useMemo(
    () => ({
      loading,
      feats,
    }),
    [loading, feats]
  );

  return (
    <FeatsContext.Provider value={value}>{children}</FeatsContext.Provider>
  );
}

export function useFeatsContext() {
  const context = useContext(FeatsContext);

  if (!context) {
    throw new Error(
      "useFeatsContext must be used within a FeatsContextProvider."
    );
  }

  return context;
}

export default FeatsContextProvider;
