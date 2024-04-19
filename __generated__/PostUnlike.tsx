import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostUnLikeVariables = Types.Exact<{
  input: Types.PostIdRequest;
}>;

export type PostUnLike = {
  __typename: 'Mutation';
  postUnlike: {__typename: 'PostModel'; id: string};
};

export const PostUnLikeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {kind: 'Name', value: 'postUnLike'},
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
            name: {kind: 'Name', value: 'postUnlike'},
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
export type PostUnLikeMutationFn = Apollo.MutationFunction<
  PostUnLike,
  PostUnLikeVariables
>;

/**
 * __usePostUnLike__
 *
 * To run a mutation, you first call `usePostUnLike` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostUnLike` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postUnLike, { data, loading, error }] = usePostUnLike({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostUnLike(
  baseOptions?: Apollo.MutationHookOptions<PostUnLike, PostUnLikeVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<PostUnLike, PostUnLikeVariables>(
    PostUnLikeDocument,
    options,
  );
}
export type PostUnLikeHookResult = ReturnType<typeof usePostUnLike>;
export type PostUnLikeMutationResult = Apollo.MutationResult<PostUnLike>;
export type PostUnLikeMutationOptions = Apollo.BaseMutationOptions<
  PostUnLike,
  PostUnLikeVariables
>;
