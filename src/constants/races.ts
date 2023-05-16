import { Race } from "../generated/graphql";

export interface RaceDesc {
  type: Race;
  name: string;
}

export const RACES: RaceDesc[] = [
  {
    type: Race.Dwarf1,
    name: "Anão da Colina",
  },
  {
    type: Race.Dwarf2,
    name: "Anão da Montanha",
  },
  {
    type: Race.Elf1,
    name: "Alto Elfo",
  },
  {
    type: Race.Elf2,
    name: "Elfo Silvestre",
  },
  {
    type: Race.Elf3,
    name: "Drow",
  },
  {
    type: Race.Human,
    name: "Humano",
  },
  {
    type: Race.Halfling1,
    name: "Pequenino Pés-Ligeiros",
  },
  {
    type: Race.Halfling2,
    name: "Pequenino Robusto",
  },
  {
    type: Race.Dragonkind1,
    name: "Draconato Azul",
  },
  {
    type: Race.Dragonkind2,
    name: "Draconato Branco",
  },
  {
    type: Race.Dragonkind3,
    name: "Draconato Bronze",
  },
  {
    type: Race.Dragonkind4,
    name: "Draconato Cobre",
  },
  {
    type: Race.Dragonkind5,
    name: "Draconato Latão",
  },
  {
    type: Race.Dragonkind6,
    name: "Draconato Negro",
  },
  {
    type: Race.Dragonkind7,
    name: "Draconato Ouro",
  },
  {
    type: Race.Dragonkind8,
    name: "Draconato Prata",
  },
  {
    type: Race.Dragonkind9,
    name: "Draconato Verde",
  },
  {
    type: Race.Dragonkind10,
    name: "Draconato Vermelho",
  },
  {
    type: Race.Gnome1,
    name: "Gnomo dos Bosques",
  },
  {
    type: Race.Gnome2,
    name: "Gnomo das Rochas",
  },
  {
    type: Race.HalfElf,
    name: "Meio-Elfo",
  },
  {
    type: Race.HalfOrc,
    name: "Meio-Orc",
  },
  {
    type: Race.Tiefling,
    name: "Tiferino",
  },
];
