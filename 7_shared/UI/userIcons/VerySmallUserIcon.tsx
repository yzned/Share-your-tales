import {
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  PressableProps,
  Image,
} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '../../hooks/useTheme';
import {getStyles} from './styles';
import SvgSmallUserIcon from '../../../../--no-index/small-user-icon';
import {useGetUser} from '../../../__generated__/GetUserData';

type UserIconProps = {} & PressableProps;

export const VerySmallUserIcon: FC<UserIconProps> = () => {
  const styles = useTheme(getStyles);
  const {data} = useGetUser();
  return (
    <View style={styles.verySmallIcon}>
      {data?.userMe.avatarUrl ? (
        <Image
          source={{uri: data?.userMe.avatarUrl}}
          style={styles.verySmallIcon}
        />
      ) : (
        <SvgSmallUserIcon color={styles.iconColor.color} />
      )}
    </View>
  );
};
