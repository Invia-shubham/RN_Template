import React, {useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_SCREEN_ROUTES, LOGIN_SCREEN_ROUTES, TAB_ROUTES} from './enum';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppState, AppStateStatus} from 'react-native';
import {INACTIVE_LOGOUT_TIME} from '../redux/constants';
import {HomeScreen, LoginScreen} from '../modules';
import {getScreenOptions} from './withBackButtonHandler';
import Tabs from './tabNavigator';

export type ScreenNames = [
  LOGIN_SCREEN_ROUTES.LOGIN_SCREEN,
  HOME_SCREEN_ROUTES.HOME_SCREEN,
  TAB_ROUTES.TAB,
];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = (): React.JSX.Element => {
  const noNavigation = 'none';
  const {navigate} = useNavigation();
  const isLogin = false;

  const getInitialRouteName = () => {
    if (isLogin) {
      return HOME_SCREEN_ROUTES.HOME_SCREEN;
    } else {
      return LOGIN_SCREEN_ROUTES.LOGIN_SCREEN;
    }
  };

  const appState = useRef<AppStateStatus>(AppState.currentState);
  const backgroundTime = useRef<number>(Date.now());

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        const currentTime: number = Date.now();
        const timeoutDifference: number = currentTime - backgroundTime.current;
        if (timeoutDifference >= INACTIVE_LOGOUT_TIME.HARD_LOGOUT_TIME) {
          //logout();
        } else if (timeoutDifference >= INACTIVE_LOGOUT_TIME.SOFT_LOGOUT_TIME) {
          navigate(LOGIN_SCREEN_ROUTES.LOGIN_SCREEN);
        }
      } else if (nextAppState.match(/inactive|background/)) {
        backgroundTime.current = Date.now();
      }
      appState.current = nextAppState;
    };

    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  return (
    <Stack.Navigator initialRouteName={getInitialRouteName()}>
      <Stack.Screen
        name={LOGIN_SCREEN_ROUTES.LOGIN_SCREEN}
        component={LoginScreen}
        options={getScreenOptions(LOGIN_SCREEN_ROUTES.LOGIN_SCREEN)}
      />
      <Stack.Screen
        name={HOME_SCREEN_ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false, animation: noNavigation}}
      />
      <Stack.Screen
        name={TAB_ROUTES.TAB}
        component={Tabs}
        options={{headerShown: false, animation: noNavigation}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
