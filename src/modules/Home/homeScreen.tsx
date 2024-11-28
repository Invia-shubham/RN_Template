import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../components/atoms/colors';
import {typography} from '../../components/atoms/typography';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';
import Button, { ButtonType } from '../../components/molecules/button';
import ActivityIndicator from '../../components/molecules/activityIndicator';
import { image } from '../../utils/image';
import Icons from '../../components/atoms/icons';

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  return (
    <BottomTabPageLayout headerText="HOME">
      {isLoading && <ActivityIndicator />}
      <View style={styles.Container}>
        <Button
          style={styles.button}
          children="HELLO"
          onPress={() => {
            setIsLoading(true);
          }}
          buttonType={ButtonType.Secondary}
        />
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
  button: {
    width: '90%',
    alignSelf: 'center',
  },
});
