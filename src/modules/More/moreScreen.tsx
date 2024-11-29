import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../components/atoms/colors';
import { typography } from '../../components/atoms/typography';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';
import RNText from '../../components/molecules/RNText';

export const MoreScreen = () => {
  return (
    <BottomTabPageLayout headerText='MORE'>
    <View style={styles.Container}>
      <RNText style={styles.activeText}>More</RNText>
    </View>
    </BottomTabPageLayout>
  )
}

const styles=StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  activeText: {
    color: colors.text.primaryActive,
    ...typography.style.TypographyParagraphMedium,
  },
})