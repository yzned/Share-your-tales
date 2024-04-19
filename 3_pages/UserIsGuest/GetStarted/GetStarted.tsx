import {ImageBackground, Pressable, Text, View} from 'react-native';
import GreenLink from '../../../7_shared/UI/greenLink/GreenLink';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {useState} from 'react';

export default function GetStarted() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const styles = useTheme(getStyles);
  const [pressed, setPressed] = useState(false);
  const toRegistration = () => {
    navigation.navigate('registration');
  };
  const toLogIn = () => {
    navigation.navigate('login');
  };

  return (
    <View>
      <ImageBackground
        source={require('./splash.png')}
        style={styles.backgroundImage}>
        <View style={styles.splashScreenContent}>
          <View style={styles.splashCreeenText}>
            <Text style={styles.ScreenTextQuestion}>
              Already have an account?{' '}
            </Text>
            <GreenLink text={'Log In'} onPress={toLogIn} />
          </View>
          <Pressable
            style={[styles.buttonStyles, pressed && styles.pressedButton]}
            onPress={toRegistration}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}>
            <Text
              style={[styles.buttonText, pressed && styles.pressedButtonText]}>
              Create an account
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
