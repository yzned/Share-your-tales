import {StyleSheet} from 'react-native';
import {typography} from '../../../../typography';
export const getStyles = () =>
  StyleSheet.create({
    backgroundImage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    splashScreenContent: {
      zIndex: 1,
      position: 'absolute',
      bottom: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    splashCreeenText: {
      display: 'flex',
      color: 'white',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 20,
    },
    ScreenTextQuestion: {
      color: 'white',
      ...typography.bodyRegular16,
    },
    buttonStyles: {
      backgroundColor: '#303030',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      width: 340,
      borderRadius: 21,
    },
    buttonText: {
      color: '#B8DE64',
      ...typography.bodyMedium16,
    },
    pressedButton: {
      backgroundColor: '#B8DE64',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      width: 340,
      borderRadius: 21,
    },
    pressedButtonText: {
      color: '#303030',
      ...typography.bodyMedium16,
    },
  });
