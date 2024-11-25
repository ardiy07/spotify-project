import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {COLOR_NEUTRAL, COLOR_PRIMARY} from './constants';
import Home from './assets/icons/tab/Home.svg';
import {FONTS} from './constants/font';
import Navigation from './navigation/StackNavigator';

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}
