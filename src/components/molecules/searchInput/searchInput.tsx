import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {colors} from '../../atoms/colors';
import {typography} from '../../atoms/typography';
import {numbers} from '../../atoms/numbers';
import Icons from '../../atoms/icons';
import {AppThemeContext} from '../../../appcontext/AppThemeContext';

interface ISearchInputProps {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  onClearTextPress: () => void;
  isLoading?: boolean;
}

const SearchInput = ({
  placeholder,
  value,
  onChangeText,
  onClearTextPress,
  isLoading,
}: ISearchInputProps) => {
  const [focus, setFocus] = useState(false);
  const {isDarkTheme} = useContext(AppThemeContext);

  return (
    <View
      style={[
        styles.textInputStyle,
        {
          backgroundColor: isDarkTheme
            ? colors.background.fill.bottomTabDark
            : colors.background.surface.primary,
        },
        focus
          ? styles.focusedInputBorderColor
          : styles.unFocusedSelectedInputBorderColor,
      ]}>
      {/* <ExploreActiveIcon color={colors.icon.secondary} /> */}
      <Icons
        iconName={'search-outline'}
        size={24}
        color={
          isDarkTheme ? colors.text.primaryInverted : colors.icon.secondary
        }
        library="Ionicons"
      />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={
          isDarkTheme ? colors.text.primaryInverted : colors.text.secondary
        }
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...styles.inputTextStyle,
          color: isDarkTheme
            ? colors.text.primaryInverted
            : colors.text.primary,
          backgroundColor: isDarkTheme
            ? colors.background.fill.bottomTabDark
            : colors.background.surface.primary,
        }}
      />
      {value?.length !== 0 && (
        <TouchableOpacity onPress={onClearTextPress}>
          {isLoading ? (
            <ActivityIndicator color={colors.text.primaryActive} />
          ) : (
            <Icons
              iconName={'close'}
              size={24}
              color={
                isDarkTheme
                  ? colors.text.primaryInverted
                  : colors.icon.secondary
              }
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    backgroundColor: colors.background.surface.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  inputTextStyle: {
    flex: 1,
    paddingHorizontal: 8,
    color: colors.text.primary,
    ...typography.style.TypographyParagraphRegular,
    paddingVertical: numbers.padding[4],
  },
  focusedInputBorderColor: {
    borderColor: colors.background.fill.primaryActive,
  },
  unFocusedSelectedInputBorderColor: {
    borderColor: colors.background.fill.primaryDisabled,
  },
});
