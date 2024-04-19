import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';

export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    myPosts: {
      backgroundColor: theme.grayscale.white,
      paddingTop: 20,
      width: '100%',
      height: '100%',
    },
    CreatePostButton: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0)',
      bottom: 32,
      right: 16,
      zIndex: 500,
    },
    post: {
      zIndex: 1,
    },
    deleteButton: {
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
  });
