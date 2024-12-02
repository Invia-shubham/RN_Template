import React, {useState, useEffect, useRef} from 'react';
import {TouchableOpacity, Animated, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../atoms/colors';
import {numbers} from '../atoms/numbers';

interface CustomSwitchProps {
  isOn: boolean;
  onToggle: (newState: boolean) => void;
  style?: ViewStyle;
}

const CustomSwitch = ({isOn, onToggle, style}: CustomSwitchProps) => {
  const [switchOn, setSwitchOn] = useState(isOn);
  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  useEffect(() => {
    setSwitchOn(isOn);
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const toggleSwitch = () => {
    onToggle(!switchOn);
  };

  const interpolateTrackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.background.fill.primaryDisabled, colors.background.fill.primaryActive],
  });

  const interpolateThumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 26],
  });

  return (
    <TouchableOpacity onPress={toggleSwitch} style={[styles.switchContainer, style]}>
      <Animated.View style={{...styles.track, backgroundColor: interpolateTrackColor}}>
        <Animated.View
          style={[styles.thumb, {transform: [{translateX: interpolateThumbPosition}]}]}>
          {/* {switchOn && <CheckOutline />} */}
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    width: 70,
  },
  track: {
    height: 30,
    borderRadius: numbers.radius.large,
    justifyContent: 'center',
  },
  thumb: {
    width: 25,
    height: 25,
    borderRadius: numbers.radius.large,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomSwitch;