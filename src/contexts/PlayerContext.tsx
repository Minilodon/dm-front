import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  PlayerFeats,
  PlayerFragment,
  useGetAllPlayersQuery,
  useGetPlayerByIdQuery,
  useGetPlayerFeatsQuery,
} from "../generated/graphql";
import { useLocation } from "react-router-dom";
import { getPlayerIdInPathname } from "../helpers/get-player-id-in-pathname";
import { useApolloClient } from "@apollo/client";

interface PlayerContextValues {
  loading: boolean;
  players: PlayerFragment[] | null;
  selectedPlayer: PlayerFragment | undefined;
  setSelectedPlayer: React.Dispatch<
    React.SetStateAction<PlayerFragment | undefined>
  >;
  player: PlayerFragment | undefined;
  fetchingPlayer: boolean;
  playerFeats: PlayerFeats[] | undefined;
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

  const currentPlayerId = useMemo(() => {
    return getPlayerIdInPathname(location.pathname);
  }, [location.pathname]);

  const {
    data: playerQueryResponse,
    loading: fetchingPlayer,
    refetch,
  } = useGetPlayerByIdQuery({
    variables: {
      playerId: currentPlayerId || 0,
    },
    skip: !currentPlayerId,
  });

  const {
    data: playerFeatsQueryResponse,
    loading: fetchingFeats,
    refetch: refetchFeats,
  } = useGetPlayerFeatsQuery({
    variables: {
      playerId: currentPlayerId || 0,
    },
    skip: !currentPlayerId,
  });

  const player: PlayerFragment | undefined = useMemo(() => {
    if (!playerQueryResponse?.getPlayerById) return;
    setSelectedPlayer(playerQueryResponse?.getPlayerById);
    return playerQueryResponse?.getPlayerById;
  }, [playerQueryResponse?.getPlayerById]);

  const playerFeats: PlayerFeats[] | undefined = useMemo(() => {
    if (!playerFeatsQueryResponse?.getPlayerFeats) return undefined;
    return playerFeatsQueryResponse?.getPlayerFeats;
  }, [playerFeatsQueryResponse?.getPlayerFeats]);

  const players: PlayerFragment[] | [] = useMemo(() => {
    if (!data?.getAllPlayers) return [];
    return data.getAllPlayers;
  }, [data?.getAllPlayers]);

  const loading = loadingPlayers || fetchingFeats;

  useEffect(() => {
    const refetchQuery = async () => {
      if (!currentPlayerId) return;
      await refetch({
        playerId: currentPlayerId,
      });
      await refetchFeats({
        playerId: currentPlayerId,
      });
    };
    refetchQuery();
  }, [location]);

  const value = useMemo(
    () => ({
      players,
      loading,
      selectedPlayer,
      player,
      setSelectedPlayer,
      fetchingPlayer,
      playerFeats,
    }),
    [
      loadingPlayers,
      players,
      selectedPlayer,
      setSelectedPlayer,
      player,
      fetchingPlayer,
      playerFeats,
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
