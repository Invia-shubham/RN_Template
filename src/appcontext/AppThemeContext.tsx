import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {useAppSelector, useAppDispatch} from '../redux/hooks';
import {Appearance} from 'react-native';
import {setTheme} from '../redux/slices/themeSlice';

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
    // Function to handle theme changes based on system theme
    const handleSystemThemeChange = () => {
      const systemTheme = Appearance.getColorScheme();
      if (systemTheme === 'dark') {
        setIsDarkTheme(true);
        setCurrentTheme('dark');
        // Dispatch system theme to Redux, but we will override with selectedTheme
        dispatch(setTheme('dark'));
      } else {
        setIsDarkTheme(false);
        setCurrentTheme('light');
        // Dispatch system theme to Redux
        dispatch(setTheme('light'));
      }
    };

    // If Redux has a selected theme, use it
    if (selectedTheme) {
      setIsDarkTheme(selectedTheme === 'dark');
      setCurrentTheme(selectedTheme);
    } else {
      // Otherwise, use system theme
      handleSystemThemeChange();
    }

    // Listen for system theme changes
    const subscription = Appearance.addChangeListener(handleSystemThemeChange);

    // Clean up the listener when the component unmounts
    return () => {
      subscription.remove();
    };
  }, [dispatch, selectedTheme]);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    setCurrentTheme(newTheme);
    dispatch(setTheme(newTheme)); // Dispatch action to save the theme in Redux
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
