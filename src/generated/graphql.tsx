import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export const PlayerFragmentDoc = gql`
    fragment Player on Player {
  armorClass
  class
  currentHitPoints
  currentTemporaryHitPoints
  hitPoints
  id
  inspiration
  movement
  name
  playerImageUrl
  race
  level
  size
  temporaryHitPoints
  currency {
    gold
    copper
    platinum
    silver
    elektrum
  }
  language {
    abyssal
    celetial
    common
    deepSpeech
    draconic
    dwarvish
    elvish
    giant
    gnomish
    goblin
    halfling
    infernal
    orc
    primordial
    sylvan
    undercommon
  }
  attributes {
    str
    dex
    con
    wis
    int
    cha
    chaSave
    conSave
    dexSave
    intSave
    strSave
    wisSave
  }
  skills {
    acrobatics
    animalHandling
    arcana
    athletics
    deception
    history
    insight
    intimidation
    investigation
    medicine
    nature
    perception
    performance
    persuasion
    religion
    sleightOfHand
    stealth
    survival
  }
}
    `;
export const GetAllPlayersDocument = gql`
    query getAllPlayers {
  getAllPlayers {
    ...Player
  }
}
    ${PlayerFragmentDoc}`;

/**
 * __useGetAllPlayersQuery__
 *
 * To run a query within a React component, call `useGetAllPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
      }
export function useGetAllPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
        }
export type GetAllPlayersQueryHookResult = ReturnType<typeof useGetAllPlayersQuery>;
export type GetAllPlayersLazyQueryHookResult = ReturnType<typeof useGetAllPlayersLazyQuery>;
export type GetAllPlayersQueryResult = Apollo.QueryResult<GetAllPlayersQuery, GetAllPlayersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum Alignment {
  Ce = 'CE',
  Cg = 'CG',
  Cn = 'CN',
  Le = 'LE',
  Lg = 'LG',
  Ln = 'LN',
  N = 'N',
  Ne = 'NE',
  Ng = 'NG'
}

export type Attributes = {
  __typename?: 'Attributes';
  /** Valor do atributo de carisma do jogador */
  cha: Scalars['Int'];
  /** Booleano que indica se jogador possui proficiência em salvaguarda de carisma */
  chaSave?: Maybe<Scalars['Boolean']>;
  /** Valor do atributo de constituição do jogador */
  con: Scalars['Int'];
  /** Booleano que indica se jogador possui proficiência em salvaguarda de constituição */
  conSave?: Maybe<Scalars['Boolean']>;
  /** Valor do atributo de destreza do jogador */
  dex: Scalars['Int'];
  /** Booleano que indica se jogador possui proficiência em salvaguarda de destreza */
  dexSave?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** Valor do atributo de inteligência do jogador */
  int: Scalars['Int'];
  /** Booleano que indica se jogador possui proficiência em salvaguarda de inteligência */
  intSave?: Maybe<Scalars['Boolean']>;
  playerId: Scalars['Int'];
  /** Valor do atributo de força do jogador */
  str: Scalars['Int'];
  /** Booleano que indica se jogador possui proficiência em salvaguarda de força */
  strSave?: Maybe<Scalars['Boolean']>;
  /** Valor do atributo de sabedoria do jogador */
  wis: Scalars['Int'];
  /** Booleano que indica se jogador possui proficiência em salvaguarda de sabedoria */
  wisSave?: Maybe<Scalars['Boolean']>;
};

export enum Class {
  Barbarian1 = 'Barbarian1',
  Barbarian2 = 'Barbarian2',
  Bard1 = 'Bard1',
  Bard2 = 'Bard2',
  Cleric1 = 'Cleric1',
  Cleric2 = 'Cleric2',
  Cleric3 = 'Cleric3',
  Cleric4 = 'Cleric4',
  Cleric5 = 'Cleric5',
  Cleric6 = 'Cleric6',
  Cleric7 = 'Cleric7',
  Druid1 = 'Druid1',
  Druid2 = 'Druid2',
  Mage1 = 'Mage1',
  Mage2 = 'Mage2',
  Mage3 = 'Mage3',
  Mage4 = 'Mage4',
  Mage5 = 'Mage5',
  Mage6 = 'Mage6',
  Mage7 = 'Mage7',
  Mage8 = 'Mage8',
  Monk1 = 'Monk1',
  Monk2 = 'Monk2',
  Monk3 = 'Monk3',
  Paladin1 = 'Paladin1',
  Paladin2 = 'Paladin2',
  Paladin3 = 'Paladin3',
  Ranger1 = 'Ranger1',
  Ranger2 = 'Ranger2',
  Rogue1 = 'Rogue1',
  Rogue2 = 'Rogue2',
  Rogue3 = 'Rogue3',
  Sorcerer1 = 'Sorcerer1',
  Sorcerer2 = 'Sorcerer2',
  Warlock1 = 'Warlock1',
  Warlock2 = 'Warlock2',
  Warlock3 = 'Warlock3',
  Warrior1 = 'Warrior1',
  Warrior2 = 'Warrior2',
  Warrior3 = 'Warrior3'
}

