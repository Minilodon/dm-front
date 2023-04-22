import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useDrawerContext } from "../../../contexts/DrawerContext";
import { usePlayerContext } from "../../../contexts/PlayerContext";

type Inputs = {
  name: string;
  bronzeCurrency?: string;
  silverCurrency?: string;
  goldCurrency?: string;
  electrumCurrency?: string;
  platinumCurrency?: string;
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
      bronzeCurrency: "0",
      silverCurrency: "0",
      goldCurrency: "0",
      electrumCurrency: "0",
      platinumCurrency: "0",
      playerImgUrl: "",
    },
  });

  const { closeDrawer } = useDrawerContext();

  const [creatingPlayer, setCreatingPlayer] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (payload: Inputs) => {
    setCreatingPlayer(true);
    console.log("player created!");
    /* await createPlayer({
      name: payload.name,
      currentCurrency: {
        bronze: parseInt(payload.bronzeCurrency || "0"),
        silver: parseInt(payload.silverCurrency || "0"),
        gold: parseInt(payload.goldCurrency || "0"),
        electrum: parseInt(payload.electrumCurrency || "0"),
        platinum: parseInt(payload.platinumCurrency || "0"),
      },
      playerImageUrl: payload.playerImgUrl,
    }); */
    closeDrawer();
    reset({
      bronzeCurrency: "0",
      electrumCurrency: "0",
      goldCurrency: "0",
      name: "Nome",
      platinumCurrency: "0",
      playerImgUrl: "",
      silverCurrency: "0",
    });
    setCreatingPlayer(false);
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
              disabled={creatingPlayer}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="bronzeCurrency"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de bronze"}
              type="number"
              onChange={field.onChange}
              error={!!errors.bronzeCurrency}
              errorMessage={"Campo obrigatório"}
              disabled={creatingPlayer}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="silverCurrency"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de prata"}
              type="number"
              onChange={field.onChange}
              error={!!errors.silverCurrency}
              errorMessage={"Campo obrigatório"}
              disabled={creatingPlayer}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="goldCurrency"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de ouro"}
              type="number"
              onChange={field.onChange}
              error={!!errors.goldCurrency}
              errorMessage={"Campo obrigatório"}
              disabled={creatingPlayer}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="electrumCurrency"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de electrum"}
              type="number"
              onChange={field.onChange}
              error={!!errors.electrumCurrency}
              errorMessage={"Campo obrigatório"}
              disabled={creatingPlayer}
              value={field.value}
            />
          )}
        />
      </section>
      <section className="mb-3">
        <Controller
          name="platinumCurrency"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label={"Moedas de platina"}
              type="number"
              onChange={field.onChange}
              error={!!errors.platinumCurrency}
              errorMessage={"Campo obrigatório"}
              disabled={creatingPlayer}
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
              disabled={creatingPlayer}
              value={field.value}
            />
          )}
        />
      </section>
      <Button
        label="Salvar Jogador"
        type="submit"
        className="self-center justify-self-end"
        disabled={creatingPlayer}
      />
    </form>
  );
}

export default AddNewPlayerForm;
