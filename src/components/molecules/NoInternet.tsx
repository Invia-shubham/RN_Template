import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {typography} from '../atoms/typography';
import {numbers} from '../atoms/numbers';
import {colors} from '../atoms/colors';
import {AppThemeContext} from '../../appcontext/AppThemeContext';

const NoInternet = () => {
  const {isDarkTheme, currentTheme, toggleTheme} = useContext(AppThemeContext);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {!isConnected && (
        <SafeAreaView
          style={[
            styles.container,
            {
              backgroundColor: colors.background.default,
            },
          ]}>
          <View
            style={[
              styles.subContainer,
              {
                backgroundColor: isDarkTheme
                  ? colors.background.dark
                  : colors.background.default,
              },
            ]}>
            <Icon name="wifi-off" size={numbers.size[20]} color={colors.text} />
            <View>
              <Text style={styles.buttonText}>Low Internet</Text>
              <Text style={styles.bottomText}>
                Check your network connection
              </Text>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  subContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    width: '100%',
  },
  bottomText: {
    opacity: 0.6,
    marginTop: 3,
    ...typography.style.TypographyParagraphMedium,
  },
  buttonText: {
    ...typography.style.TypographyParagraphMedium,
  },
});

export default NoInternet;
