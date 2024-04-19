import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';
import {typography} from '../../../../typography';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    menu: {
      width: '100%',
      height: '100%',
    },
    closeArea: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(52, 52, 52, 0.6)',
      zIndex: 0,
    },
    menuContent: {
      position: 'relative',
      zIndex: 10,
      backgroundColor: theme.grayscale.white,
      height: '100%',
      width: '77%',
      paddingTop: 40,
      paddingLeft: 32,
      paddingBottom: 40,
      paddingRight: 32,
    },
    userName: {
      ...typography.headlineSemibold18,
      fontSize: 20,
      color: theme.grayscale.grayscale700,
      marginTop: 12,
    },
    menuButtons: {
      marginTop: 60,
      display: 'flex',
      justifyContent: 'space-between',
      height: 80,
    },
    themeController: {
      marginTop: '130%',
    },
  });
