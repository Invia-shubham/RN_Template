import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from '../redux/hooks';
import {Appearance} from 'react-native';
import {setTheme} from '../redux/slices/themeSlice'; // Assuming you have a Redux slice for theme management

interface ContextState {
  isDarkTheme: boolean;
  currentTheme: string;
  toggleTheme: () => void;
}

const initialContext: ContextState = {
  isDarkTheme: false,
  currentTheme: 'light', // Default theme
  toggleTheme: () => {},
};

export const AppThemeContext = createContext<ContextState>(initialContext);

interface AppThemeContextProviderProps {
  children: ReactNode;
}

export const AppThemeContextProvider: React.FC<
  AppThemeContextProviderProps
> = ({children}) => {
  const dispatch = useAppDispatch();
  const selectedTheme = useAppSelector(state => state.theme?.selectedTheme); // Redux slice for theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    // Check system theme preference
    const systemTheme = Appearance.getColorScheme();
    if (systemTheme === 'dark') {
      setIsDarkTheme(true);
      setCurrentTheme('dark');
      dispatch(setTheme('dark'));
    } else {
      setIsDarkTheme(false);
      setCurrentTheme('light');
      dispatch(setTheme('light'));
    }

    // If the user has selected a theme in settings (from Redux), override the system preference
    if (selectedTheme) {
      setIsDarkTheme(selectedTheme === 'dark');
      setCurrentTheme(selectedTheme);
    }
  }, [selectedTheme]);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    setCurrentTheme(newTheme);
    dispatch(setTheme(newTheme)); // Dispatch action to save the theme in Redux (optional)
  };

  const contextValue: ContextState = {
    isDarkTheme,
    currentTheme,
    toggleTheme,
  };

  return (
    <AppThemeContext.Provider value={contextValue}>
      {children}
    </AppThemeContext.Provider>
  );
};