export type CreatePlayerInput = {
  age: Scalars['Int'];
  alignment: Alignment;
  armorClass: Scalars['Int'];
  class: Class;
  currentHitPoints: Scalars['Int'];
  currentTemporaryHitPoints: Scalars['Int'];
  hitPoints: Scalars['Int'];
  inspiration: Scalars['Boolean'];
  movement: Scalars['Float'];
  name: Scalars['String'];
  playerImageUrl?: InputMaybe<Scalars['String']>;
  race: Race;
  size: Size;
  temporaryHitPoints: Scalars['Int'];
};

export type Currency = {
  __typename?: 'Currency';
  /** Quantidade de moedas de cobre */
  copper: Scalars['Int'];
  /** Quantidade de moedas de elektrum */
  elektrum: Scalars['Int'];
  /** Quantidade de moedas de ouro */
  gold: Scalars['Int'];
  id: Scalars['Int'];
  /** Quantidade de moedas de platina */
  platinum: Scalars['Int'];
  playerId: Scalars['Int'];
  /** Quantidade de moedas de prata */
  silver: Scalars['Int'];
};

export type Language = {
  __typename?: 'Language';
  /** Boolean que determina se o jogador conhece o idioma abissal */
  abyssal?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma celestial */
  celetial?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma comum */
  common?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma dialeto obscuro */
  deepSpeech?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma dracônico */
  draconic?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma anão */
  dwarvish?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma élfico */
  elvish?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma gigante */
  giant?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma gnômico */
  gnomish?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma goblin */
  goblin?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma pequenino */
  halfling?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** Boolean que determina se o jogador conhece o idioma infernal */
  infernal?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma orc */
  orc?: Maybe<Scalars['Boolean']>;
  playerId: Scalars['Int'];
  /** Boolean que determina se o jogador conhece o idioma primordial */
  primordial?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma silvestre */
  sylvan?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma subcomum */
  undercommon?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDefaultPlayer: Player;
  createPlayer: Player;
};


export type MutationCreateDefaultPlayerArgs = {
  playerName: Scalars['String'];
};


export type MutationCreatePlayerArgs = {
  payload: CreatePlayerInput;
};

export type Player = {
  __typename?: 'Player';
  /** Alinhamento do Jogador */
  alignment: Alignment;
  /** AC do jogador */
  armorClass: Scalars['Int'];
  attributes?: Maybe<Attributes>;
  /** Classe do jogador */
  class: Class;
  /** Horário de criação do jogador */
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Currency>;
  /** Pontos de vida atuais do jogador */
  currentHitPoints: Scalars['Int'];
  /** Pontos de vida temporários atuais do jogador */
  currentTemporaryHitPoints: Scalars['Int'];
  /** Pontos de vida do jogador */
  hitPoints: Scalars['Int'];
  id: Scalars['Int'];
  /** Campo de inspiração do jogador atual */
  inspiration: Scalars['Boolean'];
  language?: Maybe<Language>;
  /** Nível do jogador */
  level: Scalars['Int'];
  /** Deslocamento do jogador */
  movement: Scalars['Float'];
  /** Nome do jogador */
  name: Scalars['String'];
  /** Link da imagem de perfil do jogador */
  playerImageUrl?: Maybe<Scalars['String']>;
  /** Raça do jogador */
  race: Race;
  /** Classificação de tamanho do jogador */
  size: Size;
  skills?: Maybe<Skills>;
  /** Pontos de vida temporários do jogador */
  temporaryHitPoints: Scalars['Int'];
  /** Horário da última atualização do jogador */
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getAllPlayers: Array<Player>;
};

export enum Race {
  Dragonkind1 = 'Dragonkind1',
  Dragonkind2 = 'Dragonkind2',
  Dragonkind3 = 'Dragonkind3',
  Dragonkind4 = 'Dragonkind4',
  Dragonkind5 = 'Dragonkind5',
  Dragonkind6 = 'Dragonkind6',
  Dragonkind7 = 'Dragonkind7',
  Dragonkind8 = 'Dragonkind8',
  Dragonkind9 = 'Dragonkind9',
  Dragonkind10 = 'Dragonkind10',
  Dwarf1 = 'Dwarf1',
  Dwarf2 = 'Dwarf2',
  Elf1 = 'Elf1',
  Elf2 = 'Elf2',
  Elf3 = 'Elf3',
  Gnome1 = 'Gnome1',
  Gnome2 = 'Gnome2',
  HalfElf = 'HalfElf',
  HalfOrc = 'HalfOrc',
  Halfling1 = 'Halfling1',
  Halfling2 = 'Halfling2',
  Human = 'Human',
  Tiefling = 'Tiefling'
}

