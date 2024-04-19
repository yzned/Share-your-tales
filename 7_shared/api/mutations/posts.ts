import {usePosts} from '../../../__generated__/GetPosts';
import {PostFilterType} from '../../types/api-types';

export type postsInputTypes = {
  afterCursor: string;
  limit: number;
  type: PostFilterType;
};

export const fetchPosts = () => {
  const inputData: postsInputTypes = {
    afterCursor: '',
    limit: 10,
    type: PostFilterType.New,
  };

  const {refetch, data: postsData} = usePosts({variables: {input: inputData}});
  return {refetch, postsData};
};
