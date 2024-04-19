import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeletePostVariables = Types.Exact<{
  input: Types.PostIdRequest;
}>;

export type DeletePost = {
  __typename: 'Mutation';
  postDelete: {__typename: 'DeletePostResponse'; id: string};
};

export const DeletePostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {kind: 'Name', value: 'deletePost'},
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
            name: {kind: 'Name', value: 'postDelete'},
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
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePost,
  DeletePostVariables
>;

/**
 * __useDeletePost__
 *
 * To run a mutation, you first call `useDeletePost` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePost` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePost, { data, loading, error }] = useDeletePost({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePost(
  baseOptions?: Apollo.MutationHookOptions<DeletePost, DeletePostVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<DeletePost, DeletePostVariables>(
    DeletePostDocument,
    options,
  );
}
export type DeletePostHookResult = ReturnType<typeof useDeletePost>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePost>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePost,
  DeletePostVariables
>;
