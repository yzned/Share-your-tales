import {useEffect} from 'react';
import {PostFilterType} from '../../../7_shared/types/api-types';
import {usePostsLazyQuery} from '../../../__generated__/GetPosts';

type usePaginationPostsType = {
  postFilterType: PostFilterType;
};
export const usePaginationPosts = ({
  postFilterType,
}: usePaginationPostsType) => {
  const [getPaginatedPosts, {data, fetchMore, loading}] = usePostsLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const afterCursor = data?.posts.pageInfo?.afterCursor;
  const getPosts = async () => {
    await getPaginatedPosts({
      variables: {input: {limit: 10, afterCursor: null, type: postFilterType}},
    });
  };
  useEffect(() => {
    getPosts();
  }, [postFilterType]);

  const getMorePosts = async () => {
    await fetchMore({
      variables: {input: {limit: 10, afterCursor, type: postFilterType}},
    });
  };

  return {isLoading: loading, getPosts, getMorePosts, data};
};
