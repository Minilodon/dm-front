import { PlayerFragment } from "../generated/graphql";

export function getPlayerLanguagesArray(player: PlayerFragment | undefined) {
  if (!player) return [];
  let languages: string[] = [];
  if (player.language?.abyssal) {
    languages.push("Abissal");
  }
  if (player.language?.celestial) {
    languages.push("Celestial");
  }
  if (player.language?.common) {
    languages.push("Comum");
  }
  if (player.language?.deepSpeech) {
    languages.push("Dialeto Obscuro");
  }
  if (player.language?.draconic) {
    languages.push("Dracônico");
  }
  if (player.language?.dwarvish) {
    languages.push("Anão");
  }
  if (player.language?.elvish) {
    languages.push("Élfico");
  }
  if (player.language?.giant) {
    languages.push("Gigante");
  }
  if (player.language?.gnomish) {
    languages.push("Gnomo");
  }
  if (player.language?.goblin) {
    languages.push("Goblin");
  }
  if (player.language?.halfling) {
    languages.push("Pequenino");
  }
  if (player.language?.infernal) {
    languages.push("Infernal");
  }
  if (player.language?.orc) {
    languages.push("Orc");
  }
  if (player.language?.primordial) {
    languages.push("Primordial");
  }
  if (player.language?.sylvan) {
    languages.push("Silvestre");
  }
  if (player.language?.undercommon) {
    languages.push("Subcomum");
  }
  return languages;
}
