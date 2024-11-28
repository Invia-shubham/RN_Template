import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {numbers} from '../../atoms/numbers';
import {colors} from '../../atoms/colors';
import BottomTabPageHeader from './bottomTabPageHeader';

interface IBottomTabPageLayout {
  children?: ReactNode;
  pendingIconVisible?: boolean;
  headerText?: string;
  style?: ViewStyle;
  pending?: boolean;
}

const BottomTabPageLayout = ({children, headerText = '', style, pending}: IBottomTabPageLayout) => {
  return (
    <SafeAreaView style={{...styles.parentViewStyle, ...style}}>
      <View style={styles.headerStyle}>
        <BottomTabPageHeader pending={pending} title={headerText} />
      </View>
      <View style={styles.childrenStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default BottomTabPageLayout;

const styles = StyleSheet.create({
  parentViewStyle: {
    flex: 1,
    backgroundColor: colors.background.surface.secondary,
    marginBottom: 90,
  },
  headerStyle: {paddingHorizontal: numbers.padding[16], paddingTop: numbers.padding[16]},
  childrenStyle: {flex: 1},
});