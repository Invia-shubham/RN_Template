import React from 'react';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {HOME_SCREEN_ROUTES, MORE_SCREEN_ROUTES} from './enum';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const screensWithBackDisabled = [
  HOME_SCREEN_ROUTES.HOME_SCREEN,
  MORE_SCREEN_ROUTES.SET_PIN,
  MORE_SCREEN_ROUTES.CHANGE_PIN,
];

const withBackButtonHandler = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const {route} = props;
    const screenName = route.name;

    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          if (screensWithBackDisabled.includes(screenName)) {
            return true; // Prevent default behavior (do nothing)
          }
          return false; // Allow default behavior
        };

        BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () => {
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
      }, [screenName]),
    );

    return <WrappedComponent {...props} />;
  };
};

const getScreenOptions = (screenName: string): NativeStackNavigationOptions => {
  if (screensWithBackDisabled.includes(screenName)) {
    return {
      gestureEnabled: false,
      headerShown: false,
    };
  }

  return {
    gestureEnabled: true,
    headerShown: false,
  };
};

export {withBackButtonHandler, getScreenOptions};
