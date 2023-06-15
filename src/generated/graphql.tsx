import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export const FeatFragmentDoc = gql`
    fragment Feat on Feat {
  id
  name
  description
  iconUrl
  players {
    name
    id
  }
}
    `;
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
    celestial
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
    acrobaticsProf
    acrobaticsExp
    animalHandling
    animalHandlingProf
    animalHandlingExp
    arcana
    arcanaProf
    arcanaExp
    athletics
    athleticsProf
    athleticsExp
    deception
    deceptionProf
    deceptionExp
    history
    historyProf
    historyExp
    insight
    insightProf
    insightExp
    intimidation
    intimidationProf
    intimidationExp
    investigation
    investigationProf
    investigationExp
    medicine
    medicineProf
    medicineExp
    nature
    natureProf
    natureExp
    perception
    perceptionProf
    perceptionExp
    performance
    performanceProf
    performanceExp
    persuasion
    persuasionProf
    persuasionExp
    religion
    religionProf
    religionExp
    sleightOfHand
    sleightOfHandProf
    sleightOfHandExp
    stealth
    stealthProf
    stealthExp
    survival
    survivalProf
    survivalExp
  }
}
    `;
export const UpdatePlayerAttributesDocument = gql`
    mutation updatePlayerAttributes($playerId: Float!, $payload: UpdateAttributesInput!) {
  updatePlayerAttributes(playerId: $playerId, payload: $payload) {
    playerId
  }
}
    `;
export type UpdatePlayerAttributesMutationFn = Apollo.MutationFunction<UpdatePlayerAttributesMutation, UpdatePlayerAttributesMutationVariables>;

/**
 * __useUpdatePlayerAttributesMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerAttributesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerAttributesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerAttributesMutation, { data, loading, error }] = useUpdatePlayerAttributesMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePlayerAttributesMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerAttributesMutation, UpdatePlayerAttributesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerAttributesMutation, UpdatePlayerAttributesMutationVariables>(UpdatePlayerAttributesDocument, options);
      }
export type UpdatePlayerAttributesMutationHookResult = ReturnType<typeof useUpdatePlayerAttributesMutation>;
export type UpdatePlayerAttributesMutationResult = Apollo.MutationResult<UpdatePlayerAttributesMutation>;
export type UpdatePlayerAttributesMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerAttributesMutation, UpdatePlayerAttributesMutationVariables>;
export const UpdatePlayerCurrencyDocument = gql`
    mutation updatePlayerCurrency($playerId: Float!, $payload: UpdateCurrencyInput!) {
  updatePlayerCurrency(playerId: $playerId, payload: $payload) {
    playerId
  }
}
    `;
export type UpdatePlayerCurrencyMutationFn = Apollo.MutationFunction<UpdatePlayerCurrencyMutation, UpdatePlayerCurrencyMutationVariables>;

/**
 * __useUpdatePlayerCurrencyMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerCurrencyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerCurrencyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerCurrencyMutation, { data, loading, error }] = useUpdatePlayerCurrencyMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePlayerCurrencyMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerCurrencyMutation, UpdatePlayerCurrencyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerCurrencyMutation, UpdatePlayerCurrencyMutationVariables>(UpdatePlayerCurrencyDocument, options);
      }
export type UpdatePlayerCurrencyMutationHookResult = ReturnType<typeof useUpdatePlayerCurrencyMutation>;
export type UpdatePlayerCurrencyMutationResult = Apollo.MutationResult<UpdatePlayerCurrencyMutation>;
export type UpdatePlayerCurrencyMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerCurrencyMutation, UpdatePlayerCurrencyMutationVariables>;
export const GetAllFeatsDocument = gql`
    query getAllFeats {
  getAllFeats {
    ...Feat
  }
}
    ${FeatFragmentDoc}`;

/**
 * __useGetAllFeatsQuery__
 *
 * To run a query within a React component, call `useGetAllFeatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFeatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFeatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllFeatsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFeatsQuery, GetAllFeatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFeatsQuery, GetAllFeatsQueryVariables>(GetAllFeatsDocument, options);
      }
export function useGetAllFeatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFeatsQuery, GetAllFeatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFeatsQuery, GetAllFeatsQueryVariables>(GetAllFeatsDocument, options);
        }
export type GetAllFeatsQueryHookResult = ReturnType<typeof useGetAllFeatsQuery>;
export type GetAllFeatsLazyQueryHookResult = ReturnType<typeof useGetAllFeatsLazyQuery>;
export type GetAllFeatsQueryResult = Apollo.QueryResult<GetAllFeatsQuery, GetAllFeatsQueryVariables>;
export const UpdatePlayerLanguageDocument = gql`
    mutation updatePlayerLanguage($playerId: Float!, $payload: UpdateLanguagesInput!) {
  updatePlayerLanguage(playerId: $playerId, payload: $payload) {
    playerId
  }
}
    `;
export type UpdatePlayerLanguageMutationFn = Apollo.MutationFunction<UpdatePlayerLanguageMutation, UpdatePlayerLanguageMutationVariables>;

