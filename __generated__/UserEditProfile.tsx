import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserEditProfileVariables = Types.Exact<{
  input: Types.EditProfileRequest;
}>;

export type UserEditProfile = {
  __typename: 'Mutation';
  userEditProfile: {
    __typename: 'EditProfileResponse';
    user?: {
      __typename: 'UserModel';
      birthDate?: string | null;
      email: string;
      firstName?: string | null;
      gender?: string | null;
      lastName?: string | null;
      phone?: string | null;
      avatarUrl?: string | null;
    } | null;
  };
};

export const UserEditProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {kind: 'Name', value: 'userEditProfile'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'EditProfileRequest'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'userEditProfile'},
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
                {
                  kind: 'Field',
                  name: {kind: 'Name', value: 'user'},
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {kind: 'Field', name: {kind: 'Name', value: 'birthDate'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'email'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'firstName'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'gender'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'lastName'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'phone'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'avatarUrl'}},
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type UserEditProfileMutationFn = Apollo.MutationFunction<
  UserEditProfile,
  UserEditProfileVariables
>;

/**
 * __useUserEditProfile__
 *
 * To run a mutation, you first call `useUserEditProfile` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserEditProfile` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userEditProfile, { data, loading, error }] = useUserEditProfile({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserEditProfile(
  baseOptions?: Apollo.MutationHookOptions<
    UserEditProfile,
    UserEditProfileVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<UserEditProfile, UserEditProfileVariables>(
    UserEditProfileDocument,
    options,
  );
}
export type UserEditProfileHookResult = ReturnType<typeof useUserEditProfile>;
export type UserEditProfileMutationResult =
  Apollo.MutationResult<UserEditProfile>;
export type UserEditProfileMutationOptions = Apollo.BaseMutationOptions<
  UserEditProfile,
  UserEditProfileVariables
>;
