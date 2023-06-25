import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useDrawerContext } from "../../../contexts/DrawerContext";
import { usePlayerContext } from "../contexts/PlayerContext";

type Inputs = {
  name: string;
  copper?: string;
  silver?: string;
  gold?: string;
  elektrum?: string;
  platinum?: string;
  playerImgUrl: string;
};

function AddNewPlayerForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "Nome",
      copper: "0",
      silver: "0",
      gold: "0",
      elektrum: "0",
      platinum: "0",
      playerImgUrl: "",
    },
  });

  const { closeDrawer } = useDrawerContext();
  const { loading } = usePlayerContext();

  const onSubmit: SubmitHandler<Inputs> = async (payload: Inputs) => {
    closeDrawer();
    reset({
      copper: "0",
      elektrum: "0",
      gold: "0",
      name: "Nome",
      platinum: "0",
      playerImgUrl: "",
      silver: "0",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <section className="mb-3 mt-3">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Nome"}
              onChange={field.onChange}
              value={field.value}
              error={!!errors.name}
              errorMessage={"Campo obrigatório"}
              disabled={loading}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="copper"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de cobre"}
              type="number"
              onChange={field.onChange}
              error={!!errors.copper}
              errorMessage={"Campo obrigatório"}
              disabled={loading}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="silver"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de prata"}
              type="number"
              onChange={field.onChange}
              error={!!errors.silver}
              errorMessage={"Campo obrigatório"}
              disabled={loading}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="gold"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de ouro"}
              type="number"
              onChange={field.onChange}
              error={!!errors.gold}
              errorMessage={"Campo obrigatório"}
              disabled={loading}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="elektrum"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de electrum"}
              type="number"
              onChange={field.onChange}
              error={!!errors.elektrum}
              errorMessage={"Campo obrigatório"}
              disabled={loading}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="platinum"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de platina"}
              type="number"
              onChange={field.onChange}
              error={!!errors.platinum}
              errorMessage={"Campo obrigatório"}
              disabled={loading}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="playerImgUrl"
          control={control}
          render={({ field }) => (
            <Input
              label={"Link da imagem de perfil do jogador"}
              onChange={field.onChange}
              disabled={loading}
              value={field.value}
            />
          )}
        />
      </section>
      <Button
        label="Salvar Jogador"
        type="submit"
        className="self-center justify-self-end"
        disabled={loading}
      />
    </form>
  );
}

export default AddNewPlayerForm;
