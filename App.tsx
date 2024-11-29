/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppThemeContext} from './src/appcontext/AppThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNavigation from './src/router/stackNavigation';
import { LOGIN_SCREEN_ROUTES } from './src/router/enum';

function App(): React.JSX.Element {
  const {isDarkTheme, currentTheme, toggleTheme} = useContext(AppThemeContext);


  const linking = {
    prefixes: ['com.code_design://open'],  // Your deep link prefix
    config: {
      screens: {
        YourTargetScreen: LOGIN_SCREEN_ROUTES.LOGIN_SCREEN,  // Define your target screen
      },
    },
  };

  return (
    <GestureHandlerRootView style={{...styles.appContainer,backgroundColor: isDarkTheme ? Colors.darker : Colors.lighter,}}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {flex: 1},
});

export default App;
