import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode, useContext} from 'react';
import {numbers} from '../../atoms/numbers';
import {colors} from '../../atoms/colors';
import BottomTabPageHeader from './bottomTabPageHeader';
import NoInternet from '../../molecules/NoInternet';
import {AppThemeContext} from '../../../appcontext/AppThemeContext';

interface IBottomTabPageLayout {
  children?: ReactNode;
  pendingIconVisible?: boolean;
  headerText?: string;
  style?: ViewStyle;
  pending?: boolean;
}

const BottomTabPageLayout = ({
  children,
  headerText = '',
  style,
  pending,
}: IBottomTabPageLayout) => {
  const {isDarkTheme} = useContext(AppThemeContext);
  return (
    <SafeAreaView
      style={{
        ...styles.parentViewStyle,
        backgroundColor: isDarkTheme
          ? colors.background.surface.primaryDark
          : colors.background.surface.primary,
        ...style,
      }}>
      <View style={styles.headerStyle}>
        <BottomTabPageHeader pending={pending} title={headerText} />
      </View>
      <View style={styles.childrenStyle}>{children}</View>
      <NoInternet />
    </SafeAreaView>
  );
};

export default BottomTabPageLayout;

const styles = StyleSheet.create({
  parentViewStyle: {
    flex: 1,
    backgroundColor: colors.background.surface.primary,
    // marginBottom: 90,
  },
  headerStyle: {
    paddingHorizontal: numbers.padding[16],
    paddingTop: numbers.padding[16],
  },
  childrenStyle: {flex: 1},
});
