import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    congrats: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.grayscale.white,
    },
    text: {
      fontSize: 16,
      marginTop: 13,
      color: theme.grayscale.grayscale700,
    },
    button: {
      marginTop: 52,
    },
  });
