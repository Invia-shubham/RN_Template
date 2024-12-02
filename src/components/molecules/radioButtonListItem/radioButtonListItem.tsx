import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
// import SelectedRadioButton from '../../../assets/img/selected_radio_button.svg';
// import UnSelectedRadioButton from '../../../assets/img/unselected_radio_button.svg';
import {typography} from '../../../components/atoms/typography';
import {colors} from '../../atoms/colors';
import {numbers} from '../../atoms/numbers';
import Icons from '../../atoms/icons';
import {image} from '../../../utils/image';

interface IRadioButtonListItem {
  title: string;
  selected: boolean;
  onPress?: () => void;
}

const RadioButtonListItem = ({
  title,
  selected,
  onPress,
}: IRadioButtonListItem) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.parentViewStyle}>
      <TouchableOpacity onPress={onPress}>
        {selected ? (
          <Icons
            iconName={'radio-btn-active'}
            size={24}
            color={'blue'}
            library="Fontisto"
          />
        ) : (
          <Icons
            iconName={'radio-btn-passive'}
            size={24}
            color={'blue'}
            library="Fontisto"
          />
        )}
      </TouchableOpacity>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RadioButtonListItem;

const styles = StyleSheet.create({
  parentViewStyle: {flexDirection: 'row', height: 56, alignItems: 'center'},
  titleStyle: {
    ...typography.style.TypographyParagraphMedium,
    color: colors.text.secondary,
    marginStart: numbers.margin[16],
  },
});
