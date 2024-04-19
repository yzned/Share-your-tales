import {Text, Pressable, PressableProps} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '../../hooks/useTheme';
import {getStyles} from './style';
import SvgDoorToClose from '../../../../--no-index/door-to-close';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHoooks';
import {leaveToAccount} from '../../../1_app/redux/duck/acccountData/slice';
import {signOut} from '../../hooks/useSession';
import {tokenSelectors} from '../../../1_app/redux/duck/token';
type ProfileProps = {
  disabled?: boolean;
} & PressableProps;
export const CloseAccount: FC<ProfileProps> = ({disabled, onPress}) => {
  const [pressed, setPressed] = useState(false);
  const styles = useTheme(getStyles);
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => tokenSelectors.getToken(state));
  const checkPressedStatus = () => {
    if (pressed) {
      return styles.active.color;
    }
    if (disabled) {
      return styles.disable.color;
    }
    return styles.defaultColor.color;
  };
  const leaveAccount = () => {
    dispatch(leaveToAccount());
    signOut();
  };
  return (
    <Pressable
      style={styles.presable}
      onPress={() => {
        leaveAccount();
        onPress;
      }}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <SvgDoorToClose color={checkPressedStatus()} />
      <Text
        style={[
          styles.text,
          pressed && styles.active,
          disabled && styles.disable,
        ]}>
        Exit
      </Text>
    </Pressable>
  );
};
