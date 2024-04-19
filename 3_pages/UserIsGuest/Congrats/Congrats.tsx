import {View, Text, Image} from 'react-native';
import React from 'react';
import {getStyles} from './styles';
import {BigButton} from '../../../7_shared/UI/buttons/bigButton/BigButton';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {useAppDispatch} from '../../../7_shared/hooks/reduxHoooks';
import {changeIsLoginStatus} from '../../../1_app/redux/duck/acccountData/slice';

export default function Congrats() {
  const styles = useTheme(getStyles);
  const dispatch = useAppDispatch();
  const handleNavigate = () => {
    dispatch(changeIsLoginStatus());
  };
  return (
    <View style={styles.congrats}>
      <Image source={require('./congrats.png')} />
      <Text style={styles.text}>
        <Image source={require('./check-circle.png')} />
        You have been registered
      </Text>
      <View style={styles.button}>
        <BigButton name="Continue" onPress={handleNavigate} />
      </View>
    </View>
  );
}
