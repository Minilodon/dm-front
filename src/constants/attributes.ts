import { AttributesEnum, UpdateAttributesInput } from "../generated/graphql";

type mutationTypes = "cha" | "str" | "int" | "wis" | "con" | "dex";
type mutationSaves =
  | "chaSave"
  | "strSave"
  | "intSave"
  | "wisSave"
  | "conSave"
  | "dexSave";

interface IAttributes {
  enum: AttributesEnum;
  name: string;
  mutationField: mutationTypes;
  mutationSave: mutationSaves;
}

export const attributes: IAttributes[] = [
  {
    enum: AttributesEnum.Strength,
    name: "Força",
    mutationField: "str",
    mutationSave: "strSave",
  },
  {
    enum: AttributesEnum.Dexterity,
    name: "Destreza",
    mutationField: "dex",
    mutationSave: "dexSave",
  },
  {
    enum: AttributesEnum.Constitution,
    name: "Constituição",
    mutationField: "con",
    mutationSave: "conSave",
  },
  {
    enum: AttributesEnum.Intelligence,
    name: "Inteligência",
    mutationField: "int",
    mutationSave: "intSave",
  },
  {
    enum: AttributesEnum.Wisdom,
    name: "Sabedoria",
    mutationField: "wis",
    mutationSave: "wisSave",
  },
  {
    enum: AttributesEnum.Charisma,
    name: "Carisma",
    mutationField: "cha",
    mutationSave: "chaSave",
  },
];

export function getAttributeName(attr: AttributesEnum) {
  return attributes.find((attribute) => attribute.enum === attr)!.name;
}
export function getAttributeMutation(attr: AttributesEnum): mutationTypes {
  return (
    attributes.find((attribute) => attribute.enum === attr)?.mutationField ||
    "str"
  );
}
export function getAttributeSaveMutation(attr: AttributesEnum): mutationSaves {
  return (
    attributes.find((attribute) => attribute.enum === attr)?.mutationSave ||
    "strSave"
  );
}
