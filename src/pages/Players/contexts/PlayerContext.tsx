import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  PlayerArmorFull,
  PlayerEquipmentFull,
  PlayerFeats,
  PlayerFragment,
  PlayerWeaponFull,
  useGetAllPlayersQuery,
  useGetPlayerArmorsQuery,
  useGetPlayerByIdQuery,
  useGetPlayerEquipmentQuery,
  useGetPlayerFeatsQuery,
  useGetPlayerWeaponsQuery,
} from "../../../generated/graphql";
import { useLocation } from "react-router-dom";
import { getPlayerIdInPathname } from "../../../helpers/get-player-id-in-pathname";

interface PlayerContextValues {
  loading: boolean;
  players: PlayerFragment[] | null;
  player: PlayerFragment | undefined;
  fetchingPlayer: boolean;
  playerFeats: PlayerFeats[] | undefined;
  playerEquippedEquipments: PlayerEquipmentFull[] | undefined;
  playerUnequippedEquipments: PlayerEquipmentFull[] | undefined;
  playerEquippedArmors: PlayerArmorFull[] | undefined;
  playerUnequippedArmors: PlayerArmorFull[] | undefined;
  playerEquippedWeapons: PlayerWeaponFull[] | undefined;
  playerUnequippedWeapons: PlayerWeaponFull[] | undefined;
  totalWeight: number;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextValues);

function PlayerContextProvider(props: PlayerContextProviderProps) {
  const { children } = props;
  const location = useLocation();
  const { data, loading: loadingPlayers } = useGetAllPlayersQuery();

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

  const {
    data: playerEquipmentsQueryResponse,
    loading: fetchingEquipments,
    refetch: refetchEquipments,
  } = useGetPlayerEquipmentQuery({
    variables: {
      playerId: currentPlayerId || 0,
    },
    skip: !currentPlayerId,
  });

  const {
    data: playerArmorsQueryResponse,
    loading: fetchingArmors,
    refetch: refetchArmors,
  } = useGetPlayerArmorsQuery({
    variables: {
      playerId: currentPlayerId || 0,
    },
    skip: !currentPlayerId,
  });

  const {
    data: playerWeaponsQueryResponse,
    loading: fetchingWeapons,
    refetch: refetchWeapons,
  } = useGetPlayerWeaponsQuery({
    variables: {
      playerId: currentPlayerId || 0,
    },
    skip: !currentPlayerId,
  });

  const player: PlayerFragment | undefined = useMemo(() => {
    if (!playerQueryResponse?.getPlayerById) return;
    return playerQueryResponse?.getPlayerById;
  }, [playerQueryResponse?.getPlayerById]);

  const playerFeats: PlayerFeats[] | undefined = useMemo(() => {
    if (!playerFeatsQueryResponse?.getPlayerFeats) return undefined;
    return playerFeatsQueryResponse?.getPlayerFeats;
  }, [playerFeatsQueryResponse?.getPlayerFeats]);

  const playerEquipments: PlayerEquipmentFull[] | undefined = useMemo(() => {
    if (!playerEquipmentsQueryResponse?.getPlayerEquipment) return undefined;
    return playerEquipmentsQueryResponse?.getPlayerEquipment;
  }, [playerEquipmentsQueryResponse?.getPlayerEquipment]);

  const playerEquippedEquipments: PlayerEquipmentFull[] | undefined =
    useMemo(() => {
      return playerEquipments?.filter((equipment) => equipment.equipped);
    }, [playerEquipments]);

  const playerUnequippedEquipments: PlayerEquipmentFull[] | undefined =
    useMemo(() => {
      return playerEquipments?.filter((equipment) => !equipment.equipped);
    }, [playerEquipments]);

  const playerArmors: PlayerArmorFull[] | undefined = useMemo(() => {
    if (!playerArmorsQueryResponse?.getPlayerArmor) return undefined;
    return playerArmorsQueryResponse?.getPlayerArmor;
  }, [playerArmorsQueryResponse?.getPlayerArmor]);

  const playerEquippedArmors: PlayerArmorFull[] | undefined = useMemo(() => {
    return playerArmors?.filter((armor) => armor.equipped);
  }, [playerArmors]);

  const playerUnequippedArmors: PlayerArmorFull[] | undefined = useMemo(() => {
    return playerArmors?.filter((armor) => !armor.equipped);
  }, [playerArmors]);

  const playerWeapons: PlayerWeaponFull[] | undefined = useMemo(() => {
    if (!playerWeaponsQueryResponse?.getPlayerWeapon) return undefined;
    return playerWeaponsQueryResponse?.getPlayerWeapon;
  }, [playerWeaponsQueryResponse?.getPlayerWeapon]);

  const playerEquippedWeapons: PlayerWeaponFull[] | undefined = useMemo(() => {
    return playerWeapons?.filter((weapon) => weapon.equipped);
  }, [playerWeapons]);

  const playerUnequippedWeapons: PlayerWeaponFull[] | undefined =
    useMemo(() => {
      return playerWeapons?.filter((weapon) => !weapon.equipped);
    }, [playerWeapons]);

  const players: PlayerFragment[] | [] = useMemo(() => {
    if (!data?.getAllPlayers) return [];
    return data.getAllPlayers;
  }, [data?.getAllPlayers]);

  const armorsWeight = playerArmors
    ?.map((armor) => armor.weight)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  const weaponsWeight = playerWeapons
    ?.map((weapon) => weapon.weight)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  const equipmentWeight = playerEquipments
    ?.map((equipment) => equipment.weight)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  const totalWeight =
    (equipmentWeight || 0) + (armorsWeight || 0) + (weaponsWeight || 0);

  const loading =
    loadingPlayers ||
    fetchingFeats ||
    fetchingEquipments ||
    fetchingArmors ||
    fetchingWeapons;

  useEffect(() => {
    const refetchQuery = async () => {
      if (!currentPlayerId) return;
      await refetch({
        playerId: currentPlayerId,
      });
      await refetchFeats({
        playerId: currentPlayerId,
      });
      await refetchEquipments({
        playerId: currentPlayerId,
      });
      await refetchArmors({
        playerId: currentPlayerId,
      });
      await refetchWeapons({
        playerId: currentPlayerId,
      });
    };
    refetchQuery();
  }, [location]);

  const value = useMemo(
    () => ({
      players,
      loading,
      player,
      fetchingPlayer,
      playerFeats,
      playerEquippedEquipments,
      playerUnequippedEquipments,
      playerEquippedArmors,
      playerUnequippedArmors,
      playerEquippedWeapons,
      playerUnequippedWeapons,
      totalWeight,
    }),
    [
      loadingPlayers,
      players,
      player,
      fetchingPlayer,
      playerFeats,
      playerEquippedEquipments,
      playerUnequippedEquipments,
      playerEquippedArmors,
      playerUnequippedArmors,
      playerEquippedWeapons,
      playerUnequippedWeapons,
      totalWeight,
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
