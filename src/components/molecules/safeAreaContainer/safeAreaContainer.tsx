import React from 'react';
import {SafeAreaView, Platform, StyleSheet} from 'react-native';
import {numbers} from '../../atoms/numbers';

interface SafeAreaViewProps {
  children: React.ReactNode;
}

const SafeAreaViewContainer = ({children}: SafeAreaViewProps) => {
  return (
    <SafeAreaView
      style={[
        styles.rootContainer,
        Platform.OS === 'android' ? {marginBottom: numbers.margin[16]} : {marginBottom: 0},
      ]}>
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaViewContainer;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});