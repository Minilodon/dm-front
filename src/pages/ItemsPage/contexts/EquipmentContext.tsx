import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";
import {
  EquipmentFragment,
  useGetAllEquipmentsQuery,
} from "../../../generated/graphql";

interface EquipmentsContextValues {
  loading: boolean;
  equipments: EquipmentFragment[] | null;
}

interface EquipmentsContextProviderProps {
  children: ReactNode;
}

const EquipmentsContext = createContext({} as EquipmentsContextValues);

function EquipmentsContextProvider(props: EquipmentsContextProviderProps) {
  const { children } = props;
  const location = useLocation();
  const { data, loading: loadingEquipments } = useGetAllEquipmentsQuery();

  const equipments: EquipmentFragment[] | [] = useMemo(() => {
    if (!data?.getEquipments) return [];
    return data.getEquipments;
  }, [data?.getEquipments]);

  const loading = loadingEquipments;

  const value = useMemo(
    () => ({
      loading,
      equipments,
    }),
    [loading, equipments]
  );

  return (
    <EquipmentsContext.Provider value={value}>
      {children}
    </EquipmentsContext.Provider>
  );
}

export function useEquipmentsContext() {
  const context = useContext(EquipmentsContext);

  if (!context) {
    throw new Error(
      "useEquipmentsContext must be used within a EquipmentsContextProvider."
    );
  }

  return context;
}

export default EquipmentsContextProvider;
