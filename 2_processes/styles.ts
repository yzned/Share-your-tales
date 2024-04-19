import {StyleSheet} from 'react-native';
import {ThemeType} from '../7_shared/theme';
import {typography} from '../../typography';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    tabBarStyles: {
      backgroundColor: theme.grayscale.white,
      borderTopColor: theme.grayscale.white,
      height: 60,
    },
    tapBarItem: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tapBarItemDefaultColor: {
      color: theme.grayscale.grayscale400,
      ...typography.captionRegular12,
    },
    tapBarItemFocusedColor: {
      color: theme.primary.default,
      ...typography.captionRegular12,
    },
  });