export enum Size {
  Gargantuan = 'Gargantuan',
  Huge = 'Huge',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
  Tiny = 'Tiny'
}

export type Skills = {
  __typename?: 'Skills';
  /** Modificador bônus da habilidade acrobacia */
  acrobatics?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade lidar com animais */
  animalHandling?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade arcana */
  arcana?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade atletismo */
  athletics?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade enganação */
  deception?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade história */
  history?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** Modificador bônus da habilidade intuição */
  insight?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade intimidação */
  intimidation?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade investigação */
  investigation?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade medicina */
  medicine?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade natureza */
  nature?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade percepção */
  perception?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade atuação */
  performance?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade persuasão */
  persuasion?: Maybe<Scalars['Int']>;
  playerId: Scalars['Int'];
  /** Modificador bônus da habilidade religião */
  religion?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade prestidigitação */
  sleightOfHand?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade furtividade */
  stealth?: Maybe<Scalars['Int']>;
  /** Modificador bônus da habilidade sobrevivência */
  survival?: Maybe<Scalars['Int']>;
};

export type GetAllPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlayersQuery = { __typename?: 'Query', getAllPlayers: Array<{ __typename?: 'Player', armorClass: number, class: Class, currentHitPoints: number, currentTemporaryHitPoints: number, hitPoints: number, id: number, inspiration: boolean, movement: number, name: string, playerImageUrl?: string | null, race: Race, level: number, size: Size, temporaryHitPoints: number, currency?: { __typename?: 'Currency', gold: number, copper: number, platinum: number, silver: number, elektrum: number } | null, language?: { __typename?: 'Language', abyssal?: boolean | null, celetial?: boolean | null, common?: boolean | null, deepSpeech?: boolean | null, draconic?: boolean | null, dwarvish?: boolean | null, elvish?: boolean | null, giant?: boolean | null, gnomish?: boolean | null, goblin?: boolean | null, halfling?: boolean | null, infernal?: boolean | null, orc?: boolean | null, primordial?: boolean | null, sylvan?: boolean | null, undercommon?: boolean | null } | null, attributes?: { __typename?: 'Attributes', str: number, dex: number, con: number, wis: number, int: number, cha: number, chaSave?: boolean | null, conSave?: boolean | null, dexSave?: boolean | null, intSave?: boolean | null, strSave?: boolean | null, wisSave?: boolean | null } | null, skills?: { __typename?: 'Skills', acrobatics?: number | null, animalHandling?: number | null, arcana?: number | null, athletics?: number | null, deception?: number | null, history?: number | null, insight?: number | null, intimidation?: number | null, investigation?: number | null, medicine?: number | null, nature?: number | null, perception?: number | null, performance?: number | null, persuasion?: number | null, religion?: number | null, sleightOfHand?: number | null, stealth?: number | null, survival?: number | null } | null }> };

export type PlayerFragment = { __typename?: 'Player', armorClass: number, class: Class, currentHitPoints: number, currentTemporaryHitPoints: number, hitPoints: number, id: number, inspiration: boolean, movement: number, name: string, playerImageUrl?: string | null, race: Race, level: number, size: Size, temporaryHitPoints: number, currency?: { __typename?: 'Currency', gold: number, copper: number, platinum: number, silver: number, elektrum: number } | null, language?: { __typename?: 'Language', abyssal?: boolean | null, celetial?: boolean | null, common?: boolean | null, deepSpeech?: boolean | null, draconic?: boolean | null, dwarvish?: boolean | null, elvish?: boolean | null, giant?: boolean | null, gnomish?: boolean | null, goblin?: boolean | null, halfling?: boolean | null, infernal?: boolean | null, orc?: boolean | null, primordial?: boolean | null, sylvan?: boolean | null, undercommon?: boolean | null } | null, attributes?: { __typename?: 'Attributes', str: number, dex: number, con: number, wis: number, int: number, cha: number, chaSave?: boolean | null, conSave?: boolean | null, dexSave?: boolean | null, intSave?: boolean | null, strSave?: boolean | null, wisSave?: boolean | null } | null, skills?: { __typename?: 'Skills', acrobatics?: number | null, animalHandling?: number | null, arcana?: number | null, athletics?: number | null, deception?: number | null, history?: number | null, insight?: number | null, intimidation?: number | null, investigation?: number | null, medicine?: number | null, nature?: number | null, perception?: number | null, performance?: number | null, persuasion?: number | null, religion?: number | null, sleightOfHand?: number | null, stealth?: number | null, survival?: number | null } | null };
