import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '../../../hooks/useTheme';
import {getStyles} from './styles';
import SvgTrash from '../../../../../--no-index/trash';
import {usePaginationMyPosts} from '../../../../3_pages/UserIsRegistred/MyPosts/model';
import {useDeletePost} from '../../../../__generated__/deletePost';
type DeleteButtonProps = {
  id: string;
};
export const DeleteButton: FC<DeleteButtonProps> = ({id}) => {
  const [deletePost] = useDeletePost();
  const styles = useTheme(getStyles);
  const {getPosts} = usePaginationMyPosts();
  const handleDeletePost = () => {
    deletePost({variables: {input: {id}}});
    getPosts();
  };
  return (
    <Pressable style={styles.deleteButton} onPress={handleDeletePost}>
      <SvgTrash />
      <Text style={styles.text}>Delete</Text>
    </Pressable>
  );
};
