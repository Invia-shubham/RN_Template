import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../components/atoms/colors';
import {typography} from '../../components/atoms/typography';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';
import Button, {ButtonType} from '../../components/molecules/button';
import ActivityIndicator from '../../components/molecules/activityIndicator';
import SearchInput from '../../components/molecules/searchInput/searchInput';

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  return (
    <BottomTabPageLayout headerText="HOME">
      {isLoading && <ActivityIndicator indicatorType="default" />}
      <View style={styles.Container}>
        <View style={styles.searchContainer}>
        <SearchInput
          placeholder="Search here..."
          onChangeText={val => setSearchInput(val)}
          value={searchInput}
          isLoading={isLoading}
          onClearTextPress={() => {
            setSearchInput('');
          }}
        />
        </View>
        <Button
          style={styles.button}
          children="Button Press"
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
    // justifyContent: 'center',
  },
  activeText: {
    color: colors.text.primaryActive,
    ...typography.style.TypographyParagraphMedium,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    position:'absolute',
    bottom:'5%'
  },
  searchContainer:{
    width: '90%',
    alignSelf: 'center',
  }
});
