import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostLikeVariables = Types.Exact<{
  input: Types.PostIdRequest;
}>;

export type PostLike = {
  __typename: 'Mutation';
  postLike: {__typename: 'PostModel'; id: string};
};

export const PostLikeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {kind: 'Name', value: 'postLike'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'PostIdRequest'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'postLike'},
            arguments: [
              {
                kind: 'Argument',
                name: {kind: 'Name', value: 'input'},
                value: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{kind: 'Field', name: {kind: 'Name', value: 'id'}}],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type PostLikeMutationFn = Apollo.MutationFunction<
  PostLike,
  PostLikeVariables
>;

/**
 * __usePostLike__
 *
 * To run a mutation, you first call `usePostLike` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostLike` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postLike, { data, loading, error }] = usePostLike({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostLike(
  baseOptions?: Apollo.MutationHookOptions<PostLike, PostLikeVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<PostLike, PostLikeVariables>(
    PostLikeDocument,
    options,
  );
}
export type PostLikeHookResult = ReturnType<typeof usePostLike>;
export type PostLikeMutationResult = Apollo.MutationResult<PostLike>;
export type PostLikeMutationOptions = Apollo.BaseMutationOptions<
  PostLike,
  PostLikeVariables
>;
