import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../assets/icons/Logo.svg';
import {COLOR_NEUTRAL} from '../constants';
import {StackActions} from '@react-navigation/native';

const LauchScreen = ({navigation}) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 2000);

    return () => clearTimeout(interval);
  }, []);

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

const styles = StyleSheet.create({});
