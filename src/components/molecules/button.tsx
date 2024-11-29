import React, {ReactNode, useContext, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors} from '../atoms/colors';
import {numbers} from '../atoms/numbers';
import {View} from 'react-native';
import {typography} from '../atoms/typography';
import {AppThemeContext} from '../../appcontext/AppThemeContext';

export enum ButtonStatus {
  Active = 'active',
  Disabled = 'disabled',
  Hover = 'hover',
  Inverted = 'inverted',
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  TextButton = 'textButton',
}

interface ButtonProps {
  testID?: string;
  status: string;
  buttonType: string;
  children: string;
  onPress: () => void;
  leftIcon?: ReactNode;
  rightIcon?: string;
  fontSize?: number;
  borderRadius?: number;
  rightIconBgStyle?: StyleProp<ViewStyle>;
  leftIconBgStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  testID,
  status = ButtonStatus.Active,
  buttonType = ButtonType.Primary,
  children,
  onPress,
  leftIcon,
  rightIcon,
  fontSize = 16,
  borderRadius = numbers.radius.small,
  rightIconBgStyle,
  leftIconBgStyle,
  style,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const buttonStatus = isPressed ? ButtonStatus.Hover : status;
  const {isDarkTheme, currentTheme, toggleTheme} = useContext(AppThemeContext);
  const backgroundColor = {
    primary: {
      active: colors.background.fill.primaryActive,
      disabled: colors.background.fill.primaryDisabled,
      hover: colors.background.fill.primaryHover,
      inverted: colors.background.fill.primaryInverse,
    },
    secondary: {
      active: 'transparent',
      disabled: 'transparent',
      hover: colors.background.fill.secondaryHover,
      inverted: 'transparent',
    },
    textButton: {
      active: 'transparent',
      disabled: 'transparent',
      hover: 'transparent',
    },
  };

  const textColor = {
    primary: {
      active: isDarkTheme
        ? colors.text.primaryInverted
        : colors.text.primaryActiveOnFill,
      disabled: colors.text.primaryDisabled,
      hover: colors.text.primaryActiveOnFill,
      inverted: colors.text.secondaryActive,
    },
    secondary: {
      active: isDarkTheme ? colors.text.primaryInverted : colors.text.primary,
      disabled: colors.text.primaryDisabled,
      hover: colors.text.primaryActive,
      inverted: colors.text.primaryInverted,
    },
    textButton: {
      active: isDarkTheme
        ? colors.text.primaryInverted
        : colors.text.primaryActive,
      disabled: colors.text.primaryDisabled,
      hover: colors.text.primaryHover,
    },
  };

  const borderColor = {
    secondary: {
      active: colors.border.secondaryActive,
      disabled: colors.border.primaryDisabled,
      hover: colors.background.fill.secondaryHover,
      inverted: colors.border.primaryActiveInversed,
    },
    textButton: {
      active: 'transparent',
      disabled: 'transparent',
      hover: 'transparent',
    },
  };

  const buttonStyle = {
    backgroundColor: backgroundColor[buttonType][buttonStatus],
    borderColor:
      buttonType === ButtonType.Secondary
        ? borderColor[buttonType][buttonStatus]
        : 'transparent',
    borderRadius: borderRadius,
  };

  const textStyle = {
    color: textColor[buttonType][buttonStatus],
    fontSize: fontSize,
  };

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={1}
      disabled={status === ButtonStatus.Disabled}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.button,
        buttonStyle,
        status === ButtonStatus.Inverted ? styles.invertedbutton : null,
        style,
      ]}>
      {leftIcon && (
        <View style={[styles.leftIconStyle, leftIconBgStyle]}>{leftIcon}</View>
      )}
      <Text style={[styles.text, textStyle]}>{children}</Text>
      {rightIcon && (
        <View style={[styles.rightIconStyle, rightIconBgStyle]}>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: numbers.gap[16],
    borderRadius: numbers.radius.large,
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  text: {
    ...typography.style.TypographyParagraphMedium,
  },
  invertedbutton: {
    alignSelf: 'stretch',
  },
  leftIconStyle: {
    marginRight: 10,
  },
  rightIconStyle: {
    marginLeft: 10,
  },
});
export default Button;
