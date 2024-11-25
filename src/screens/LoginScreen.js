import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR_NEUTRAL, COLOR_PRIMARY} from '../constants';
import Logo from '../assets/icons/Logo.svg';
import {FONTS} from '../constants/font';
import Navigation from '../navigation/StackNavigator';
import { StackActions } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.dispatch(StackActions.replace('Main'));
  };

  return (
    <View
      style={{
        backgroundColor: COLOR_NEUTRAL.oo,
        flex: 1,
        alignItems: 'center',
      }}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR_NEUTRAL.oo} />
      <View style={{marginTop: 140}}>
        <Logo width={80} height={80} />
      </View>
      <View style={{marginTop: 35, alignItems: 'center'}}>
        <Text style={[FONTS.display, {color: COLOR_NEUTRAL.o5}]}>
          Millions of song.
        </Text>
        <Text style={[FONTS.display, {color: COLOR_NEUTRAL.o5}]}>
          Free on Spotify.
        </Text>
      </View>
      <View style={{marginVertical: 10, marginTop: 100}}>
        <TouchableOpacity
          style={{
            backgroundColor: COLOR_PRIMARY.oo,
            width: 300,
            height: 50,
            borderRadius: 50,
            paddingVertical: 12,
            paddingHorizontal: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => handleLogin()}
          >
          <Text style={[FONTS.title]}>Sign In with Spotify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
