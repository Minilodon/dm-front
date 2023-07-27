import React, { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDrawerContext } from "../../../../contexts/DrawerContext";
import Button from "../../../../components/Button/Button";
import TypeSelector from "./components/TypeSelector";
import ItemsAutocompletes from "./components/ItemsAutocompletes";

type CreateArmorFormValues = {
  playerId: number;
  itemId: number;
  equipped: boolean;
  proficient: boolean;
  quantity: number;
};

const itemSchema = yup.object({
  playerId: yup.number().required(),
  itemId: yup.number().required(),
  equipped: yup.boolean().required(),
  proficient: yup.boolean().required(),
  quantity: yup.number().required(),
});

function AddItemDrawer() {
  const { closeDrawer } = useDrawerContext();
  const [itemType, setItemType] = useState<"weapon" | "armor" | "equipment">(
    "armor"
  );
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    id: number;
  } | null>(null);
  const [inputValue, setInputValue] = useState("");

  const { control, handleSubmit } = useForm<CreateArmorFormValues>({
    resolver: yupResolver(itemSchema),
  });

  const updateArmor = (data: CreateArmorFormValues) => {
    console.log(selectedItem);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <form
        className="flex flex-col py-4 gap-y-2 w-full h-full"
        onSubmit={handleSubmit(updateArmor)}
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

        <Button
          label="Salvar"
          type="submit"
          className="mt-auto self-center"
          onClick={() => console.log(selectedItem)}
        />
      </form>
    </div>
  );
}

export default AddItemDrawer;
