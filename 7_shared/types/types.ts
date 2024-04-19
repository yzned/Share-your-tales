import {StyleSheet} from 'react-native';
import {ThemeType} from '../theme';

export type StyleFunction<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
> = (theme: ThemeType) => T;
export type DefaultProviderProps = {
  children?: React.ReactNode;
};
