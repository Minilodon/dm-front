import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import {
  CreatePlayerInput,
  PlayerFragment,
  useCreatePlayerMutation,
  useGetAllPlayersQuery,
} from "../generated/graphql";
import { useToast } from "./ToastContext";

interface PlayerContextValues {
  loading: boolean;
  players: PlayerFragment[] | null;
  createPlayer: (payload: CreatePlayerInput) => Promise<void>;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextValues);

function PlayerContextProvider(props: PlayerContextProviderProps) {
  const { children } = props;
  const { addToast } = useToast();

  const { data, loading: loadingPlayers } = useGetAllPlayersQuery();
  const [createPlayerMutation, { loading: creatingPlayer }] =
    useCreatePlayerMutation({ refetchQueries: ["getAllPlayers"] });

  const players: PlayerFragment[] | [] = useMemo(() => {
    if (!data?.getAllPlayers) return [];
    return data.getAllPlayers;
  }, [data?.getAllPlayers]);

  const createPlayer = useCallback(async (payload: CreatePlayerInput) => {
    try {
      await createPlayerMutation({ variables: { payload } });
      addToast({ message: "Jogador criado com sucesso!", type: "success" });
    } catch (error) {
      addToast({ message: "Algo deu errado", type: "error" });
    }
  }, []);

  const loading = loadingPlayers || creatingPlayer;

  const value = useMemo(
    () => ({ players, loading, createPlayer }),
    [loadingPlayers, players, createPlayer]
  );

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error(
      "usePlayerContext must be used within a PlayerContextProvider."
    );
  }

  return context;
}

export default PlayerContextProvider;
