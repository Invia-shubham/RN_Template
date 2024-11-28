import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../components/atoms/colors';
import { typography } from '../../components/atoms/typography';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';

export const UsageScreen = () => {
  return (
    <BottomTabPageLayout headerText='USAGE'>
    <View style={styles.Container}>
      <Text style={styles.activeText}>UsageScreen</Text>
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