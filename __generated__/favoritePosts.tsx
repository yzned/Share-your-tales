import * as Types from '../7_shared/types/api-types';

import {DocumentNode} from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FavouritePostsVariables = Types.Exact<{
  input: Types.FindFavouritePostsRequest;
}>;

export type FavouritePosts = {
  __typename: 'Query';
  favouritePosts: {
    __typename: 'FindFavouritePostsPaginationResponse';
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

export const FavouritePostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {kind: 'Name', value: 'favouritePosts'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'FindFavouritePostsRequest'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'favouritePosts'},
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
 * __useFavouritePosts__
 *
 * To run a query within a React component, call `useFavouritePosts` and pass it any options that fit your needs.
 * When your component renders, `useFavouritePosts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavouritePosts({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFavouritePosts(
  baseOptions: Apollo.QueryHookOptions<FavouritePosts, FavouritePostsVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<FavouritePosts, FavouritePostsVariables>(
    FavouritePostsDocument,
    options,
  );
}
export function useFavouritePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FavouritePosts,
    FavouritePostsVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<FavouritePosts, FavouritePostsVariables>(
    FavouritePostsDocument,
    options,
  );
}
export type FavouritePostsHookResult = ReturnType<typeof useFavouritePosts>;
export type FavouritePostsLazyQueryHookResult = ReturnType<
  typeof useFavouritePostsLazyQuery
>;
export type FavouritePostsQueryResult = Apollo.QueryResult<
  FavouritePosts,
  FavouritePostsVariables
>;
