import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import {
  PlayerFragment,
  useGetAllPlayersQuery,
  useGetPlayerByIdQuery,
} from "../generated/graphql";
import { useLocation } from "react-router-dom";
import { getPlayerIdInPathname } from "../helpers/get-player-id-in-pathname";

interface PlayerContextValues {
  loading: boolean;
  players: PlayerFragment[] | null;
  selectedPlayer: PlayerFragment | undefined;
  setSelectedPlayer: React.Dispatch<
    React.SetStateAction<PlayerFragment | undefined>
  >;
  player: PlayerFragment | undefined;
  fetchingPlayer: boolean;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextValues);

function PlayerContextProvider(props: PlayerContextProviderProps) {
  const { children } = props;
  const location = useLocation();

  const { data, loading: loadingPlayers } = useGetAllPlayersQuery();

  const [selectedPlayer, setSelectedPlayer] = useState<
    PlayerFragment | undefined
  >();

  const { data: playerQueryResponse, loading: fetchingPlayer } =
    useGetPlayerByIdQuery({
      variables: {
        playerId: parseInt(getPlayerIdInPathname(location.pathname)),
      },
    });

  const player: PlayerFragment | undefined = useMemo(() => {
    if (!playerQueryResponse?.getPlayerById) return;
    return playerQueryResponse?.getPlayerById;
  }, [playerQueryResponse?.getPlayerById]);

  const players: PlayerFragment[] | [] = useMemo(() => {
    if (!data?.getAllPlayers) return [];
    return data.getAllPlayers;
  }, [data?.getAllPlayers]);

  const loading = loadingPlayers;

  const value = useMemo(
    () => ({
      players,
      loading,
      selectedPlayer,
      player,
      setSelectedPlayer,
      fetchingPlayer,
    }),
    [
      loadingPlayers,
      players,
      selectedPlayer,
      setSelectedPlayer,
      player,
      fetchingPlayer,
    ]
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
