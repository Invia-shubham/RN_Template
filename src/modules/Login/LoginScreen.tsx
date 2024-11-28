import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../components/atoms/colors';
import {typography} from '../../components/atoms/typography';
import {TAB_ROUTES} from '../../router/enum';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../router/stackNavigation';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';

export const LoginScreen = () => {
  const {navigate} = useNavigation<StackNavigation>();

  return (
    <BottomTabPageLayout headerText='LOGIN'>
    <View style={styles.Container}>
      <Text
        style={styles.activeText}
        onPress={() => {
          navigate(TAB_ROUTES.TAB);
        }}>
        LoginScreen
      </Text>
    </View>
    </BottomTabPageLayout>
  );
};

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
