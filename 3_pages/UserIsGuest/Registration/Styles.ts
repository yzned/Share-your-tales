import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../7_shared/theme';
import {typography} from '../../../../typography';
export const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    registration: {
      padding: 16,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.grayscale.white,
    },
    header: {
      ...typography.titleOutfit32,
      color: theme.primary.default,
    },
    description: {
      ...typography.bodyRegular16,
      color: theme.grayscale.grayscale700,
    },
    bottomPart: {
      marginTop: 71,
    },
    bottomText: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    bottomTextAlready: {
      ...typography.bodyRegular16,
      color: theme.grayscale.grayscale700,
    },
    continueBtn: {
      marginTop: 40,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errrorMesage: {
      color: theme.additional.error,
      ...typography.bodyRegular14,
      marginTop: 6,
    },
    eye: {
      position: 'absolute',
      right: 0,
      bottom: 12,
    },
  });
