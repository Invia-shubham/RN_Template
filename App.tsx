/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppThemeContext} from './src/appcontext/AppThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNavigation from './src/router/stackNavigation';

function App(): React.JSX.Element {
  const {isDarkTheme, currentTheme, toggleTheme} = useContext(AppThemeContext);

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
