import React from "react";
import {
  EquipmentType,
  useCreateEquipmentMutation,
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
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

type CreateEquipmentFormValues = {
  name: string;
  description: string;
  cost: number;
  weight: number;
  capacity: string | null | undefined;
  type: EquipmentType;
  equipmentImage: string | null | undefined;
};

const equipmentSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  cost: yup.number().required(),
  weight: yup.number().required(),
  capacity: yup.string().nullable(),
  type: yup.string<EquipmentType>().required(),
  equipmentImage: yup.string().url().nullable(),
});

function AddEquipmentDrawer() {
  const { closeDrawer } = useDrawerContext();
  const [createEquipmentMutation, { loading }] = useCreateEquipmentMutation({
    refetchQueries: "all",
  });
  const { control, handleSubmit, watch } = useForm<CreateEquipmentFormValues>({
    resolver: yupResolver(equipmentSchema),
    defaultValues: {
      capacity: null,
      cost: 0,
      description: "",
      equipmentImage: "",
      name: "",
      type: EquipmentType.Other,
      weight: 0,
    },
  });
  const createEquipment = async (data: CreateEquipmentFormValues) => {
    if (!data) return;
    try {
      await createEquipmentMutation({
        variables: { payload: data },
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
        onSubmit={handleSubmit(createEquipment)}
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
          render={({ field, formState }) => (
            <div className="flex flex-col">
              <span className="text-sm">Descrição</span>
              <ReactQuill
                value={field.value}
                onChange={field.onChange}
                theme="snow"
                className="h-52 mb-14"
                placeholder="Descrição"
              />
              <span className="text-red-500">
                {formState.errors.description?.message ?? null}
              </span>
            </div>
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
        </div>
        <div className="flex items-center gap-x-2">
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
        </div>
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

export default AddEquipmentDrawer;
