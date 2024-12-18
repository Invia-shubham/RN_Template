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

// const TabButton = ({
//   focused,
//   activeIcon,
//   inactiveIcon,
//   label,
//   localizedLabel,
//   targetTitle,
//   isOverlay,
// }: Tab & {
//   targetTitle: string;
//   localizedLabel: string;
//   isOverlay?: boolean;
// }) => {
//   const isActive = targetTitle === localizedLabel;
//   const textStyles = isActive
//     ? styles.activeText
//     : !isActive && focused && !isOverlay
//     ? styles.activeText
//     : styles.inactiveText;

//   return (
//     <View style={styles.tabButton}>
//       {isActive || (!isActive && focused && !isOverlay)
//         ? activeIcon
//         : inactiveIcon}
//       <Text style={textStyles}>{label}</Text>
//     </View>
//   );
// };

const screenData = [
  {
    name: TAB_ROUTES.HOME,
    component: HomeScreen,
    icon: image.home_Bottom_Icon,
    label: 'Home', // You can also use `t('home')` for translations
  },
  {
    name: TAB_ROUTES.BILLING,
    component: BillingScreen,
    icon: image.bill_Bottom_Icon,
    label: 'Billing',
  },
  {
    name: TAB_ROUTES.USAGE,
    component: UsageScreen,
    icon: image.usage_Bottom_Icon,
    label: 'Usage',
  },
  {
    name: TAB_ROUTES.NOTIFICATION,
    component: NotificationScreen,
    icon: image.notification_Bottom_Icon,
    label: 'Notifications',
  },
  {
    name: TAB_ROUTES.MORE,
    component: MoreScreen,
    icon: image.more_Bottom_Icon,
    label: 'More',
  },
];

const Tabs = () => {
  const {t} = useTranslation();
  const {isDarkTheme} = useContext(AppThemeContext);

  const renderTabIcon = (iconName: string, focused: boolean, color: string) => (
    <Icons
      iconName={iconName}
      size={24}
      color={focused ? colors.icon.primaryActive : colors.icon.primaryInverse}
      isImage={true}
      style={{tintColor: color}}
    />
  );

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
        {screenData.map(({name, component, icon, label}) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarLabel: t(label),
              tabBarIcon: ({focused, color}) =>
                renderTabIcon(icon, focused, color),
            }}
          />
        ))}
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
