import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateUserVariables = Types.Exact<{
  input: Types.SignUpRequest;
}>;

export type CreateUser = {
  __typename: 'Mutation';
  userSignUp: {__typename: 'SignUpResponse'; token?: string | null};
};

export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {kind: 'Name', value: 'createUser'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'SignUpRequest'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'userSignUp'},
            arguments: [
              {
                kind: 'Argument',
                name: {kind: 'Name', value: 'input'},
                value: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {kind: 'Field', name: {kind: 'Name', value: 'token'}},
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUser,
  CreateUserVariables
>;

/**
 * __useCreateUser__
 *
 * To run a mutation, you first call `useCreateUser` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUser` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUser, { data, loading, error }] = useCreateUser({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUser(
  baseOptions?: Apollo.MutationHookOptions<CreateUser, CreateUserVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<CreateUser, CreateUserVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserHookResult = ReturnType<typeof useCreateUser>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUser>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUser,
  CreateUserVariables
>;
