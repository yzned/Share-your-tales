import {useEffect} from 'react';
import {useFavouritePostsLazyQuery} from '../../../__generated__/favoritePosts';

export const usePaginationFavoritePosts = () => {
  const [getPaginatedPosts, {data, fetchMore, loading}] =
    useFavouritePostsLazyQuery({fetchPolicy: 'network-only'});
  const afterCursor = data?.favouritePosts.pageInfo?.afterCursor;
  const getPosts = async () => {
    await getPaginatedPosts({
      variables: {input: {limit: 10, afterCursor: null}},
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  const getMorePosts = async () => {
    await fetchMore({
      variables: {input: {limit: 10, afterCursor}},
    });
  };

  return {isLoading: loading, getPosts, getMorePosts, data};
};
