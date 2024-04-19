import {Pressable, PressableProps, Image} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '../../hooks/useTheme';
import {getStyles} from './styles';
import SvgSmallUserIcon from '../../../../--no-index/small-user-icon';
import {useGetUser} from '../../../__generated__/GetUserData';

type UserIconProps = {} & PressableProps;

export const SmallUserIcon: FC<UserIconProps> = ({onPress}) => {
  const styles = useTheme(getStyles);
  const {data} = useGetUser();
  return (
    <Pressable style={styles.smallIcon} onPress={onPress}>
      {data?.userMe.avatarUrl ? (
        <Image
          source={{uri: data?.userMe.avatarUrl}}
          style={styles.smallAvatar}
        />
      ) : (
        <SvgSmallUserIcon color={styles.iconColor.color} />
      )}
    </Pressable>
  );
};
