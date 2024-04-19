import {useEffect} from 'react';
import {useMyPostsLazyQuery} from '../../../__generated__/myPosts';

export const usePaginationMyPosts = () => {
  const [getPaginatedPosts, {data, fetchMore, loading}] = useMyPostsLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const afterCursor = data?.myPosts.pageInfo?.afterCursor;
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
