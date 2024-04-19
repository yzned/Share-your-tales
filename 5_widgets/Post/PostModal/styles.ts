import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';
import {typography} from '../../../../typography';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    postModal: {
      paddingTop: 40,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 20,
      backgroundColor: theme.grayscale.white,
      width: '100%',
      height: '100%',
    },
    topMenu: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30,
    },
    pageName: {
      ...typography.bodyRegular16,
      color: theme.grayscale.grayscale700,
    },
    backButton: {
      position: 'absolute',
      left: 0,
    },
    description: {
      ...typography.bodyRegular14,
      color: theme.grayscale.grayscale700,
    },
    userData: {
      flexDirection: 'row',
      alignItems: 'center',
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
    likeCount: {
      color: theme.grayscale.grayscale700,
      ...typography.bodyMedium14,
      marginLeft: 4,
      marginRight: 12,
    },
    postData: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 22,
    },
    imagePost: {
      marginTop: 8,
      marginBottom: 20,
      height: 226,
      borderRadius: 16,
    },
    createdAt: {
      color: '#9B9B9B',
      textAlign: 'center',
    },
  });
