import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostCreateVariables = Types.Exact<{
  input: Types.CreatePostRequest;
}>;

export type PostCreate = {
  __typename: 'Mutation';
  postCreate: {
    __typename: 'PostModel';
    description: string;
    title: string;
    mediaUrl: string;
  };
};

export const PostCreateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {kind: 'Name', value: 'postCreate'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'CreatePostRequest'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'postCreate'},
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
                {kind: 'Field', name: {kind: 'Name', value: 'description'}},
                {kind: 'Field', name: {kind: 'Name', value: 'title'}},
                {kind: 'Field', name: {kind: 'Name', value: 'mediaUrl'}},
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type PostCreateMutationFn = Apollo.MutationFunction<
  PostCreate,
  PostCreateVariables
>;

/**
 * __usePostCreate__
 *
 * To run a mutation, you first call `usePostCreate` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreate` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreate, { data, loading, error }] = usePostCreate({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostCreate(
  baseOptions?: Apollo.MutationHookOptions<PostCreate, PostCreateVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<PostCreate, PostCreateVariables>(
    PostCreateDocument,
    options,
  );
}
export type PostCreateHookResult = ReturnType<typeof usePostCreate>;
export type PostCreateMutationResult = Apollo.MutationResult<PostCreate>;
export type PostCreateMutationOptions = Apollo.BaseMutationOptions<
  PostCreate,
  PostCreateVariables
>;
