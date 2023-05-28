import { Class } from "../generated/graphql";

export interface ClassDesc {
  type: Class;
  subclass: string;
  name: string;
}

export const CLASSES: ClassDesc[] = [
  {
    type: Class.Barbarian1,
    name: "Bárbaro",
    subclass: "Trilha do Berserker",
  },
  {
    type: Class.Barbarian2,
    name: "Bárbaro",
    subclass: "Trilha do Ancestral Totêmico",
  },
  {
    type: Class.Bard1,
    name: "Bardo",
    subclass: "Colégio do Conhecimento",
  },
  {
    type: Class.Bard2,
    name: "Bardo",
    subclass: "Colégio da Bravura",
  },
  {
    type: Class.Warlock1,
    name: "Bruxo",
    subclass: "Servo da Arquifada",
  },
  {
    type: Class.Warlock2,
    name: "Bruxo",
    subclass: "Servo do Ínfero",
  },
  {
    type: Class.Warlock3,
    name: "Bruxo",
    subclass: "Servo do Grande Antigo",
  },
  {
    type: Class.Cleric1,
    name: "Clérigo",
    subclass: "Domínio da Guerra",
  },
  {
    type: Class.Cleric2,
    name: "Clérigo",
    subclass: "Domínio da Luz",
  },
  {
    type: Class.Cleric3,
    name: "Clérigo",
    subclass: "Domínio da Natureza",
  },
  {
    type: Class.Cleric4,
    name: "Clérigo",
    subclass: "Domínio da Tempestade",
  },
  {
    type: Class.Cleric5,
    name: "Clérigo",
    subclass: "Domínio da Trapaça",
  },
  {
    type: Class.Cleric6,
    name: "Clérigo",
    subclass: "Domínio da Conhecimento",
  },
  {
    type: Class.Cleric7,
    name: "Clérigo",
    subclass: "Domínio da Vida",
  },
  {
    type: Class.Druid1,
    name: "Druida",
    subclass: "Círculo da Terra",
  },
  {
    type: Class.Druid2,
    name: "Druida",
    subclass: "Círculo da Lua",
  },
  {
    type: Class.Sorcerer1,
    name: "Feiticeiro",
    subclass: "Linhagem Dracônica",
  },
  {
    type: Class.Sorcerer2,
    name: "Feiticeiro",
    subclass: "Magia Selvagem",
  },
  {
    type: Class.Ranger1,
    name: "Guardião",
    subclass: "Caçador",
  },
  {
    type: Class.Ranger2,
    name: "Guardião",
    subclass: "Senhor das Feras",
  },
  {
    type: Class.Warrior1,
    name: "Guerreiro",
    subclass: "Campeão",
  },
  {
    type: Class.Warrior2,
    name: "Guerreiro",
    subclass: "Mestre da Batalha",
  },
  {
    type: Class.Warrior3,
    name: "Guerreiro",
    subclass: "Cavaleiro Místico",
  },
  {
    type: Class.Rogue1,
    name: "Ladino",
    subclass: "Ladrão",
  },
  {
    type: Class.Rogue2,
    name: "Ladino",
    subclass: "Trapaceiro Arcano",
  },
  {
    type: Class.Rogue3,
    name: "Ladino",
    subclass: "Assassino",
  },
  {
    type: Class.Mage1,
    name: "Mago",
    subclass: "Escola de Abjuração",
  },
  {
    type: Class.Mage2,
    name: "Mago",
    subclass: "Escola de Adivinhação",
  },
  {
    type: Class.Mage3,
    name: "Mago",
    subclass: "Escola de Encantamento",
  },
  {
    type: Class.Mage4,
    name: "Mago",
    subclass: "Escola de Evocação",
  },
  {
    type: Class.Mage5,
    name: "Mago",
    subclass: "Escola de Ilusão",
  },
  {
    type: Class.Mage6,
    name: "Mago",
    subclass: "Escola de Invocação",
  },
  {
    type: Class.Mage7,
    name: "Mago",
    subclass: "Escola de Necromancia",
  },
  {
    type: Class.Mage8,
    name: "Mago",
    subclass: "Escola de Transmutação",
  },
  {
    type: Class.Monk1,
    name: "Monge",
    subclass: "Caminho da Mão Espalmada",
  },
  {
    type: Class.Monk2,
    name: "Monge",
    subclass: "Caminho das Sombras",
  },
  {
    type: Class.Monk3,
    name: "Monge",
    subclass: "Caminho dos Quatro Elementos",
  },
  {
    type: Class.Paladin1,
    name: "Paladino",
    subclass: "Juramento da Devoção",
  },
  {
    type: Class.Paladin2,
    name: "Paladino",
    subclass: "Juramento dos Anciões",
  },
  {
    type: Class.Paladin3,
    name: "Paladino",
    subclass: "Juramento da Devoção",
  },
];
