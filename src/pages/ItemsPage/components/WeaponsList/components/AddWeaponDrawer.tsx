import React from "react";
import {
  DamageType,
  WeaponFragment,
  WeaponType,
  useCreateWeaponMutation,
  useUpdateWeaponMutation,
} from "../../../../../generated/graphql";
import {
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

type CreateWeaponFormValues = {
  name: string;
  description: string;
  type: WeaponType;
  cost: number;
  dmgType: DamageType;
  damageDice: number;
  diceQuantity: number;
  weight: number;
  weaponImage: string | null | undefined;
};

const weaponSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  type: yup.string<WeaponType>().required(),
  cost: yup.number().required().required(),
  dmgType: yup.string<DamageType>().required(),
  damageDice: yup.number().required().required(),
  diceQuantity: yup.number().required(),
  weight: yup.number().required(),
  weaponImage: yup.string().url().nullable(),
});

function AddWeaponDrawer() {
  const { closeDrawer } = useDrawerContext();
  const { control, handleSubmit, watch } = useForm<CreateWeaponFormValues>({
    resolver: yupResolver(weaponSchema),
  });
  const [createWeaponMutation, { loading }] = useCreateWeaponMutation({
    refetchQueries: "all",
  });
  const updateWeapon = async (data: CreateWeaponFormValues) => {
    if (!data) return;
    try {
      await createWeaponMutation({
        variables: { payload: data },
      });
    } catch (error) {
      console.log(error);
    } finally {
      closeDrawer();
    }
  };
  const currentImage = watch("weaponImage");
  return (
    <div className="w-full h-full flex flex-col">
      <form
        className="flex flex-col py-4 gap-y-2 w-full h-full"
        onSubmit={handleSubmit(updateWeapon)}
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
        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Descrição"
              error={!!fieldState.error?.message}
            />
          )}
        />
        <div className="flex items-center gap-x-2">
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
                  defaultValue={WeaponType.MartialMelee}
                >
                  <MenuItem value={WeaponType.MartialMelee}>
                    Marcial - Corpo a corpo
                  </MenuItem>
                  <MenuItem value={WeaponType.MartialRanged}>
                    Marcial - À distância
                  </MenuItem>
                  <MenuItem value={WeaponType.SimpleMelee}>
                    Simples - Corpo a corpo
                  </MenuItem>
                  <MenuItem value={WeaponType.SimpleRanged}>
                    Simples - À distância
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="cost"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                label="Custo (PC)"
                type="number"
                error={!!fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <Controller
            control={control}
            name="dmgType"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Dano</InputLabel>
                <Select
                  value={field.value}
                  label="Tipo do Dano"
                  onChange={field.onChange}
                  defaultValue={DamageType.Slashing}
                >
                  <MenuItem value={DamageType.Acid}>Ácido</MenuItem>
                  <MenuItem value={DamageType.Bludgeoning}>
                    Contundente
                  </MenuItem>
                  <MenuItem value={DamageType.Cold}>Gélido</MenuItem>
                  <MenuItem value={DamageType.Fire}>Ígneo</MenuItem>
                  <MenuItem value={DamageType.Force}>Força</MenuItem>
                  <MenuItem value={DamageType.Lightning}>Elétrico</MenuItem>
                  <MenuItem value={DamageType.Necrotic}>Necrótico</MenuItem>
                  <MenuItem value={DamageType.Piercing}>Perfurante</MenuItem>
                  <MenuItem value={DamageType.Poison}>Venenoso</MenuItem>
                  <MenuItem value={DamageType.Psychic}>Psíquico</MenuItem>
                  <MenuItem value={DamageType.Radiant}>Radiante</MenuItem>
                  <MenuItem value={DamageType.Slashing}>Cortante</MenuItem>
                  <MenuItem value={DamageType.Thunder}>Trovejante</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="diceQuantity"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                label="Quantidade de dados"
                type="number"
                error={!!fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <Controller
            control={control}
            name="damageDice"
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                label="Dano do(s) dados"
                type="number"
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
                label="Peso (Kg)"
                type="number"
                error={!!fieldState.error?.message}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="weaponImage"
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
        <div className="flex gap-x-8">
          <div className="flex flex-col items-center">
            <span>Nova imagem</span>
            <div className="w-[200px] h-[283px] border-black border flex">
              {currentImage ? (
                <img
                  className="object-cover"
                  alt={"Nova imagem da arma"}
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

export default AddWeaponDrawer;
