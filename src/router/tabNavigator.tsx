import React, {ReactNode, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {colors} from '../components/atoms/colors';
import {TAB_ROUTES} from './enum';
import Icons from '../components/atoms/icons';
import {image} from '../utils/image';
import {
  BillingScreen,
  HomeScreen,
  MoreScreen,
  NotificationScreen,
  UsageScreen,
} from '../modules';
import {AppThemeContext} from '../appcontext/AppThemeContext';

const Tab = createBottomTabNavigator();

type Tab = {
  focused: boolean;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  label: string;
};

const TabButton = ({
  focused,
  activeIcon,
  inactiveIcon,
  label,
  localizedLabel,
  targetTitle,
  isOverlay,
}: Tab & {
  targetTitle: string;
  localizedLabel: string;
  isOverlay?: boolean;
}) => {
  const isActive = targetTitle === localizedLabel;
  const textStyles = isActive
    ? styles.activeText
    : !isActive && focused && !isOverlay
    ? styles.activeText
    : styles.inactiveText;

  return (
    <View style={styles.tabButton}>
      {isActive || (!isActive && focused && !isOverlay)
        ? activeIcon
        : inactiveIcon}
      <Text style={textStyles}>{label}</Text>
    </View>
  );
};
const Tabs = () => {
  const {t} = useTranslation();
  const {isDarkTheme} = useContext(AppThemeContext);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.icon.primaryActive,
          tabBarInactiveTintColor: colors.icon.primaryInverse,
          tabBarStyle: {
            backgroundColor: isDarkTheme
              ? colors.background.fill.bottomTabDark
              : colors.background.fill.primaryInverse,
          },
        }}>
        <Tab.Screen
          name={TAB_ROUTES.HOME}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              const iconName = focused ? 'home' : 'home';
              return (
                <Icons
                  iconName={image.home_Bottom_Icon}
                  size={24}
                  color={focused ? 'blue' : 'gray'}
                  isImage={true}
                  style={{tintColor: color}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={TAB_ROUTES.BILLING}
          component={BillingScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icons
                  iconName={image.bill_Bottom_Icon}
                  size={24}
                  color={focused ? 'blue' : 'gray'}
                  isImage={true}
                  style={{tintColor: color}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={TAB_ROUTES.USAGE}
          component={UsageScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icons
                  iconName={image.usage_Bottom_Icon}
                  size={24}
                  color={focused ? 'blue' : 'gray'}
                  isImage={true}
                  style={{tintColor: color}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={TAB_ROUTES.NOTIFICATION}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icons
                  iconName={image.notification_Bottom_Icon}
                  size={24}
                  color={focused ? 'blue' : 'gray'}
                  isImage={true}
                  style={{tintColor: color}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={TAB_ROUTES.MORE}
          component={MoreScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icons
                  iconName={image.more_Bottom_Icon}
                  size={24}
                  color={focused ? 'blue' : 'gray'}
                  isImage={true}
                  style={{tintColor: color}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    top: 0,
    backgroundColor: colors.background.fill.primaryInverse,
    borderRadius: 16,
    height: 80,
    shadowColor: '',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeText: {
    color: colors.text.primaryActive,
  },
  inactiveText: {
    color: colors.text.primaryDisabled,
  },
  scanButton: {
    top: -22,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background.fill.primaryActive,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  scanButtonActiveText: {
    color: colors.text.primaryActive,
    bottom: 12,
  },
  scanButtonInActiveText: {
    color: colors.text.primaryDisabled,
    bottom: 12,
  },
});
