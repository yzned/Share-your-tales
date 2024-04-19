import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PostsVariables = Types.Exact<{
  input: Types.FindPostsRequest;
}>;

export type Posts = {
  __typename: 'Query';
  posts: {
    __typename: 'FindPostsPaginationResponse';
    data?: Array<{
      __typename: 'PostModel';
      createdAt: string;
      description: string;
      id: string;
      isLiked: boolean;
      likesCount: number;
      mediaUrl: string;
      title: string;
      author: {
        __typename: 'UserModel';
        firstName?: string | null;
        lastName?: string | null;
        avatarUrl?: string | null;
      };
    }> | null;
    pageInfo?: {
      __typename: 'PageAfterCursorInfo';
      afterCursor?: string | null;
      count: number;
      perPage: number;
    } | null;
  };
};

export const PostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {kind: 'Name', value: 'posts'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'FindPostsRequest'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'posts'},
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
                  name: {kind: 'Name', value: 'data'},
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'author'},
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {kind: 'Name', value: 'firstName'},
                            },
                            {
                              kind: 'Field',
                              name: {kind: 'Name', value: 'lastName'},
                            },
                            {
                              kind: 'Field',
                              name: {kind: 'Name', value: 'avatarUrl'},
                            },
                          ],
                        },
                      },
                      {kind: 'Field', name: {kind: 'Name', value: 'createdAt'}},
                      {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'description'},
                      },
                      {kind: 'Field', name: {kind: 'Name', value: 'id'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'isLiked'}},
                      {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'likesCount'},
                      },
                      {kind: 'Field', name: {kind: 'Name', value: 'mediaUrl'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'title'}},
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: {kind: 'Name', value: 'pageInfo'},
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {kind: 'Name', value: 'afterCursor'},
                      },
                      {kind: 'Field', name: {kind: 'Name', value: 'count'}},
                      {kind: 'Field', name: {kind: 'Name', value: 'perPage'}},
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

/**
 * __usePosts__
 *
 * To run a query within a React component, call `usePosts` and pass it any options that fit your needs.
 * When your component renders, `usePosts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePosts({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePosts(
  baseOptions: Apollo.QueryHookOptions<Posts, PostsVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<Posts, PostsVariables>(PostsDocument, options);
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Posts, PostsVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<Posts, PostsVariables>(PostsDocument, options);
}
export type PostsHookResult = ReturnType<typeof usePosts>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<Posts, PostsVariables>;
