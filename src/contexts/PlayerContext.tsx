import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { PlayerFragment, useGetAllPlayersQuery } from "../generated/graphql";

interface PlayerContextValues {
  loading: boolean;
  players: PlayerFragment[] | null;
  selectedPlayer: PlayerFragment | undefined;
  setSelectedPlayer: React.Dispatch<
    React.SetStateAction<PlayerFragment | undefined>
  >;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextValues);

function PlayerContextProvider(props: PlayerContextProviderProps) {
  const { children } = props;

  const { data, loading: loadingPlayers } = useGetAllPlayersQuery();

  const [selectedPlayer, setSelectedPlayer] = useState<
    PlayerFragment | undefined
  >();

  const players: PlayerFragment[] | [] = useMemo(() => {
    if (!data?.getAllPlayers) return [];
    return data.getAllPlayers;
  }, [data?.getAllPlayers]);

  console.log(players);
  const loading = loadingPlayers;

  const value = useMemo(
    () => ({
      players,
      loading,
      selectedPlayer,
      setSelectedPlayer,
    }),
    [loadingPlayers, players, selectedPlayer, setSelectedPlayer]
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
