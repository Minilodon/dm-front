import React from "react";
import {
  DamageType,
  WeaponFragment,
  WeaponType,
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

interface EditWeaponDrawerProps {
  weapon: WeaponFragment;
}

type UpdateWeaponFormValues = {
  name: string;
  description: string | undefined;
  type: WeaponType | undefined;
  cost: number;
  dmgType: DamageType | undefined;
  damageDice: number;
  diceQuantity: number;
  weight: number;
  weaponImage: string | null | undefined;
};

const weaponSchema = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  type: yup.string<WeaponType>(),
  cost: yup.number().required(),
  dmgType: yup.string<DamageType>(),
  damageDice: yup.number().required(),
  diceQuantity: yup.number().required(),
  weight: yup.number().required(),
  weaponImage: yup.string().url().nullable(),
});

function EditWeaponDrawer(props: EditWeaponDrawerProps) {
  const { weapon } = props;
  const { closeDrawer } = useDrawerContext();
  const [updateWeaponMutation, { loading }] = useUpdateWeaponMutation({
    refetchQueries: "all",
  });
  const { control, handleSubmit, watch } = useForm<UpdateWeaponFormValues>({
    defaultValues: {
      name: weapon.name,
      description: weapon.description,
      type: weapon.type,
      cost: weapon.cost,
      dmgType: weapon.dmgType,
      damageDice: weapon.damageDice,
      diceQuantity: weapon.diceQuantity,
      weight: weapon.weight,
      weaponImage: weapon.weaponImage,
    },
    resolver: yupResolver(weaponSchema),
  });
  const updateWeapon = async (data: UpdateWeaponFormValues) => {
    if (!data) return;
    try {
      await updateWeaponMutation({
        variables: { payload: { id: weapon.id, ...data } },
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
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Nome"
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Descrição"
            />
          )}
        />
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
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Custo (PC)"
              type="number"
            />
          )}
        />
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
              >
                <MenuItem value={DamageType.Acid}>Ácido</MenuItem>
                <MenuItem value={DamageType.Bludgeoning}>Contundente</MenuItem>
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
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Quantidade de dados"
              type="number"
            />
          )}
        />
        <Controller
          control={control}
          name="damageDice"
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Dano do(s) dados"
              type="number"
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
              label="Peso"
              type="number"
            />
          )}
        />
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
            <span>Imagem atual</span>
            <div className="w-[200px] h-[283px] border-black border flex bg-white">
              {weapon.weaponImage ? (
                <img
                  className="object-cover"
                  alt={"Imagem atual da arma"}
                  src={weapon.weaponImage}
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

export default EditWeaponDrawer;