/**
 * __useUpdatePlayerLanguageMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerLanguageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerLanguageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerLanguageMutation, { data, loading, error }] = useUpdatePlayerLanguageMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePlayerLanguageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerLanguageMutation, UpdatePlayerLanguageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerLanguageMutation, UpdatePlayerLanguageMutationVariables>(UpdatePlayerLanguageDocument, options);
      }
export type UpdatePlayerLanguageMutationHookResult = ReturnType<typeof useUpdatePlayerLanguageMutation>;
export type UpdatePlayerLanguageMutationResult = Apollo.MutationResult<UpdatePlayerLanguageMutation>;
export type UpdatePlayerLanguageMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerLanguageMutation, UpdatePlayerLanguageMutationVariables>;
export const UpdatePlayerMagicDocument = gql`
    mutation updatePlayerMagic($playerId: Float!, $payload: UpdateMagicInput!) {
  updatePlayerMagic(playerId: $playerId, payload: $payload) {
    playerId
  }
}
    `;
export type UpdatePlayerMagicMutationFn = Apollo.MutationFunction<UpdatePlayerMagicMutation, UpdatePlayerMagicMutationVariables>;

/**
 * __useUpdatePlayerMagicMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerMagicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerMagicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerMagicMutation, { data, loading, error }] = useUpdatePlayerMagicMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePlayerMagicMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerMagicMutation, UpdatePlayerMagicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerMagicMutation, UpdatePlayerMagicMutationVariables>(UpdatePlayerMagicDocument, options);
      }
export type UpdatePlayerMagicMutationHookResult = ReturnType<typeof useUpdatePlayerMagicMutation>;
export type UpdatePlayerMagicMutationResult = Apollo.MutationResult<UpdatePlayerMagicMutation>;
export type UpdatePlayerMagicMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerMagicMutation, UpdatePlayerMagicMutationVariables>;
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
export const GetPlayerByIdDocument = gql`
    query getPlayerById($playerId: Float!) {
  getPlayerById(playerId: $playerId) {
    ...Player
  }
}
    ${PlayerFragmentDoc}`;

/**
 * __useGetPlayerByIdQuery__
 *
 * To run a query within a React component, call `useGetPlayerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerByIdQuery({
 *   variables: {
 *      playerId: // value for 'playerId'
 *   },
 * });
 */
export function useGetPlayerByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>(GetPlayerByIdDocument, options);
      }
export function useGetPlayerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>(GetPlayerByIdDocument, options);
        }
export type GetPlayerByIdQueryHookResult = ReturnType<typeof useGetPlayerByIdQuery>;
export type GetPlayerByIdLazyQueryHookResult = ReturnType<typeof useGetPlayerByIdLazyQuery>;
export type GetPlayerByIdQueryResult = Apollo.QueryResult<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>;
export const UpdatePlayerDocument = gql`
    mutation updatePlayer($playerId: Float!, $payload: UpdatePlayerInput!) {
  updatePlayer(playerId: $playerId, payload: $payload) {
    ...Player
  }
}
    ${PlayerFragmentDoc}`;
export type UpdatePlayerMutationFn = Apollo.MutationFunction<UpdatePlayerMutation, UpdatePlayerMutationVariables>;

