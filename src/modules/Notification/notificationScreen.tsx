import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../components/atoms/colors';
import {typography} from '../../components/atoms/typography';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';
import RNText from '../../components/molecules/RNText';

export const NotificationScreen = () => {
  return (
    <BottomTabPageLayout headerText='NOTIFICATION'>
    <View style={styles.Container}>
      <RNText style={styles.activeText}>Notification Screen</RNText>
    </View>
    </BottomTabPageLayout>
  );
};

// export default NotificationScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeText: {
    color: colors.text.primaryActive,
    ...typography.style.TypographyParagraphMedium,
  },
});
