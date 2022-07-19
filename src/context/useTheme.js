import React from 'react';

import {light,dark} from '../constants/';

export const ThemeContext = React.createContext({
  theme: dark,
  setTheme: () => {},
});

export const ThemeProvider = ({
  children,
  theme = dark,
  setTheme = () => {},
}) => {
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const {theme} = React.useContext(ThemeContext);
  return theme;
}
