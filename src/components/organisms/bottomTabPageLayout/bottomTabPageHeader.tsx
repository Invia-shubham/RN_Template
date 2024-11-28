import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../atoms/colors';
import {typography} from '../../atoms/typography';

interface IBottomTabPageHeader {
  title: string;
  pending?: boolean;
}

const BottomTabPageHeader = ({title, pending}: IBottomTabPageHeader) => {
  return (
    <View style={bottomTabPageHeaderStyles.parentViewStyle}>
      <View style={bottomTabPageHeaderStyles.flexOneStyle}>
        <Text style={bottomTabPageHeaderStyles.headerTextStyle}>{title}</Text>
      </View>
      <View style={bottomTabPageHeaderStyles.pendingButtonContainer}></View>
      <View style={bottomTabPageHeaderStyles.flexOneStyle} />
    </View>
  );
};

export default BottomTabPageHeader;

const bottomTabPageHeaderStyles = StyleSheet.create({
  headerTextStyle: {
    color: colors.gradient.lightBlue,
    ...typography.style.TypographyParagraphBold,
  },

  parentViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
  },
  pendingButtonContainer: {
    justifyContent: 'center',
  },
  flexOneStyle: {
    flex: 1,
  },
});
