import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateFeatMutation } from "../../../generated/graphql";
import { useDrawerContext } from "../../../contexts/DrawerContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface FormValues {
  name: string;
  description: string;
  iconUrl: string | null;
}

function CreateFeatDrawer() {
  const { closeDrawer } = useDrawerContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);
    console.log(description);
    console.log(imageUrl);
  };

  return (
    <form
      className="w-full h-full pt-8 flex flex-col gap-y-4"
      onSubmit={handleSubmit}
    >
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Nome"
        name="name"
      />
      <span>Descrição</span>
      <ReactQuill
        value={description}
        onChange={(description) => setDescription(description)}
        theme="snow"
        className="max-h-52 mb-14"
      />
      <TextField
        label="Url da imagem do ícone"
        type="url"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        name="imageUrl"
      />
      <Button
        className="mt-auto mb-4 self-center"
        label="Criar"
        type="submit"
      />
    </form>
  );
}

export default CreateFeatDrawer;
