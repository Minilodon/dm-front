export enum SkillsEnum {
  acrobatics = "acrobatics",
  arcana = "arcana",
  athletics = "athletics",
  deception = "deception",
  performance = "performance",
  stealth = "stealth",
  history = "history",
  intimidation = "intimidation",
  insight = "insight",
  investigation = "investigation",
  animalHandling = "animalHandling",
  medicine = "medicine",
  nature = "nature",
  perception = "perception",
  persuasion = "persuasion",
  sleightOfHand = "sleightOfHand",
  survival = "survival",
  religion = "religion",
}
export enum ProfMutationEnum {
  acrobaticsProf = "acrobaticsProf",
  arcanaProf = "arcanaProf",
  athleticsProf = "athleticsProf",
  deceptionProf = "deceptionProf",
  performanceProf = "performanceProf",
  stealthProf = "stealthProf",
  historyProf = "historyProf",
  intimidationProf = "intimidationProf",
  insightProf = "insightProf",
  investigationProf = "investigationProf",
  animalHandlingProf = "animalHandlingProf",
  medicineProf = "medicineProf",
  natureProf = "natureProf",
  perceptionProf = "perceptionProf",
  persuasionProf = "persuasionProf",
  sleightOfHandProf = "sleightOfHandProf",
  survivalProf = "survivalProf",
  religionProf = "religionProf",
}
export enum ExpMutationEnum {
  acrobaticsExp = "acrobaticsExp",
  arcanaExp = "arcanaExp",
  athleticsExp = "athleticsExp",
  deceptionExp = "deceptionExp",
  performanceExp = "performanceExp",
  stealthExp = "stealthExp",
  historyExp = "historyExp",
  intimidationExp = "intimidationExp",
  insightExp = "insightExp",
  investigationExp = "investigationExp",
  animalHandlingExp = "animalHandlingExp",
  medicineExp = "medicineExp",
  natureExp = "natureExp",
  perceptionExp = "perceptionExp",
  persuasionExp = "persuasionExp",
  sleightOfHandExp = "sleightOfHandExp",
  survivalExp = "survivalExp",
  religionExp = "religionExp",
}

interface ISkills {
  skillType: SkillsEnum;
  mutationProf: ProfMutationEnum;
  mutationExp: ExpMutationEnum;
}
export const Skills: ISkills[] = [
  {
    skillType: SkillsEnum.acrobatics,
    mutationProf: ProfMutationEnum.acrobaticsProf,
    mutationExp: ExpMutationEnum.acrobaticsExp,
  },
  {
    skillType: SkillsEnum.animalHandling,
    mutationProf: ProfMutationEnum.animalHandlingProf,
    mutationExp: ExpMutationEnum.animalHandlingExp,
  },
  {
    skillType: SkillsEnum.arcana,
    mutationProf: ProfMutationEnum.arcanaProf,
    mutationExp: ExpMutationEnum.arcanaExp,
  },
  {
    skillType: SkillsEnum.athletics,
    mutationProf: ProfMutationEnum.athleticsProf,
    mutationExp: ExpMutationEnum.athleticsExp,
  },
  {
    skillType: SkillsEnum.deception,
    mutationProf: ProfMutationEnum.deceptionProf,
    mutationExp: ExpMutationEnum.deceptionExp,
  },
  {
    skillType: SkillsEnum.history,
    mutationProf: ProfMutationEnum.historyProf,
    mutationExp: ExpMutationEnum.historyExp,
  },
  {
    skillType: SkillsEnum.insight,
    mutationProf: ProfMutationEnum.insightProf,
    mutationExp: ExpMutationEnum.insightExp,
  },
  {
    skillType: SkillsEnum.intimidation,
    mutationProf: ProfMutationEnum.intimidationProf,
    mutationExp: ExpMutationEnum.intimidationExp,
  },
  {
    skillType: SkillsEnum.investigation,
    mutationProf: ProfMutationEnum.investigationProf,
    mutationExp: ExpMutationEnum.investigationExp,
  },
  {
    skillType: SkillsEnum.medicine,
    mutationProf: ProfMutationEnum.medicineProf,
    mutationExp: ExpMutationEnum.medicineExp,
  },
  {
    skillType: SkillsEnum.nature,
    mutationProf: ProfMutationEnum.natureProf,
    mutationExp: ExpMutationEnum.natureExp,
  },
  {
    skillType: SkillsEnum.perception,
    mutationProf: ProfMutationEnum.perceptionProf,
    mutationExp: ExpMutationEnum.perceptionExp,
  },
  {
    skillType: SkillsEnum.performance,
    mutationProf: ProfMutationEnum.performanceProf,
    mutationExp: ExpMutationEnum.performanceExp,
  },
  {
    skillType: SkillsEnum.persuasion,
    mutationProf: ProfMutationEnum.persuasionProf,
    mutationExp: ExpMutationEnum.persuasionExp,
  },
  {
    skillType: SkillsEnum.religion,
    mutationProf: ProfMutationEnum.religionProf,
    mutationExp: ExpMutationEnum.religionExp,
  },
  {
    skillType: SkillsEnum.sleightOfHand,
    mutationProf: ProfMutationEnum.sleightOfHandProf,
    mutationExp: ExpMutationEnum.sleightOfHandExp,
  },
  {
    skillType: SkillsEnum.stealth,
    mutationProf: ProfMutationEnum.stealthProf,
    mutationExp: ExpMutationEnum.stealthExp,
  },
  {
    skillType: SkillsEnum.survival,
    mutationProf: ProfMutationEnum.survivalProf,
    mutationExp: ExpMutationEnum.survivalExp,
  },
];

export function getSkillMutation(skillType: SkillsEnum, type: "prof" | "exp") {
  if (type === "prof") {
    return Skills.find((skill) => skill.skillType === skillType)!.mutationProf;
  }
  return Skills.find((skill) => skill.skillType === skillType)!.mutationExp;
}

export function getSkillName(skill: SkillsEnum) {
  switch (skill) {
    case SkillsEnum.acrobatics:
      return "Acrobacia";
    case SkillsEnum.animalHandling:
      return "Lidar com Animais";
    case SkillsEnum.deception:
      return "Enganação";
    case SkillsEnum.arcana:
      return "Arcanismo";
    case SkillsEnum.athletics:
      return "Atletismo";
    case SkillsEnum.history:
      return "História";
    case SkillsEnum.insight:
      return "Intuição";
    case SkillsEnum.intimidation:
      return "Intimidação";
    case SkillsEnum.investigation:
      return "Investigação";
    case SkillsEnum.medicine:
      return "Medicina";
    case SkillsEnum.nature:
      return "Natureza";
    case SkillsEnum.perception:
      return "Percepção";
    case SkillsEnum.performance:
      return "Atuação";
    case SkillsEnum.persuasion:
      return "Persuasão";
    case SkillsEnum.religion:
      return "Religião";
    case SkillsEnum.sleightOfHand:
      return "Prestidigitação";
    case SkillsEnum.stealth:
      return "Furtividade";
    case SkillsEnum.survival:
      return "Sobrevivência";
  }
}
