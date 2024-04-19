import {StyleSheet} from 'react-native';
import {ThemeType} from '../../7_shared/theme';
import {typography} from '../../../typography';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    post: {
      backgroundColor: theme.grayscale.grayscale200,
      marginTop: 4,
      paddingTop: 24,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      height: 364,
      zIndex: 0,
      justifyContent: 'space-between',
    },
    title: {
      color: theme.grayscale.grayscale700,
      ...typography.bodyMedium16,
    },
    postData: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    userName: {
      color: theme.grayscale.grayscale500,
      ...typography.bodyRegular14,
      marginLeft: 8,
    },
    buttons: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    userData: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imagePost: {
      height: 226,
      borderRadius: 16,
    },
    createdAt: {
      color: '#9B9B9B',
      display: 'flex',
      paddingTop: 3,
    },
  });
