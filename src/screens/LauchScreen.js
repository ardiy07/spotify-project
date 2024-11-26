import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../assets/icons/Logo.svg';
import {COLOR_NEUTRAL} from '../constants';
import {StackActions, useNavigation} from '@react-navigation/native';
import {getAccesToken} from '../utils';

const LauchScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      const result = await getAccesToken();
      if (result) {
        navigation.dispatch(StackActions.replace('Main'));
      } else {
        navigation.dispatch(StackActions.replace('Login'));
      }
    };

    const timeout = setTimeout(() => {
      checkAuth();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: COLOR_NEUTRAL.oo,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR_NEUTRAL.oo} />
      <Logo width={176} height={176} />
    </View>
  );
};

export default LauchScreen;

