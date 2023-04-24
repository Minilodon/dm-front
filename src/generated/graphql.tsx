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
  id
  name
  copper
  silver
  gold
  elektrum
  platinum
  playerImageUrl
}
    `;
export const CreatePlayerDocument = gql`
    mutation CreatePlayer($payload: CreatePlayerInput!) {
  createPlayer(payload: $payload) {
    id
    name
    playerImageUrl
    copper
    silver
    elektrum
    gold
    platinum
  }
}
    `;
export type CreatePlayerMutationFn = Apollo.MutationFunction<CreatePlayerMutation, CreatePlayerMutationVariables>;

/**
 * __useCreatePlayerMutation__
 *
 * To run a mutation, you first call `useCreatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlayerMutation, { data, loading, error }] = useCreatePlayerMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlayerMutation, CreatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument, options);
      }
export type CreatePlayerMutationHookResult = ReturnType<typeof useCreatePlayerMutation>;
export type CreatePlayerMutationResult = Apollo.MutationResult<CreatePlayerMutation>;
export type CreatePlayerMutationOptions = Apollo.BaseMutationOptions<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const DeletePlayerDocument = gql`
    mutation DeletePlayer($id: Int!) {
  deletePlayer(id: $id)
}
    `;
export type DeletePlayerMutationFn = Apollo.MutationFunction<DeletePlayerMutation, DeletePlayerMutationVariables>;

/**
 * __useDeletePlayerMutation__
 *
 * To run a mutation, you first call `useDeletePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlayerMutation, { data, loading, error }] = useDeletePlayerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlayerMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlayerMutation, DeletePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlayerMutation, DeletePlayerMutationVariables>(DeletePlayerDocument, options);
      }
export type DeletePlayerMutationHookResult = ReturnType<typeof useDeletePlayerMutation>;
export type DeletePlayerMutationResult = Apollo.MutationResult<DeletePlayerMutation>;
export type DeletePlayerMutationOptions = Apollo.BaseMutationOptions<DeletePlayerMutation, DeletePlayerMutationVariables>;
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
    query getPlayerById($id: Int!) {
  getPlayerById(id: $id) {
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
 *      id: // value for 'id'
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
    mutation UpdatePlayer($id: Int!, $payload: UpdatePlayerInput!) {
  updatePlayer(id: $id, payload: $payload) {
    copper
    silver
    elektrum
    gold
    platinum
    id
    name
    playerImageUrl
  }
}
    `;
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
 *      id: // value for 'id'
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePlayerInput = {
  copper?: InputMaybe<Scalars['Int']>;
  elektrum?: InputMaybe<Scalars['Int']>;
  gold?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  platinum?: InputMaybe<Scalars['Int']>;
  playerImageUrl?: InputMaybe<Scalars['String']>;
  silver?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlayer: Player;
  deletePlayer: Scalars['String'];
  updatePlayer: Player;
};


export type MutationCreatePlayerArgs = {
  payload: CreatePlayerInput;
};


export type MutationDeletePlayerArgs = {
  id: Scalars['Int'];
};


export type MutationUpdatePlayerArgs = {
  id: Scalars['Int'];
  payload: UpdatePlayerInput;
};

export type Player = {
  __typename?: 'Player';
  /** Quantidade de cobre do jogador */
  copper?: Maybe<Scalars['Int']>;
  /** Quantidade de elektro do jogador */
  elektrum?: Maybe<Scalars['Int']>;
  /** Quantidade de ouro do jogador */
  gold?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** Nome do jogador */
  name?: Maybe<Scalars['String']>;
  /** Quantidade de platina do jogador */
  platinum?: Maybe<Scalars['Int']>;
  /** Link da imagem de perfil do jogador */
  playerImageUrl?: Maybe<Scalars['String']>;
  /** Quantidade de prata do jogador */
  silver?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** retorna todos os jogadores salvos */
  getAllPlayers?: Maybe<Array<Player>>;
  /** retorna o jogador que possui o id passado */
  getPlayerById?: Maybe<Player>;
};


export type QueryGetPlayerByIdArgs = {
  id: Scalars['Int'];
};

export type UpdatePlayerInput = {
  copper?: InputMaybe<Scalars['Int']>;
  elektrum?: InputMaybe<Scalars['Int']>;
  gold?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platinum?: InputMaybe<Scalars['Int']>;
  playerImageUrl?: InputMaybe<Scalars['String']>;
  silver?: InputMaybe<Scalars['Int']>;
};

export type CreatePlayerMutationVariables = Exact<{
  payload: CreatePlayerInput;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename?: 'Player', id: number, name?: string | null, playerImageUrl?: string | null, copper?: number | null, silver?: number | null, elektrum?: number | null, gold?: number | null, platinum?: number | null } };

export type DeletePlayerMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePlayerMutation = { __typename?: 'Mutation', deletePlayer: string };

export type GetAllPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlayersQuery = { __typename?: 'Query', getAllPlayers?: Array<{ __typename?: 'Player', id: number, name?: string | null, copper?: number | null, silver?: number | null, gold?: number | null, elektrum?: number | null, platinum?: number | null, playerImageUrl?: string | null }> | null };

export type GetPlayerByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlayerByIdQuery = { __typename?: 'Query', getPlayerById?: { __typename?: 'Player', id: number, name?: string | null, copper?: number | null, silver?: number | null, gold?: number | null, elektrum?: number | null, platinum?: number | null, playerImageUrl?: string | null } | null };

export type PlayerFragment = { __typename?: 'Player', id: number, name?: string | null, copper?: number | null, silver?: number | null, gold?: number | null, elektrum?: number | null, platinum?: number | null, playerImageUrl?: string | null };

export type UpdatePlayerMutationVariables = Exact<{
  id: Scalars['Int'];
  payload: UpdatePlayerInput;
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayer: { __typename?: 'Player', copper?: number | null, silver?: number | null, elektrum?: number | null, gold?: number | null, platinum?: number | null, id: number, name?: string | null, playerImageUrl?: string | null } };
