import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Animated,
  Easing,
  Image,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import {colors} from '../atoms/colors';

const defaultDuration = 800;

interface Props {
  duration?: number;
  spinnerImage?: ImageSourcePropType;
  innerContainerColor?: string;
  innerImage?: ImageSourcePropType;
  style?: ViewStyle;
}

const ActivityIndicator: React.FC<Props> = ({
  duration,
  spinnerImage,
  innerContainerColor,
  innerImage,
  style,
}) => {
  const illustration = require('../../assets/img/spinner.png');
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const animation = Animated.loop(
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: duration ?? defaultDuration,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );

  useEffect(() => {
    animation.start();
    return () => {
      animation.stop();
    };
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Modal animationType={'none'} transparent={true} visible={true}>
      <View style={[styles.container, style]}>
        {!spinnerImage && <View style={styles.blurView} />}
        <View style={styles.spinnerContainer}>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <Image style={styles.spinner} source={spinnerImage || illustration} />
          </Animated.View>
          {innerImage && (
            <View style={[styles.innerContainer, {backgroundColor: innerContainerColor}]}>
              <Image style={styles.centerImage} source={innerImage || illustration} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    width: 74,
    height: 74,
  },
  innerContainer: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerImage: {
    width: 40,
    height: 40,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.4,
    backgroundColor: colors.background.neutral,
  },
});