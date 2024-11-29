import React, {useContext} from 'react';
import {Text, TextProps} from 'react-native';
import {AppThemeContext} from '../../appcontext/AppThemeContext';
import {colors} from '../atoms/colors';

interface IText extends TextProps {
  children?: React.ReactNode;
  lightColor?: string;
}

const RNText = ({children, style, lightColor, ...props}: IText) => {
  const {isDarkTheme} = useContext(AppThemeContext);

  const textColor = isDarkTheme
    ? colors.text.primaryInverted
    : lightColor || colors.text.primaryActive;

  // Remove the color property from the style to prevent overriding it
  const filteredStyle = {...style};
  if (filteredStyle.color) {
    delete filteredStyle.color;
  }

  const combinedStyle = [{color: textColor}, filteredStyle];

  return (
    <Text {...props} style={combinedStyle}>
      {children}
    </Text>
  );
};

export default RNText;
