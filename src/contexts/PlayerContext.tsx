import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  CreatePlayerInput,
  PlayerFragment,
  useCreatePlayerMutation,
  useGetAllPlayersQuery,
  useUpdatePlayerMutation,
} from "../generated/graphql";
import { useToast } from "./ToastContext";
import { getPayloadFromCurrencyType } from "./helpers/get-payload-from-currency-type";

interface PlayerContextValues {
  loading: boolean;
  players: PlayerFragment[] | null;
  createPlayer: (payload: CreatePlayerInput) => Promise<void>;
  changeCurrency: (
    currencyType: Currencies,
    newCurrency: number
  ) => Promise<void>;
  selectedPlayer: PlayerFragment | undefined;
  setSelectedPlayer: React.Dispatch<
    React.SetStateAction<PlayerFragment | undefined>
  >;
}

export type Currencies = "gold" | "silver" | "elektrum" | "copper" | "platinum";

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

  const [updatePlayerMutation, { loading: updatingPlayer }] =
    useUpdatePlayerMutation({ refetchQueries: ["getAllPlayers"] });

  const [selectedPlayer, setSelectedPlayer] = useState<
    PlayerFragment | undefined
  >();

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

  const changeCurrency = useCallback(
    async (currencyType: Currencies, newCurrency: number) => {
      if (!selectedPlayer) return;
      try {
        const payload = getPayloadFromCurrencyType(currencyType, newCurrency);
        if (!payload) return;
        await updatePlayerMutation({
          variables: { id: selectedPlayer.id, payload },
        });
      } catch (error) {
        addToast({ message: "Algo deu errado", type: "error" });
      }
    },
    [selectedPlayer]
  );

  const loading = loadingPlayers || creatingPlayer || updatingPlayer;

  const value = useMemo(
    () => ({
      players,
      loading,
      createPlayer,
      changeCurrency,
      selectedPlayer,
      setSelectedPlayer,
    }),
    [
      loadingPlayers,
      players,
      createPlayer,
      changeCurrency,
      selectedPlayer,
      setSelectedPlayer,
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
