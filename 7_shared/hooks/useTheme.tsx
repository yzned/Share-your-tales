import {useContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {ThemeContext} from '../theme/theme.context';
import {StyleFunction} from '../types/types';

export const useTheme = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  styleFunc: StyleFunction<T>,
) => {
  const theme = useContext(ThemeContext);
  const styles = useMemo(() => styleFunc(theme), [styleFunc, theme]);
  return styles;
};
