import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUserVariables = Types.Exact<{[key: string]: never}>;

export type GetUser = {
  __typename: 'Query';
  userMe: {
    __typename: 'UserModel';
    avatarUrl?: string | null;
    birthDate?: string | null;
    country?: string | null;
    createdAt: string;
    deletedAt?: string | null;
    email: string;
    firstName?: string | null;
    gender?: string | null;
    id: string;
    lastName?: string | null;
    middleName?: string | null;
    phone?: string | null;
    updatedAt: string;
  };
};

export const GetUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {kind: 'Name', value: 'getUser'},
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'userMe'},
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {kind: 'Field', name: {kind: 'Name', value: 'avatarUrl'}},
                {kind: 'Field', name: {kind: 'Name', value: 'birthDate'}},
                {kind: 'Field', name: {kind: 'Name', value: 'country'}},
                {kind: 'Field', name: {kind: 'Name', value: 'createdAt'}},
                {kind: 'Field', name: {kind: 'Name', value: 'deletedAt'}},
                {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                {kind: 'Field', name: {kind: 'Name', value: 'gender'}},
                {kind: 'Field', name: {kind: 'Name', value: 'id'}},
                {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                {kind: 'Field', name: {kind: 'Name', value: 'middleName'}},
                {kind: 'Field', name: {kind: 'Name', value: 'phone'}},
                {kind: 'Field', name: {kind: 'Name', value: 'updatedAt'}},
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

/**
 * __useGetUser__
 *
 * To run a query within a React component, call `useGetUser` and pass it any options that fit your needs.
 * When your component renders, `useGetUser` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUser({
 *   variables: {
 *   },
 * });
 */
export function useGetUser(
  baseOptions?: Apollo.QueryHookOptions<GetUser, GetUserVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetUser, GetUserVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUser, GetUserVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetUser, GetUserVariables>(
    GetUserDocument,
    options,
  );
}
export type GetUserHookResult = ReturnType<typeof useGetUser>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUser, GetUserVariables>;
