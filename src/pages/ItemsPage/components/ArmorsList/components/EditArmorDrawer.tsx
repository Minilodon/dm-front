import React, { useState } from "react";
import {
  ArmorFragment,
  ArmorType,
  UpdateArmorInput,
  useUpdateArmorMutation,
} from "../../../../../generated/graphql";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import clsx from "clsx";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../../../components/Button/Button";
import { useDrawerContext } from "../../../../../contexts/DrawerContext";

interface EditArmorDrawerProps {
  armor: ArmorFragment;
}

type UpdateArmorFormValues = {
  name: string;
  type: ArmorType | undefined;
  cost: number | undefined;
  AC: number | undefined;
  minStr: number | undefined | null;
  stealthDis: boolean | undefined | null;
  weight: number | undefined;
  armorImage: string | undefined | null;
};

const armorSchema = yup.object({
  name: yup.string().required(),
  type: yup.string<ArmorType>(),
  cost: yup.number().integer(),
  AC: yup.number(),
  minStr: yup.number().nullable(),
  stealthDis: yup.boolean().nullable(),
  weight: yup.number(),
  armorImage: yup.string().url().nullable(),
});

function EditArmorDrawer(props: EditArmorDrawerProps) {
  const { armor } = props;
  const { closeDrawer } = useDrawerContext();
  const [updateArmorMutation, { loading }] = useUpdateArmorMutation({
    refetchQueries: "all",
  });
  const { control, handleSubmit, watch } = useForm<UpdateArmorFormValues>({
    defaultValues: {
      AC: armor.AC,
      armorImage: armor.armorImage,
      cost: armor.cost,
      name: armor.name,
      type: armor.type,
      minStr: armor.minStr,
      stealthDis: armor.stealthDis,
      weight: armor.weight,
    },
    resolver: yupResolver(armorSchema),
  });
  const updateArmor = async (data: UpdateArmorFormValues) => {
    if (!data) return;
    try {
      await updateArmorMutation({
        variables: { payload: { id: armor.id, ...data } },
      });
    } catch (error) {
      console.log(error);
    } finally {
      closeDrawer();
    }
  };
  const currentImage = watch("armorImage");
  return (
    <div className="w-full h-full flex flex-col">
      <form
        className="flex flex-col py-4 gap-y-2 w-full h-full"
        onSubmit={handleSubmit(updateArmor)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Nome"
            />
          )}
        />
        <div className="flex gap-x-2">
          <Controller
            control={control}
            name="cost"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                type="number"
                label="Custo (PC)"
              />
            )}
          />
          <Controller
            control={control}
            name="weight"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                type="number"
                label="Peso (Kg)"
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="stealthDis"
          render={({ field }) => (
            <div className="flex items-center">
              <span>Desvantagem em furtividade:</span>
              <Checkbox
                checked={field.value || false}
                onChange={field.onChange}
              />
            </div>
          )}
        />
        <div className="flex gap-x-2">
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Tipo</InputLabel>
                <Select
                  value={field.value}
                  label="Tipo"
                  onChange={field.onChange}
                >
                  <MenuItem value={ArmorType.Light}>Leve</MenuItem>
                  <MenuItem value={ArmorType.Medium}>Média</MenuItem>
                  <MenuItem value={ArmorType.Heavy}>Pesadas</MenuItem>
                  <MenuItem value={ArmorType.Shield}>Escudo</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="AC"
            render={({ field: { name, onChange, value } }) => {
              const armorType = watch("type");
              return (
                <TextField
                  value={armorType !== "Shield" ? value : "+" + value}
                  name={name}
                  onChange={onChange}
                  label={"AC"}
                />
              );
            }}
          />
        </div>
        <Controller
          control={control}
          name="armorImage"
          render={({ field: { name, onChange, value } }) => {
            return (
              <TextField
                value={value}
                name={name}
                onChange={onChange}
                label={"Imagem"}
                type="text"
              />
            );
          }}
        />
        <div className="flex gap-x-8">
          <div className="flex flex-col items-center">
            <span>Imagem atual</span>
            <div className="w-[200px] h-[283px] border-black border flex">
              {armor.armorImage ? (
                <img
                  className="object-cover"
                  alt={"Imagem atual da armadura"}
                  src={armor.armorImage}
                />
              ) : (
                <span>Sem imagem</span>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span>Nova imagem</span>
            <div className="w-[200px] h-[283px] border-black border flex">
              {currentImage ? (
                <img
                  className="object-cover"
                  alt={"Nova imagem da armadura"}
                  src={currentImage}
                />
              ) : (
                <span>Sem imagem</span>
              )}
            </div>
          </div>
        </div>
        <Button
          label="Salvar"
          type="submit"
          className="mt-auto self-center"
          disabled={loading}
        />
      </form>
    </div>
  );
}

export default EditArmorDrawer;
