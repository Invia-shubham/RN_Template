import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../components/atoms/colors';
import {typography} from '../../components/atoms/typography';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';

export const NotificationScreen = () => {
  return (
    <BottomTabPageLayout headerText='NOTIFICATION'>
    <View style={styles.Container}>
      <Text style={styles.activeText}>Notification Screen</Text>
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
