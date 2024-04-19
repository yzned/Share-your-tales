import {Pressable, PressableProps, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '../../../../../hooks/useTheme';
import {getStyles} from './style';
import SvgHeart from '../../../../../../../--no-index/heart';
import {usepostLike} from '../../../../../../__generated__/PostLike';
import {usePostUnLike} from '../../../../../../__generated__/PostUnlike';
type ButtonProps = {
  id: string;
  isLiked: boolean;
  likesCount: number;
} & PressableProps;

export const HeartButton: FC<ButtonProps> = ({isLiked, id, likesCount}) => {
  const styles = useTheme(getStyles);
  const [likePost] = usepostLike();
  const [unlikePost] = usePostUnLike();
  const [isLikedState, setIsLiked] = useState(isLiked);
  const [likesCountState, setLikesCount] = useState(likesCount);
  const handleIconColor = () => {
    if (isLikedState) {
      return styles.pressedIcon.color;
    }
    return styles.initialIcon.color;
  };

  const handleLikePost = () => {
    if (isLikedState) {
      setIsLiked(false);
      setLikesCount(likesCountState - 1);
      return unlikePost({variables: {input: {id}}});
    }
    setIsLiked(true);
    setLikesCount(likesCountState + 1);
    return likePost({variables: {input: {id}}});
  };

  return (
    <Pressable style={styles.likeStyle} onPress={() => handleLikePost()}>
      <SvgHeart color={handleIconColor()} />
      <Text style={styles.likeCount}>{likesCountState}</Text>
    </Pressable>
  );
};
