import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';
import {typography} from '../../../../typography';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    createPost: {
      paddingTop: 40,
      paddingBottom: 20,
      backgroundColor: theme.grayscale.white,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topMenu: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    pageName: {
      ...typography.bodyRegular18,
      color: theme.grayscale.grayscale700,
    },
    Xmark: {
      color: theme.grayscale.grayscale700,
    },
    uploadZone: {
      marginTop: 28,
    },
    submitButton: {
      marginTop: 52,
    },
    errrorMesage: {
      color: theme.additional.error,
      ...typography.bodyRegular14,
      marginTop: 6,
    },
  });
