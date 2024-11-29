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
import { useDispatch } from 'react-redux';
import { setNetworkStatus } from './src/redux/slices/networkSlice';
import NetInfo from '@react-native-community/netinfo';

function App(): React.JSX.Element {
  const {isDarkTheme, currentTheme, toggleTheme} = useContext(AppThemeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setNetworkStatus(state.isConnected));

      if (state.isConnected) {
        console.log('Network is back online!');
      } else {
        console.log('Network is offline!');
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

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
