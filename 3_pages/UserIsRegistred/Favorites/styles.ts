import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    Favorites: {
      backgroundColor: theme.grayscale.white,
      paddingTop: 20,
      width: '100%',
      height: '100%',
    },
  });
