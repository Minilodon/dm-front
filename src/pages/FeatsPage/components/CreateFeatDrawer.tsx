import { TextField } from "@mui/material";
import React from "react";
import Button from "../../../components/Button/Button";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDrawerContext } from "../../../contexts/DrawerContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFeatsContext } from "../contexts/FeatsContext";

const schema = object({
  name: string().required("Campo obrigatório").min(1, "Digite um nome válido"),
  description: string()
    .required("Campo obrigatório")
    .min(2, "Digite uma descrição válida"),
  iconUrl: string().url("Esse campo deve ser o endereço da imagem").nullable(),
});

interface FormValues {
  name: string;
  description: string;
  iconUrl: string | null;
}

function CreateFeatDrawer() {
  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: "",
      name: "",
      iconUrl: "",
    },
  });
  const { closeDrawer } = useDrawerContext();
  const { createFeat, loading } = useFeatsContext();

  const onSubmit = async (data: FormValues) => {
    if (!data) return;
    await createFeat(data);
    closeDrawer();
    reset({
      description: "",
      name: "",
      iconUrl: "",
    });
  };

  return (
    <form
      className="w-full h-full pt-8 flex flex-col gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        render={({ field, fieldState }) => (
          <TextField
            label="Nome"
            {...field}
            error={!!fieldState.error?.message}
            helperText={fieldState.error?.message}
          />
        )}
        control={control}
      />
      <Controller
        name="description"
        render={({ field, formState }) => (
          <div>
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
        control={control}
      />
      <Controller
        name="iconUrl"
        render={({ field, fieldState }) => (
          <TextField
            label="Url da imagem do ícone"
            {...field}
            error={!!fieldState.error?.message}
            helperText={fieldState.error?.message}
          />
        )}
        control={control}
      />
      <Button
        className="mt-auto mb-4 self-center"
        label="Criar"
        type="submit"
        disabled={loading}
      />
    </form>
  );
}

export default CreateFeatDrawer;
