import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../components/atoms/colors';
import {typography} from '../../components/atoms/typography';
import BottomTabPageLayout from '../../components/organisms/bottomTabPageLayout/bottomTabPageLayout';
import Button, {ButtonType} from '../../components/molecules/button';
import ActivityIndicator from '../../components/molecules/activityIndicator';
import SearchInput from '../../components/molecules/searchInput/searchInput';
import CustomSwitch from '../../components/molecules/switchButton';
import RadioButtonListItem from '../../components/molecules/radioButtonListItem/radioButtonListItem';
import OverlayModal from '../../components/organisms/OverlayModal';

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectGender, setSelectGender] = useState<'Male' | 'Female'>('Male');
  const [isAuthenticationErrorVisible, setIsAuthenticationErrorVisible] =
    useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const openModal = () => {
    setIsAuthenticationErrorVisible(true);
  };

  const biometricEnablePopupButtons = [
    {
      text: 'OK',
      onPress: () => {
        setIsAuthenticationErrorVisible(false);
      },
    },
  ];

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
        <CustomSwitch
          isOn={toggle}
          onToggle={val => {
            setToggle(val);
          }}
        />
        <View style={styles.radioButtonContainer}>
          <RadioButtonListItem
            selected={selectGender == 'Male' ? true : false}
            title="Male"
            onPress={() => {
              setSelectGender('Male');
            }}
          />
          <RadioButtonListItem
            selected={selectGender == 'Female' ? true : false}
            title="Female"
            onPress={() => {
              setSelectGender('Female');
            }}
          />
        </View>
        <OverlayModal
          visible={isAuthenticationErrorVisible}
          onClose={() => setIsAuthenticationErrorVisible(false)}
          title={'Title'}
          subtitle={
            'This is a custom bottom Sheet, in this we can customize the bottom sheet according to our need.'
          }
          buttons={biometricEnablePopupButtons}
          shouldEnableOverlayClose={isAuthenticationErrorVisible}
        />

        <Button
          style={styles.button}
          children="Button Press"
          onPress={() => {
            openModal();
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
    position: 'absolute',
    bottom: '5%',
  },
  searchContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
});