/**
 * __useUpdatePlayerMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerMutation, { data, loading, error }] = useUpdatePlayerMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerMutation, UpdatePlayerMutationVariables>(UpdatePlayerDocument, options);
      }
export type UpdatePlayerMutationHookResult = ReturnType<typeof useUpdatePlayerMutation>;
export type UpdatePlayerMutationResult = Apollo.MutationResult<UpdatePlayerMutation>;
export type UpdatePlayerMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>;
export const UpdatePlayerSkillsDocument = gql`
    mutation updatePlayerSkills($playerId: Float!, $payload: UpdateSkillsInput!) {
  updatePlayerSkills(playerId: $playerId, payload: $payload) {
    playerId
  }
}
    `;
export type UpdatePlayerSkillsMutationFn = Apollo.MutationFunction<UpdatePlayerSkillsMutation, UpdatePlayerSkillsMutationVariables>;

/**
 * __useUpdatePlayerSkillsMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerSkillsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerSkillsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerSkillsMutation, { data, loading, error }] = useUpdatePlayerSkillsMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePlayerSkillsMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerSkillsMutation, UpdatePlayerSkillsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerSkillsMutation, UpdatePlayerSkillsMutationVariables>(UpdatePlayerSkillsDocument, options);
      }
export type UpdatePlayerSkillsMutationHookResult = ReturnType<typeof useUpdatePlayerSkillsMutation>;
export type UpdatePlayerSkillsMutationResult = Apollo.MutationResult<UpdatePlayerSkillsMutation>;
export type UpdatePlayerSkillsMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerSkillsMutation, UpdatePlayerSkillsMutationVariables>;
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

export enum AttributesEnum {
  Charisma = 'Charisma',
  Constitution = 'Constitution',
  Dexterity = 'Dexterity',
  Intelligence = 'Intelligence',
  Strength = 'Strength',
  Wisdom = 'Wisdom'
}

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

export type ConnectFeatToPlayerInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  currentCharges?: InputMaybe<Scalars['Int']>;
  featId: Scalars['Int'];
  playerId: Scalars['Int'];
  source?: InputMaybe<Scalars['String']>;
  totalCharges?: InputMaybe<Scalars['Int']>;
};

export type CreateAttributesInput = {
  cha?: InputMaybe<Scalars['Int']>;
  chaSave?: InputMaybe<Scalars['Boolean']>;
  con?: InputMaybe<Scalars['Int']>;
  conSave?: InputMaybe<Scalars['Boolean']>;
  dex?: InputMaybe<Scalars['Int']>;
  dexSave?: InputMaybe<Scalars['Boolean']>;
  int?: InputMaybe<Scalars['Int']>;
  intSave?: InputMaybe<Scalars['Boolean']>;
  str?: InputMaybe<Scalars['Int']>;
  strSave?: InputMaybe<Scalars['Boolean']>;
  wis?: InputMaybe<Scalars['Int']>;
  wisSave?: InputMaybe<Scalars['Boolean']>;
};

export type CreateCurrencyInput = {
  copper?: InputMaybe<Scalars['Int']>;
  elektrum?: InputMaybe<Scalars['Int']>;
  gold?: InputMaybe<Scalars['Int']>;
  platinum?: InputMaybe<Scalars['Int']>;
  silver?: InputMaybe<Scalars['Int']>;
};

export type CreateFeatInput = {
  description: Scalars['String'];
  iconUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateLanguagesInput = {
  abyssal?: InputMaybe<Scalars['Boolean']>;
  celestial?: InputMaybe<Scalars['Boolean']>;
  common?: InputMaybe<Scalars['Boolean']>;
  deepSpeech?: InputMaybe<Scalars['Boolean']>;
  draconic?: InputMaybe<Scalars['Boolean']>;
  dwarvish?: InputMaybe<Scalars['Boolean']>;
  elvish?: InputMaybe<Scalars['Boolean']>;
  giant?: InputMaybe<Scalars['Boolean']>;
  gnomish?: InputMaybe<Scalars['Boolean']>;
  goblin?: InputMaybe<Scalars['Boolean']>;
  halfling?: InputMaybe<Scalars['Boolean']>;
  infernal?: InputMaybe<Scalars['Boolean']>;
  orc?: InputMaybe<Scalars['Boolean']>;
  primordial?: InputMaybe<Scalars['Boolean']>;
  sylvan?: InputMaybe<Scalars['Boolean']>;
  undercommon?: InputMaybe<Scalars['Boolean']>;
};

export type CreateMagicInput = {
  attribute: AttributesEnum;
  cantrips?: InputMaybe<Scalars['Int']>;
  isMage?: InputMaybe<Scalars['Boolean']>;
  knownSpells?: InputMaybe<Scalars['Int']>;
  level1AvailableSpells?: InputMaybe<Scalars['Int']>;
  level1Spells?: InputMaybe<Scalars['Int']>;
  level2AvailableSpells?: InputMaybe<Scalars['Int']>;
  level2Spells?: InputMaybe<Scalars['Int']>;
  level3AvailableSpells?: InputMaybe<Scalars['Int']>;
  level3Spells?: InputMaybe<Scalars['Int']>;
  level4AvailableSpells?: InputMaybe<Scalars['Int']>;
  level4Spells?: InputMaybe<Scalars['Int']>;
  level5AvailableSpells?: InputMaybe<Scalars['Int']>;
  level5Spells?: InputMaybe<Scalars['Int']>;
  level6AvailableSpells?: InputMaybe<Scalars['Int']>;
  level6Spells?: InputMaybe<Scalars['Int']>;
  level7AvailableSpells?: InputMaybe<Scalars['Int']>;
  level7Spells?: InputMaybe<Scalars['Int']>;
  level8AvailableSpells?: InputMaybe<Scalars['Int']>;
  level8Spells?: InputMaybe<Scalars['Int']>;
  level9AvailableSpells?: InputMaybe<Scalars['Int']>;
  level9Spells?: InputMaybe<Scalars['Int']>;
  preparedSpells?: InputMaybe<Scalars['Boolean']>;
  ritualCaster?: InputMaybe<Scalars['Boolean']>;
};

export type CreatePlayerInput = {
  age: Scalars['Int'];
  alignment: Alignment;
  armorClass: Scalars['Int'];
  class: Class;
  currentHitPoints: Scalars['Int'];
  currentTemporaryHitPoints: Scalars['Int'];
  hitPoints: Scalars['Int'];
  inspiration: Scalars['Boolean'];
  level: Scalars['Int'];
  movement: Scalars['Float'];
  name: Scalars['String'];
  playerImageUrl?: InputMaybe<Scalars['String']>;
  race: Race;
  size: Size;
  temporaryHitPoints: Scalars['Int'];
};

export type CreateSkillsInput = {
  acrobatics?: InputMaybe<Scalars['Int']>;
  acrobaticsExp?: InputMaybe<Scalars['Boolean']>;
  acrobaticsProf?: InputMaybe<Scalars['Boolean']>;
  animalHandling?: InputMaybe<Scalars['Int']>;
  animalHandlingExp?: InputMaybe<Scalars['Boolean']>;
  animalHandlingProf?: InputMaybe<Scalars['Boolean']>;
  arcana?: InputMaybe<Scalars['Int']>;
  arcanaExp?: InputMaybe<Scalars['Boolean']>;
  arcanaProf?: InputMaybe<Scalars['Boolean']>;
  athletics?: InputMaybe<Scalars['Int']>;
  athleticsExp?: InputMaybe<Scalars['Boolean']>;
  athleticsProf?: InputMaybe<Scalars['Boolean']>;
  deception?: InputMaybe<Scalars['Int']>;
  deceptionExp?: InputMaybe<Scalars['Boolean']>;
  deceptionProf?: InputMaybe<Scalars['Boolean']>;
  history?: InputMaybe<Scalars['Int']>;
  historyExp?: InputMaybe<Scalars['Boolean']>;
  historyProf?: InputMaybe<Scalars['Boolean']>;
  insight?: InputMaybe<Scalars['Int']>;
  insightExp?: InputMaybe<Scalars['Boolean']>;
  insightProf?: InputMaybe<Scalars['Boolean']>;
  intimidation?: InputMaybe<Scalars['Int']>;
  intimidationExp?: InputMaybe<Scalars['Boolean']>;
  intimidationProf?: InputMaybe<Scalars['Boolean']>;
  investigation?: InputMaybe<Scalars['Int']>;
  investigationExp?: InputMaybe<Scalars['Boolean']>;
  investigationProf?: InputMaybe<Scalars['Boolean']>;
  medicine?: InputMaybe<Scalars['Int']>;
  medicineExp?: InputMaybe<Scalars['Boolean']>;
  medicineProf?: InputMaybe<Scalars['Boolean']>;
  nature?: InputMaybe<Scalars['Int']>;
  natureExp?: InputMaybe<Scalars['Boolean']>;
  natureProf?: InputMaybe<Scalars['Boolean']>;
  perception?: InputMaybe<Scalars['Int']>;
  perceptionExp?: InputMaybe<Scalars['Boolean']>;
  perceptionProf?: InputMaybe<Scalars['Boolean']>;
  performance?: InputMaybe<Scalars['Int']>;
  performanceExp?: InputMaybe<Scalars['Boolean']>;
  performanceProf?: InputMaybe<Scalars['Boolean']>;
  persuasion?: InputMaybe<Scalars['Int']>;
  persuasionExp?: InputMaybe<Scalars['Boolean']>;
  persuasionProf?: InputMaybe<Scalars['Boolean']>;
  religion?: InputMaybe<Scalars['Int']>;
  religionExp?: InputMaybe<Scalars['Boolean']>;
  religionProf?: InputMaybe<Scalars['Boolean']>;
  sleightOfHand?: InputMaybe<Scalars['Int']>;
  sleightOfHandExp?: InputMaybe<Scalars['Boolean']>;
  sleightOfHandProf?: InputMaybe<Scalars['Boolean']>;
  stealth?: InputMaybe<Scalars['Int']>;
  stealthExp?: InputMaybe<Scalars['Boolean']>;
  stealthProf?: InputMaybe<Scalars['Boolean']>;
  survival?: InputMaybe<Scalars['Int']>;
  survivalExp?: InputMaybe<Scalars['Boolean']>;
  survivalProf?: InputMaybe<Scalars['Boolean']>;
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

export type Feat = {
  __typename?: 'Feat';
  description: Scalars['String'];
  iconUrl: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  players?: Maybe<Array<Maybe<Player>>>;
};

export type Language = {
  __typename?: 'Language';
  /** Boolean que determina se o jogador conhece o idioma abissal */
  abyssal?: Maybe<Scalars['Boolean']>;
  /** Boolean que determina se o jogador conhece o idioma celestial */
  celestial?: Maybe<Scalars['Boolean']>;
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

