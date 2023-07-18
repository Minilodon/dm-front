import React from "react";
import {
  DamageType,
  EquipmentFragment,
  EquipmentType,
  WeaponFragment,
  WeaponType,
  useUpdateEquipmentMutation,
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

interface EditEquipmentDrawerProps {
  equipment: EquipmentFragment;
}

type UpdateEquipmentFormValues = {
  name: string;
  description: string | undefined;
  cost: number;
  weight: number;
  capacity: string | undefined | null;
  type: EquipmentType | undefined;
  equipmentImage: string | undefined | null;
};

const equipmentSchema = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  cost: yup.number().required(),
  weight: yup.number().required(),
  capacity: yup.string().nullable(),
  type: yup.string<EquipmentType>(),
  equipmentImage: yup.string().url().nullable(),
});

function EditEquipmentDrawer(props: EditEquipmentDrawerProps) {
  const { equipment } = props;
  const { closeDrawer } = useDrawerContext();
  const [updateEquipmentMutation, { loading }] = useUpdateEquipmentMutation({
    refetchQueries: "all",
  });
  const { control, handleSubmit, watch } = useForm<UpdateEquipmentFormValues>({
    defaultValues: {
      name: equipment.name,
      description: equipment.description,
      cost: equipment.cost,
      weight: equipment.weight,
      capacity: equipment.capacity,
      type: equipment.type,
      equipmentImage: equipment.equipmentImage,
    },
    resolver: yupResolver(equipmentSchema),
  });
  const updateEquipment = async (data: UpdateEquipmentFormValues) => {
    if (!data) return;
    try {
      await updateEquipmentMutation({
        variables: { payload: { id: equipment.id, ...data } },
      });
    } catch (error) {
      console.log(error);
    } finally {
      closeDrawer();
    }
  };
  const currentImage = watch("equipmentImage");
  return (
    <div className="w-full h-full flex flex-col">
      <form
        className="flex flex-col py-4 gap-y-2 w-full h-full"
        onSubmit={handleSubmit(updateEquipment)}
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
                <MenuItem value={EquipmentType.Artisan}>Artesão</MenuItem>
                <MenuItem value={EquipmentType.Gaming}>Tabuleiro</MenuItem>
                <MenuItem value={EquipmentType.Musical}>Musical</MenuItem>
                <MenuItem value={EquipmentType.Other}>Outro</MenuItem>
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
          name="capacity"
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              label="Capacidade"
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
          name="equipmentImage"
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
              {equipment.equipmentImage ? (
                <img
                  className="object-cover"
                  alt={"Imagem atual da arma"}
                  src={equipment.equipmentImage}
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

export default EditEquipmentDrawer;