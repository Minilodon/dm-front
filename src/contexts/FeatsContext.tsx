import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CreateFeatInput,
  FeatFragment,
  useCreateFeatMutation,
  useDeleteFeatMutation,
  useGetAllFeatsQuery,
} from "../generated/graphql";

interface FeatsContextValues {
  loading: boolean;
  feats: FeatFragment[] | null;
  createFeat: (payload: CreateFeatInput) => Promise<void>;
  deleteFeat: (featId: number) => Promise<void>;
}

interface FeatsContextProviderProps {
  children: ReactNode;
}

const FeatsContext = createContext({} as FeatsContextValues);

function FeatsContextProvider(props: FeatsContextProviderProps) {
  const { children } = props;
  const { data, loading: loadingFeats } = useGetAllFeatsQuery();

  const feats: FeatFragment[] | [] = useMemo(() => {
    if (!data?.getAllFeats) return [];
    return data.getAllFeats;
  }, [data?.getAllFeats]);

  const [createFeatMutation, { loading: creatingFeat }] = useCreateFeatMutation(
    {
      refetchQueries: "all",
    }
  );

  const [deleteFeatMutation, { loading: deletingFeat }] = useDeleteFeatMutation(
    { refetchQueries: "all" }
  );

  const loading = loadingFeats || creatingFeat || deletingFeat;

  const createFeat = useCallback(async (payload: CreateFeatInput) => {
    try {
      await createFeatMutation({ variables: { payload } });
    } catch (error) {
      throw new Error(`Algo deu errado com a criação deste talento`);
    }
  }, []);

  const deleteFeat = useCallback(async (featId: number) => {
    try {
      await deleteFeatMutation({ variables: { featId } });
    } catch (error) {
      throw new Error(`Algo deu errado ao deletar esse talento`);
    }
  }, []);

  const value = useMemo(
    () => ({
      loading,
      feats,
      createFeat,
      deleteFeat,
    }),
    [loading, feats, createFeat, deleteFeat]
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
