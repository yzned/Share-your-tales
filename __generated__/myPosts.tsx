import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MyPostsVariables = Types.Exact<{
  input: Types.FindMyPostsRequest;
}>;

export type MyPosts = {
  __typename: 'Query';
  myPosts: {
    __typename: 'FindMyPostsPaginationResponse';
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
    } | null;
  };
};

export const MyPostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {kind: 'Name', value: 'myPosts'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'FindMyPostsRequest'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'myPosts'},
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
 * __useMyPosts__
 *
 * To run a query within a React component, call `useMyPosts` and pass it any options that fit your needs.
 * When your component renders, `useMyPosts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPosts({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMyPosts(
  baseOptions: Apollo.QueryHookOptions<MyPosts, MyPostsVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<MyPosts, MyPostsVariables>(MyPostsDocument, options);
}
export function useMyPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyPosts, MyPostsVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<MyPosts, MyPostsVariables>(
    MyPostsDocument,
    options,
  );
}
export type MyPostsHookResult = ReturnType<typeof useMyPosts>;
export type MyPostsLazyQueryHookResult = ReturnType<typeof useMyPostsLazyQuery>;
export type MyPostsQueryResult = Apollo.QueryResult<MyPosts, MyPostsVariables>;
