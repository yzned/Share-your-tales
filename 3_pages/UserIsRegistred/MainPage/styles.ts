import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    mainPage: {
      backgroundColor: theme.grayscale.white,
      paddingTop: 20,
      width: '100%',
      height: '100%',
    },
    tabs: {
      marginTop: 20,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 40,
    },
  });
