import React from 'react';
import {ThemeType, lightTheme, darkTheme} from '.';

export const ThemeContext = React.createContext<ThemeType>(lightTheme);