export type Magic = {
  __typename?: 'Magic';
  attribute: AttributesEnum;
  /** Quantidade de truques disponíveis */
  cantrips: Scalars['Int'];
  id: Scalars['Int'];
  /** Informa se o jogador consegue preparar magias */
  isMage: Scalars['Boolean'];
  /** Quantidade de magias conhecidas */
  knownSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 1 disponíveis do jogador */
  level1AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 1 do jogador */
  level1Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 2 disponíveis do jogador */
  level2AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 2 do jogador */
  level2Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 3 disponíveis do jogador */
  level3AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 3 do jogador */
  level3Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 4 disponíveis do jogador */
  level4AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 4 do jogador */
  level4Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 5 disponíveis do jogador */
  level5AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 5 do jogador */
  level5Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 6 disponíveis do jogador */
  level6AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 6 do jogador */
  level6Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 7 disponíveis do jogador */
  level7AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 7 do jogador */
  level7Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 8 disponíveis do jogador */
  level8AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 8 do jogador */
  level8Spells: Scalars['Int'];
  /** Total de espaços de magia do círculo 9 disponíveis do jogador */
  level9AvailableSpells: Scalars['Int'];
  /** Total de espaços de magia do círculo 9 do jogador */
  level9Spells: Scalars['Int'];
  playerId: Scalars['Int'];
  /** Informa se o jogador consegue preparar magias */
  preparedSpells: Scalars['Boolean'];
  /** Informa se o jogador consegue conjurar magias como ritual */
  ritualCaster: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  connectFeatToPlayer: PlayerOnFeat;
  createFeat: Feat;
  createPlayer: Player;
  createPlayerMagic: Magic;
  updatePlayer: Player;
  updatePlayerAttributes: Attributes;
  updatePlayerCurrency: Currency;
  updatePlayerLanguage: Language;
  updatePlayerMagic: Magic;
  updatePlayerSkills: Skills;
};


export type MutationConnectFeatToPlayerArgs = {
  payload: ConnectFeatToPlayerInput;
};


export type MutationCreateFeatArgs = {
  payload: CreateFeatInput;
};


export type MutationCreatePlayerArgs = {
  attributesPayload?: InputMaybe<CreateAttributesInput>;
  currencyPayload?: InputMaybe<CreateCurrencyInput>;
  languagesPayload?: InputMaybe<CreateLanguagesInput>;
  magicPayload?: InputMaybe<CreateMagicInput>;
  playerPayload: CreatePlayerInput;
  skillsPayload?: InputMaybe<CreateSkillsInput>;
};


export type MutationCreatePlayerMagicArgs = {
  payload: CreateMagicInput;
  playerId: Scalars['Float'];
};


export type MutationUpdatePlayerArgs = {
  payload: UpdatePlayerInput;
  playerId: Scalars['Float'];
};


export type MutationUpdatePlayerAttributesArgs = {
  payload: UpdateAttributesInput;
  playerId: Scalars['Float'];
};


export type MutationUpdatePlayerCurrencyArgs = {
  payload: UpdateCurrencyInput;
  playerId: Scalars['Float'];
};


export type MutationUpdatePlayerLanguageArgs = {
  payload: UpdateLanguagesInput;
  playerId: Scalars['Float'];
};


export type MutationUpdatePlayerMagicArgs = {
  payload: UpdateMagicInput;
  playerId: Scalars['Float'];
};


