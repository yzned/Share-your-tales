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
import SvgMediumUserIcon from '../../../../--no-index/medium-user-icon';
import {useGetUser} from '../../../__generated__/GetUserData';

type UserIconProps = {
  pathToIcon?: string | null;
};

export const MediumUserIcon: FC<UserIconProps> = () => {
  const styles = useTheme(getStyles);
  const {data} = useGetUser();
  return (
    <View style={styles.mediumIcon}>
      {data?.userMe.avatarUrl ? (
        <Image
          source={{uri: data.userMe.avatarUrl}}
          style={styles.mediumAvatar}
        />
      ) : (
        <SvgMediumUserIcon color={styles.iconColor.color} />
      )}
    </View>
  );
};
