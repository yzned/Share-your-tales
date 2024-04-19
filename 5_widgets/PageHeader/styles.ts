import {StyleSheet} from 'react-native';
import {ThemeType} from '../../7_shared/theme';
import {typography} from '../../../typography/index';
export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    sayHello: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    header: {
      padding: 16,
    },
    greetings: {
      ...typography.titleSemibold32,
      color: theme.grayscale.grayscale700,
      width: 300,
    },
    tabs: {
      marginTop: 20,
    },
  });
