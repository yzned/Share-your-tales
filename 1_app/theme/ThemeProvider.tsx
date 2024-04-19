import React, {FC} from 'react';
import {ThemeContext} from '../../7_shared/theme/theme.context';
import {darkTheme, lightTheme} from '../../7_shared/theme';
import {DefaultProviderProps} from '../../7_shared/types/types';
import {useAppSelector} from '../../7_shared/hooks/reduxHoooks';
import {accountDataSelectors} from '../redux/duck/acccountData';

export const ThemeProvider: FC<DefaultProviderProps> = ({children}) => {
  const theme = useAppSelector(state =>
    accountDataSelectors.getCurrentTheme(state),
  );
  const handleCurrentTheme = () => {
    if (theme === 'dark') {
      return darkTheme;
    }
    if (theme === 'light') {
      return lightTheme;
    }
    return lightTheme;
  };
  return (
    <ThemeContext.Provider value={handleCurrentTheme()}>
      {children}
    </ThemeContext.Provider>
  );
};
