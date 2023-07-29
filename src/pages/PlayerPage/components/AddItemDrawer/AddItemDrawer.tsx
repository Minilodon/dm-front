import React, { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDrawerContext } from "../../../../contexts/DrawerContext";
import Button from "../../../../components/Button/Button";
import TypeSelector from "./components/TypeSelector";
import ItemsAutocompletes from "./components/ItemsAutocompletes";
import { TextField } from "@mui/material";
import {
  PlayerFragment,
  useConnectArmorToPlayerMutation,
  useConnectEquipmentToPlayerMutation,
  useConnectWeaponToPlayerMutation,
} from "../../../../generated/graphql";
import { usePlayerContext } from "../../../Players/contexts/PlayerContext";
import Checkbox from "../../../../components/Checkbox/Checkbox";

type CreateItemFormValues = {
  equipped: boolean;
  proficient: boolean;
  quantity: number;
};

const itemSchema = yup.object({
  equipped: yup.boolean().required(),
  proficient: yup.boolean().required(),
  quantity: yup.number().required(),
});

interface Props {
  player: PlayerFragment | undefined;
}

function AddItemDrawer(props: Props) {
  const { player } = props;
  const { closeDrawer } = useDrawerContext();
  const [itemType, setItemType] = useState<"weapon" | "armor" | "equipment">(
    "armor"
  );
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    id: number;
  } | null>(null);
  const [inputValue, setInputValue] = useState("");

  const { control, handleSubmit, setValue } = useForm<CreateItemFormValues>({
    resolver: yupResolver(itemSchema),
    defaultValues: {
      equipped: false,
      proficient: false,
      quantity: 1,
    },
  });

  const [addArmor] = useConnectArmorToPlayerMutation({ refetchQueries: "all" });
  const [addWeapon] = useConnectWeaponToPlayerMutation({
    refetchQueries: "all",
  });
  const [addEquipment] = useConnectEquipmentToPlayerMutation({
    refetchQueries: "all",
  });

  const addItem = async (data: CreateItemFormValues) => {
    if (!selectedItem) return;
    if (!player) return;
    switch (itemType) {
      case "armor":
        try {
          await addArmor({
            variables: {
              payload: {
                armorId: selectedItem.id,
                playerId: player.id,
                equipped: data.equipped,
                proficient: data.proficient,
                quantity: data.quantity,
              },
            },
          });
        } catch (error) {
          console.log("algo deu errado");
        } finally {
          closeDrawer();
          return;
        }
      case "equipment":
        try {
          await addEquipment({
            variables: {
              payload: {
                equipmentId: selectedItem.id,
                playerId: player.id,
                equipped: data.equipped,
                proficient: data.proficient,
                quantity: data.quantity,
              },
            },
          });
        } catch (error) {
          console.log("algo deu errado");
        } finally {
          closeDrawer();
          return;
        }
      case "weapon":
        try {
          await addWeapon({
            variables: {
              payload: {
                weaponId: selectedItem.id,
                playerId: player.id,
                equipped: data.equipped,
                proficient: data.proficient,
                quantity: data.quantity,
              },
            },
          });
        } catch (error) {
          console.log("algo deu errado");
        } finally {
          closeDrawer();
          return;
        }
    }
  };
  return (
    <div className="w-full h-full flex flex-col">
      <form
        className="flex flex-col py-4 gap-y-2 w-full h-full"
        onSubmit={handleSubmit(addItem)}
      >
        <TypeSelector
          itemType={itemType}
          setItemType={setItemType}
          setInputValue={setInputValue}
          setSelectedItem={setSelectedItem}
        />
        <ItemsAutocompletes
          itemType={itemType}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Controller
          control={control}
          name={"equipped"}
          render={({ field }) => (
            <div className="flex items-center gap-x-2">
              <span>Equipado:</span>
              <Checkbox
                onChange={() => setValue("equipped", !field.value)}
                value={field.value}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name={"proficient"}
          render={({ field }) => (
            <div className="flex items-center gap-x-2">
              <span>Tem proficiência:</span>
              <Checkbox
                onChange={() => setValue("proficient", !field.value)}
                value={field.value}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name={"quantity"}
          render={({ field }) => (
            <TextField
              className="w-1/2"
              {...field}
              type="number"
              label={"Quantidade"}
              inputProps={{ min: 1 }}
            />
          )}
        />
        <Button label="Salvar" type="submit" className="mt-auto self-center" />
      </form>
    </div>
  );
}

export default AddItemDrawer;
