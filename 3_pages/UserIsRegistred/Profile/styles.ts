import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';
import {typography} from '../../../../typography';
export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    profile: {
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
      justifyContent: 'space-between',
    },
    pageName: {
      ...typography.bodyMedium18,
      color: theme.grayscale.grayscale700,
      marginLeft: 16,
    },
    userIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 32,
    },
    rubric: {
      marginTop: 32,
    },
    rubricName: {
      ...typography.bodyMedium18,
      color: theme.grayscale.grayscale700,
    },
  });
