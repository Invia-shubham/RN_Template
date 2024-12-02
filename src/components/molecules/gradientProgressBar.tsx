import React from 'react';
import {StyleSheet, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {numbers} from '../atoms/numbers';
import {colors} from '../atoms/colors';

interface IProgressConfig {
  testID?: string;
  progress: number;
}

const GradientProgressBar: React.FC<IProgressConfig> = ({progress, testID}) => {
  const colorsArray = [colors.gradient.blue, colors.gradient.light];

  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.gradient}>
        <LinearGradient
          colors={colorsArray}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[{width: `${progress}%`}, styles.bar]}
        />
      </View>
    </View>
  );
};

export default GradientProgressBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: numbers.margin[16],
    backgroundColor: colors.gradient.lightGray,
    borderRadius: numbers.radius.small,
  },
  gradient: {
    flexDirection: 'row',
    height: numbers.gap[12],
    width: '100%',
  },
  bar: {
    borderRadius: numbers.radius.small,
  },
});