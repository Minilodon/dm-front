import React, { useMemo, useState } from "react";
import {
  useGetArmorsWithBasicInfoQuery,
  useGetEquipmentsWithBasicInfoQuery,
  useGetWeaponsWithBasicInfoQuery,
} from "../../../../../generated/graphql";
import { Autocomplete, TextField } from "@mui/material";

interface Props {
  itemType: "weapon" | "armor" | "equipment";
  selectedItem: {
    label: string;
    id: number;
  } | null;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<{
      label: string;
      id: number;
    } | null>
  >;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

function ItemsAutocompletes(props: Props) {
  const { itemType, selectedItem, setSelectedItem, inputValue, setInputValue } =
    props;
  const { data: armors } = useGetArmorsWithBasicInfoQuery();
  const { data: weapons } = useGetWeaponsWithBasicInfoQuery();
  const { data: equipments } = useGetEquipmentsWithBasicInfoQuery();
  const weaponOptions = useMemo(() => {
    if (!weapons) return [];
    return weapons?.getWeapons.map((weapon) => ({
      label: weapon.name,
      id: weapon.id,
    }));
  }, [weapons]);
  const armorOptions = useMemo(() => {
    if (!armors) return [];
    return armors?.getArmors.map((armor) => ({
      label: armor.name,
      id: armor.id,
    }));
  }, [armors]);
  const equipmentOptions = useMemo(() => {
    if (!equipments) return [];
    return equipments?.getEquipments.map((equipment) => ({
      label: equipment.name,
      id: equipment.id,
    }));
  }, [equipments]);
  const component =
    itemType === "weapon" ? (
      <Autocomplete
        disablePortal
        value={selectedItem}
        onChange={(event, newItem) => {
          setSelectedItem(newItem);
        }}
        options={weaponOptions}
        sx={{ width: "100%" }}
        inputValue={inputValue}
        onInputChange={(event, newValue) => setInputValue(newValue)}
        renderInput={(params) => <TextField {...params} label={"Armas"} />}
      />
    ) : itemType === "armor" ? (
      <Autocomplete
        disablePortal
        value={selectedItem}
        onChange={(event, newItem) => {
          setSelectedItem(newItem);
        }}
        options={armorOptions}
        sx={{ width: "100%" }}
        inputValue={inputValue}
        onInputChange={(event, newValue) => setInputValue(newValue)}
        renderInput={(params) => <TextField {...params} label={"Armaduras"} />}
      />
    ) : (
      <Autocomplete
        disablePortal
        value={selectedItem}
        onChange={(event, newItem) => {
          setSelectedItem(newItem);
        }}
        options={equipmentOptions}
        sx={{ width: "100%" }}
        inputValue={inputValue}
        onInputChange={(event, newValue) => setInputValue(newValue)}
        renderInput={(params) => (
          <TextField {...params} label={"Equipamentos"} />
        )}
      />
    );
  return component;
}

export default ItemsAutocompletes;
