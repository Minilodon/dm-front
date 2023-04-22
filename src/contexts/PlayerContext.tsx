import { createContext, ReactNode, useContext, useMemo } from "react";
import { PlayerFragment, useGetAllPlayersQuery } from "../generated/graphql";

interface PlayerContextValues {
  loading: boolean;
  players: PlayerFragment[] | null;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextValues);

function PlayerContextProvider(props: PlayerContextProviderProps) {
  const { children } = props;
  const { data, loading: loadingPlayers } = useGetAllPlayersQuery();

  const players: PlayerFragment[] | [] = useMemo(() => {
    if (!data?.getAllPlayers) return [];
    return data.getAllPlayers;
  }, [data?.getAllPlayers]);

  const value = useMemo(
    () => ({ players, loading: loadingPlayers }),
    [loadingPlayers, players]
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
