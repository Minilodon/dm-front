import React from "react";
import {
  ArmorFragment,
  ArmorType,
  useCreateArmorMutation,
} from "../../../../../generated/graphql";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../../../components/Button/Button";
import { useDrawerContext } from "../../../../../contexts/DrawerContext";

type CreateArmorFormValues = {
  name: string;
  type: ArmorType;
  cost: number;
  AC: number;
  minStr: number | null | undefined;
  stealthDis: boolean | null | undefined;
  weight: number;
  armorImage: string | null | undefined;
};

const armorSchema = yup.object({
  name: yup.string().required(),
  type: yup.string<ArmorType>().required(),
  cost: yup.number().integer().required(),
  AC: yup.number().required(),
  minStr: yup.number().nullable(),
  stealthDis: yup.boolean().nullable(),
  weight: yup.number().required(),
  armorImage: yup.string().url().nullable(),
});

function AddArmorDrawer() {
  const { closeDrawer } = useDrawerContext();
  const [updateArmorMutation, { loading }] = useCreateArmorMutation();
  const { control, handleSubmit, watch } = useForm<CreateArmorFormValues>({
    resolver: yupResolver(armorSchema),
    defaultValues: {
      AC: 10,
      armorImage: "",
      cost: 0,
      minStr: 0,
      name: "",
      stealthDis: false,
      type: ArmorType.Light,
      weight: 0,
    },
  });
  const updateArmor = async (data: CreateArmorFormValues) => {
    if (!data) return;
    try {
      await updateArmorMutation({
        variables: { payload: data },
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
          render={({ field, fieldState }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Nome"
              error={!!fieldState.error?.message}
            />
          )}
        />
        <div className="flex gap-x-2">
          <Controller
            control={control}
            name="cost"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                type="number"
                label="Custo (PC)"
                error={!!fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="weight"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                type="number"
                label="Peso (Kg)"
                error={!!fieldState.error?.message}
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
                  defaultValue={ArmorType.Light}
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
            render={({ field: { name, onChange, value }, fieldState }) => {
              const armorType = watch("type");
              return (
                <TextField
                  value={armorType !== "Shield" ? value : "+" + value}
                  name={name}
                  onChange={onChange}
                  label={"AC"}
                  error={!!fieldState.error?.message}
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
                label={"Endereço da imagem"}
                type="text"
              />
            );
          }}
        />
        <div className="flex gap-x-8 items-center w-full">
          <div className="flex flex-col items-center">
            <span>Imagem</span>
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

export default AddArmorDrawer;