export type MutationUpdatePlayerSkillsArgs = {
  payload: UpdateSkillsInput;
  playerId: Scalars['Float'];
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
  magic?: Maybe<Magic>;
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

export type PlayerOnFeat = {
  __typename?: 'PlayerOnFeat';
  active: Scalars['Boolean'];
  currentCharges?: Maybe<Scalars['Int']>;
  featId: Scalars['Int'];
  playerId: Scalars['Int'];
  source: Scalars['String'];
  totalCharges?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getAllFeats: Array<Feat>;
  getAllPlayers: Array<Player>;
  getFeatsFromPlayer: Array<Maybe<Feat>>;
  getPlayerById: Player;
  getPlayersFromFeat: Array<Maybe<Player>>;
};


export type QueryGetFeatsFromPlayerArgs = {
  playerId: Scalars['Float'];
};


export type QueryGetPlayerByIdArgs = {
  playerId: Scalars['Float'];
};


export type QueryGetPlayersFromFeatArgs = {
  featId: Scalars['Float'];
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
  acrobatics: Scalars['Int'];
  /** Existência de expertise em acrobacia */
  acrobaticsExp: Scalars['Boolean'];
  /** Existência de proficiência em acrobacia */
  acrobaticsProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade lidar com animais */
  animalHandling: Scalars['Int'];
  /** Existência de expertise em lidar com animais */
  animalHandlingExp: Scalars['Boolean'];
  /** Existência de proficiência em lidar com animais */
  animalHandlingProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade arcanismo */
  arcana: Scalars['Int'];
  /** Existência de expertise em arcanismo */
  arcanaExp: Scalars['Boolean'];
  /** Existência de proficiência em arcanismo */
  arcanaProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade atletismo */
  athletics: Scalars['Int'];
  /** Existência de expertise em atletismo */
  athleticsExp: Scalars['Boolean'];
  /** Existência de proficiência em atletismo */
  athleticsProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade enganação */
  deception: Scalars['Int'];
  /** Existência de expertise em enganação */
  deceptionExp: Scalars['Boolean'];
  /** Existência de proficiência em enganação */
  deceptionProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade história */
  history: Scalars['Int'];
  /** Existência de expertise em história */
  historyExp: Scalars['Boolean'];
  /** Existência de proficiência em história */
  historyProf: Scalars['Boolean'];
  id: Scalars['Int'];
  /** Modificador bônus da habilidade intuição */
  insight: Scalars['Int'];
  /** Existência de expertise em intuição */
  insightExp: Scalars['Boolean'];
  /** Existência de proficiência em intuição */
  insightProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade intimidação */
  intimidation: Scalars['Int'];
  /** Existência de expertise em intimidação */
  intimidationExp: Scalars['Boolean'];
  /** Existência de proficiência em intimidação */
  intimidationProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade investigação */
  investigation: Scalars['Int'];
  /** Existência de expertise em investigação */
  investigationExp: Scalars['Boolean'];
  /** Existência de proficiência em investigação */
  investigationProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade medicina */
  medicine: Scalars['Int'];
  /** Existência de expertise em medicina */
  medicineExp: Scalars['Boolean'];
  /** Existência de proficiência em medicina */
  medicineProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade natureza */
  nature: Scalars['Int'];
  /** Existência de expertise em natureza */
  natureExp: Scalars['Boolean'];
  /** Existência de proficiência em natureza */
  natureProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade percepção */
  perception: Scalars['Int'];
  /** Existência de expertise em percepção */
  perceptionExp: Scalars['Boolean'];
  /** Existência de proficiência em percepção */
  perceptionProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade atuação */
  performance: Scalars['Int'];
  /** Existência de expertise em atuação */
  performanceExp: Scalars['Boolean'];
  /** Existência de proficiência em atuação */
  performanceProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade persuasão */
  persuasion: Scalars['Int'];
  /** Existência de expertise em persuasão */
  persuasionExp: Scalars['Boolean'];
  /** Existência de proficiência em persuasão */
  persuasionProf: Scalars['Boolean'];
  playerId: Scalars['Int'];
  /** Modificador bônus da habilidade religião */
  religion: Scalars['Int'];
  /** Existência de expertise em religião */
  religionExp: Scalars['Boolean'];
  /** Existência de proficiência em religião */
  religionProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade prestidigitação */
  sleightOfHand: Scalars['Int'];
  /** Existência de expertise em prestidigitação */
  sleightOfHandExp: Scalars['Boolean'];
  /** Existência de proficiência em prestidigitação */
  sleightOfHandProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade furtividade */
  stealth: Scalars['Int'];
  /** Existência de expertise em furtividade */
  stealthExp: Scalars['Boolean'];
  /** Existência de proficiência em furtividade */
  stealthProf: Scalars['Boolean'];
  /** Modificador bônus da habilidade sobrevivência */
  survival: Scalars['Int'];
  /** Existência de expertise em sobrevivência */
  survivalExp: Scalars['Boolean'];
  /** Existência de proficiência em sobrevivência */
  survivalProf: Scalars['Boolean'];
};

export type UpdateAttributesInput = {
  cha?: Scalars['Int'];
  chaSave?: Scalars['Boolean'];
  con?: Scalars['Int'];
  conSave?: Scalars['Boolean'];
  dex?: Scalars['Int'];
  dexSave?: Scalars['Boolean'];
  int?: Scalars['Int'];
  intSave?: Scalars['Boolean'];
  str?: Scalars['Int'];
  strSave?: Scalars['Boolean'];
  wis?: Scalars['Int'];
  wisSave?: Scalars['Boolean'];
};

export type UpdateCurrencyInput = {
  copper?: InputMaybe<Scalars['Int']>;
  elektrum?: InputMaybe<Scalars['Int']>;
  gold?: InputMaybe<Scalars['Int']>;
  platinum?: InputMaybe<Scalars['Int']>;
  silver?: InputMaybe<Scalars['Int']>;
};

export type UpdateLanguagesInput = {
  abyssal?: InputMaybe<Scalars['Boolean']>;
  celestial?: InputMaybe<Scalars['Boolean']>;
  common?: InputMaybe<Scalars['Boolean']>;
  deepSpeech?: InputMaybe<Scalars['Boolean']>;
  draconic?: InputMaybe<Scalars['Boolean']>;
  dwarvish?: InputMaybe<Scalars['Boolean']>;
  elvish?: InputMaybe<Scalars['Boolean']>;
  giant?: InputMaybe<Scalars['Boolean']>;
  gnomish?: InputMaybe<Scalars['Boolean']>;
  goblin?: InputMaybe<Scalars['Boolean']>;
  halfling?: InputMaybe<Scalars['Boolean']>;
  infernal?: InputMaybe<Scalars['Boolean']>;
  orc?: InputMaybe<Scalars['Boolean']>;
  primordial?: InputMaybe<Scalars['Boolean']>;
  sylvan?: InputMaybe<Scalars['Boolean']>;
  undercommon?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateMagicInput = {
  attribute?: InputMaybe<AttributesEnum>;
  cantrips?: InputMaybe<Scalars['Int']>;
  isMage?: InputMaybe<Scalars['Boolean']>;
  knownSpells?: InputMaybe<Scalars['Int']>;
  level1AvailableSpells?: InputMaybe<Scalars['Int']>;
  level1Spells?: InputMaybe<Scalars['Int']>;
  level2AvailableSpells?: InputMaybe<Scalars['Int']>;
  level2Spells?: InputMaybe<Scalars['Int']>;
  level3AvailableSpells?: InputMaybe<Scalars['Int']>;
  level3Spells?: InputMaybe<Scalars['Int']>;
  level4AvailableSpells?: InputMaybe<Scalars['Int']>;
  level4Spells?: InputMaybe<Scalars['Int']>;
  level5AvailableSpells?: InputMaybe<Scalars['Int']>;
  level5Spells?: InputMaybe<Scalars['Int']>;
  level6AvailableSpells?: InputMaybe<Scalars['Int']>;
  level6Spells?: InputMaybe<Scalars['Int']>;
  level7AvailableSpells?: InputMaybe<Scalars['Int']>;
  level7Spells?: InputMaybe<Scalars['Int']>;
  level8AvailableSpells?: InputMaybe<Scalars['Int']>;
  level8Spells?: InputMaybe<Scalars['Int']>;
  level9AvailableSpells?: InputMaybe<Scalars['Int']>;
  level9Spells?: InputMaybe<Scalars['Int']>;
  preparedSpells?: InputMaybe<Scalars['Boolean']>;
  ritualCaster?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePlayerInput = {
  age?: InputMaybe<Scalars['Int']>;
  alignment?: InputMaybe<Alignment>;
  armorClass?: InputMaybe<Scalars['Int']>;
  class?: InputMaybe<Class>;
  currentHitPoints?: InputMaybe<Scalars['Int']>;
  currentTemporaryHitPoints?: InputMaybe<Scalars['Int']>;
  hitPoints?: InputMaybe<Scalars['Int']>;
  inspiration?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  movement?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  playerImageUrl?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Race>;
  size?: InputMaybe<Size>;
  temporaryHitPoints?: InputMaybe<Scalars['Int']>;
};

export type UpdateSkillsInput = {
  acrobatics?: InputMaybe<Scalars['Int']>;
  acrobaticsExp?: InputMaybe<Scalars['Boolean']>;
  acrobaticsProf?: InputMaybe<Scalars['Boolean']>;
  animalHandling?: InputMaybe<Scalars['Int']>;
  animalHandlingExp?: InputMaybe<Scalars['Boolean']>;
  animalHandlingProf?: InputMaybe<Scalars['Boolean']>;
  arcana?: InputMaybe<Scalars['Int']>;
  arcanaExp?: InputMaybe<Scalars['Boolean']>;
  arcanaProf?: InputMaybe<Scalars['Boolean']>;
  athletics?: InputMaybe<Scalars['Int']>;
  athleticsExp?: InputMaybe<Scalars['Boolean']>;
  athleticsProf?: InputMaybe<Scalars['Boolean']>;
  deception?: InputMaybe<Scalars['Int']>;
  deceptionExp?: InputMaybe<Scalars['Boolean']>;
  deceptionProf?: InputMaybe<Scalars['Boolean']>;
  history?: InputMaybe<Scalars['Int']>;
  historyExp?: InputMaybe<Scalars['Boolean']>;
  historyProf?: InputMaybe<Scalars['Boolean']>;
  insight?: InputMaybe<Scalars['Int']>;
  insightExp?: InputMaybe<Scalars['Boolean']>;
  insightProf?: InputMaybe<Scalars['Boolean']>;
  intimidation?: InputMaybe<Scalars['Int']>;
  intimidationExp?: InputMaybe<Scalars['Boolean']>;
  intimidationProf?: InputMaybe<Scalars['Boolean']>;
  investigation?: InputMaybe<Scalars['Int']>;
  investigationExp?: InputMaybe<Scalars['Boolean']>;
  investigationProf?: InputMaybe<Scalars['Boolean']>;
  medicine?: InputMaybe<Scalars['Int']>;
  medicineExp?: InputMaybe<Scalars['Boolean']>;
  medicineProf?: InputMaybe<Scalars['Boolean']>;
  nature?: InputMaybe<Scalars['Int']>;
  natureExp?: InputMaybe<Scalars['Boolean']>;
  natureProf?: InputMaybe<Scalars['Boolean']>;
  perception?: InputMaybe<Scalars['Int']>;
  perceptionExp?: InputMaybe<Scalars['Boolean']>;
  perceptionProf?: InputMaybe<Scalars['Boolean']>;
  performance?: InputMaybe<Scalars['Int']>;
  performanceExp?: InputMaybe<Scalars['Boolean']>;
  performanceProf?: InputMaybe<Scalars['Boolean']>;
  persuasion?: InputMaybe<Scalars['Int']>;
  persuasionExp?: InputMaybe<Scalars['Boolean']>;
  persuasionProf?: InputMaybe<Scalars['Boolean']>;
  religion?: InputMaybe<Scalars['Int']>;
  religionExp?: InputMaybe<Scalars['Boolean']>;
  religionProf?: InputMaybe<Scalars['Boolean']>;
  sleightOfHand?: InputMaybe<Scalars['Int']>;
  sleightOfHandExp?: InputMaybe<Scalars['Boolean']>;
  sleightOfHandProf?: InputMaybe<Scalars['Boolean']>;
  stealth?: InputMaybe<Scalars['Int']>;
  stealthExp?: InputMaybe<Scalars['Boolean']>;
  stealthProf?: InputMaybe<Scalars['Boolean']>;
  survival?: InputMaybe<Scalars['Int']>;
  survivalExp?: InputMaybe<Scalars['Boolean']>;
  survivalProf?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePlayerAttributesMutationVariables = Exact<{
  playerId: Scalars['Float'];
  payload: UpdateAttributesInput;
}>;


export type UpdatePlayerAttributesMutation = { __typename?: 'Mutation', updatePlayerAttributes: { __typename?: 'Attributes', playerId: number } };

export type UpdatePlayerCurrencyMutationVariables = Exact<{
  playerId: Scalars['Float'];
  payload: UpdateCurrencyInput;
}>;


export type UpdatePlayerCurrencyMutation = { __typename?: 'Mutation', updatePlayerCurrency: { __typename?: 'Currency', playerId: number } };

export type FeatFragment = { __typename?: 'Feat', id: number, name: string, description: string, iconUrl: string, players?: Array<{ __typename?: 'Player', name: string, id: number } | null> | null };

export type GetAllFeatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFeatsQuery = { __typename?: 'Query', getAllFeats: Array<{ __typename?: 'Feat', id: number, name: string, description: string, iconUrl: string, players?: Array<{ __typename?: 'Player', name: string, id: number } | null> | null }> };

export type UpdatePlayerLanguageMutationVariables = Exact<{
  playerId: Scalars['Float'];
  payload: UpdateLanguagesInput;
}>;


export type UpdatePlayerLanguageMutation = { __typename?: 'Mutation', updatePlayerLanguage: { __typename?: 'Language', playerId: number } };

export type UpdatePlayerMagicMutationVariables = Exact<{
  playerId: Scalars['Float'];
  payload: UpdateMagicInput;
}>;


export type UpdatePlayerMagicMutation = { __typename?: 'Mutation', updatePlayerMagic: { __typename?: 'Magic', playerId: number } };

export type GetAllPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlayersQuery = { __typename?: 'Query', getAllPlayers: Array<{ __typename?: 'Player', armorClass: number, class: Class, currentHitPoints: number, currentTemporaryHitPoints: number, hitPoints: number, id: number, inspiration: boolean, movement: number, name: string, playerImageUrl?: string | null, race: Race, level: number, size: Size, temporaryHitPoints: number, currency?: { __typename?: 'Currency', gold: number, copper: number, platinum: number, silver: number, elektrum: number } | null, language?: { __typename?: 'Language', abyssal?: boolean | null, celestial?: boolean | null, common?: boolean | null, deepSpeech?: boolean | null, draconic?: boolean | null, dwarvish?: boolean | null, elvish?: boolean | null, giant?: boolean | null, gnomish?: boolean | null, goblin?: boolean | null, halfling?: boolean | null, infernal?: boolean | null, orc?: boolean | null, primordial?: boolean | null, sylvan?: boolean | null, undercommon?: boolean | null } | null, attributes?: { __typename?: 'Attributes', str: number, dex: number, con: number, wis: number, int: number, cha: number, chaSave?: boolean | null, conSave?: boolean | null, dexSave?: boolean | null, intSave?: boolean | null, strSave?: boolean | null, wisSave?: boolean | null } | null, skills?: { __typename?: 'Skills', acrobatics: number, acrobaticsProf: boolean, acrobaticsExp: boolean, animalHandling: number, animalHandlingProf: boolean, animalHandlingExp: boolean, arcana: number, arcanaProf: boolean, arcanaExp: boolean, athletics: number, athleticsProf: boolean, athleticsExp: boolean, deception: number, deceptionProf: boolean, deceptionExp: boolean, history: number, historyProf: boolean, historyExp: boolean, insight: number, insightProf: boolean, insightExp: boolean, intimidation: number, intimidationProf: boolean, intimidationExp: boolean, investigation: number, investigationProf: boolean, investigationExp: boolean, medicine: number, medicineProf: boolean, medicineExp: boolean, nature: number, natureProf: boolean, natureExp: boolean, perception: number, perceptionProf: boolean, perceptionExp: boolean, performance: number, performanceProf: boolean, performanceExp: boolean, persuasion: number, persuasionProf: boolean, persuasionExp: boolean, religion: number, religionProf: boolean, religionExp: boolean, sleightOfHand: number, sleightOfHandProf: boolean, sleightOfHandExp: boolean, stealth: number, stealthProf: boolean, stealthExp: boolean, survival: number, survivalProf: boolean, survivalExp: boolean } | null }> };

export type GetPlayerByIdQueryVariables = Exact<{
  playerId: Scalars['Float'];
}>;


export type GetPlayerByIdQuery = { __typename?: 'Query', getPlayerById: { __typename?: 'Player', armorClass: number, class: Class, currentHitPoints: number, currentTemporaryHitPoints: number, hitPoints: number, id: number, inspiration: boolean, movement: number, name: string, playerImageUrl?: string | null, race: Race, level: number, size: Size, temporaryHitPoints: number, currency?: { __typename?: 'Currency', gold: number, copper: number, platinum: number, silver: number, elektrum: number } | null, language?: { __typename?: 'Language', abyssal?: boolean | null, celestial?: boolean | null, common?: boolean | null, deepSpeech?: boolean | null, draconic?: boolean | null, dwarvish?: boolean | null, elvish?: boolean | null, giant?: boolean | null, gnomish?: boolean | null, goblin?: boolean | null, halfling?: boolean | null, infernal?: boolean | null, orc?: boolean | null, primordial?: boolean | null, sylvan?: boolean | null, undercommon?: boolean | null } | null, attributes?: { __typename?: 'Attributes', str: number, dex: number, con: number, wis: number, int: number, cha: number, chaSave?: boolean | null, conSave?: boolean | null, dexSave?: boolean | null, intSave?: boolean | null, strSave?: boolean | null, wisSave?: boolean | null } | null, skills?: { __typename?: 'Skills', acrobatics: number, acrobaticsProf: boolean, acrobaticsExp: boolean, animalHandling: number, animalHandlingProf: boolean, animalHandlingExp: boolean, arcana: number, arcanaProf: boolean, arcanaExp: boolean, athletics: number, athleticsProf: boolean, athleticsExp: boolean, deception: number, deceptionProf: boolean, deceptionExp: boolean, history: number, historyProf: boolean, historyExp: boolean, insight: number, insightProf: boolean, insightExp: boolean, intimidation: number, intimidationProf: boolean, intimidationExp: boolean, investigation: number, investigationProf: boolean, investigationExp: boolean, medicine: number, medicineProf: boolean, medicineExp: boolean, nature: number, natureProf: boolean, natureExp: boolean, perception: number, perceptionProf: boolean, perceptionExp: boolean, performance: number, performanceProf: boolean, performanceExp: boolean, persuasion: number, persuasionProf: boolean, persuasionExp: boolean, religion: number, religionProf: boolean, religionExp: boolean, sleightOfHand: number, sleightOfHandProf: boolean, sleightOfHandExp: boolean, stealth: number, stealthProf: boolean, stealthExp: boolean, survival: number, survivalProf: boolean, survivalExp: boolean } | null } };

export type PlayerFragment = { __typename?: 'Player', armorClass: number, class: Class, currentHitPoints: number, currentTemporaryHitPoints: number, hitPoints: number, id: number, inspiration: boolean, movement: number, name: string, playerImageUrl?: string | null, race: Race, level: number, size: Size, temporaryHitPoints: number, currency?: { __typename?: 'Currency', gold: number, copper: number, platinum: number, silver: number, elektrum: number } | null, language?: { __typename?: 'Language', abyssal?: boolean | null, celestial?: boolean | null, common?: boolean | null, deepSpeech?: boolean | null, draconic?: boolean | null, dwarvish?: boolean | null, elvish?: boolean | null, giant?: boolean | null, gnomish?: boolean | null, goblin?: boolean | null, halfling?: boolean | null, infernal?: boolean | null, orc?: boolean | null, primordial?: boolean | null, sylvan?: boolean | null, undercommon?: boolean | null } | null, attributes?: { __typename?: 'Attributes', str: number, dex: number, con: number, wis: number, int: number, cha: number, chaSave?: boolean | null, conSave?: boolean | null, dexSave?: boolean | null, intSave?: boolean | null, strSave?: boolean | null, wisSave?: boolean | null } | null, skills?: { __typename?: 'Skills', acrobatics: number, acrobaticsProf: boolean, acrobaticsExp: boolean, animalHandling: number, animalHandlingProf: boolean, animalHandlingExp: boolean, arcana: number, arcanaProf: boolean, arcanaExp: boolean, athletics: number, athleticsProf: boolean, athleticsExp: boolean, deception: number, deceptionProf: boolean, deceptionExp: boolean, history: number, historyProf: boolean, historyExp: boolean, insight: number, insightProf: boolean, insightExp: boolean, intimidation: number, intimidationProf: boolean, intimidationExp: boolean, investigation: number, investigationProf: boolean, investigationExp: boolean, medicine: number, medicineProf: boolean, medicineExp: boolean, nature: number, natureProf: boolean, natureExp: boolean, perception: number, perceptionProf: boolean, perceptionExp: boolean, performance: number, performanceProf: boolean, performanceExp: boolean, persuasion: number, persuasionProf: boolean, persuasionExp: boolean, religion: number, religionProf: boolean, religionExp: boolean, sleightOfHand: number, sleightOfHandProf: boolean, sleightOfHandExp: boolean, stealth: number, stealthProf: boolean, stealthExp: boolean, survival: number, survivalProf: boolean, survivalExp: boolean } | null };

export type UpdatePlayerMutationVariables = Exact<{
  playerId: Scalars['Float'];
  payload: UpdatePlayerInput;
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayer: { __typename?: 'Player', armorClass: number, class: Class, currentHitPoints: number, currentTemporaryHitPoints: number, hitPoints: number, id: number, inspiration: boolean, movement: number, name: string, playerImageUrl?: string | null, race: Race, level: number, size: Size, temporaryHitPoints: number, currency?: { __typename?: 'Currency', gold: number, copper: number, platinum: number, silver: number, elektrum: number } | null, language?: { __typename?: 'Language', abyssal?: boolean | null, celestial?: boolean | null, common?: boolean | null, deepSpeech?: boolean | null, draconic?: boolean | null, dwarvish?: boolean | null, elvish?: boolean | null, giant?: boolean | null, gnomish?: boolean | null, goblin?: boolean | null, halfling?: boolean | null, infernal?: boolean | null, orc?: boolean | null, primordial?: boolean | null, sylvan?: boolean | null, undercommon?: boolean | null } | null, attributes?: { __typename?: 'Attributes', str: number, dex: number, con: number, wis: number, int: number, cha: number, chaSave?: boolean | null, conSave?: boolean | null, dexSave?: boolean | null, intSave?: boolean | null, strSave?: boolean | null, wisSave?: boolean | null } | null, skills?: { __typename?: 'Skills', acrobatics: number, acrobaticsProf: boolean, acrobaticsExp: boolean, animalHandling: number, animalHandlingProf: boolean, animalHandlingExp: boolean, arcana: number, arcanaProf: boolean, arcanaExp: boolean, athletics: number, athleticsProf: boolean, athleticsExp: boolean, deception: number, deceptionProf: boolean, deceptionExp: boolean, history: number, historyProf: boolean, historyExp: boolean, insight: number, insightProf: boolean, insightExp: boolean, intimidation: number, intimidationProf: boolean, intimidationExp: boolean, investigation: number, investigationProf: boolean, investigationExp: boolean, medicine: number, medicineProf: boolean, medicineExp: boolean, nature: number, natureProf: boolean, natureExp: boolean, perception: number, perceptionProf: boolean, perceptionExp: boolean, performance: number, performanceProf: boolean, performanceExp: boolean, persuasion: number, persuasionProf: boolean, persuasionExp: boolean, religion: number, religionProf: boolean, religionExp: boolean, sleightOfHand: number, sleightOfHandProf: boolean, sleightOfHandExp: boolean, stealth: number, stealthProf: boolean, stealthExp: boolean, survival: number, survivalProf: boolean, survivalExp: boolean } | null } };

export type UpdatePlayerSkillsMutationVariables = Exact<{
  playerId: Scalars['Float'];
  payload: UpdateSkillsInput;
}>;


export type UpdatePlayerSkillsMutation = { __typename?: 'Mutation', updatePlayerSkills: { __typename?: 'Skills', playerId: number } };
