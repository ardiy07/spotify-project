import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FONTS} from '../constants/font';
import LinearGradient from 'react-native-linear-gradient';
import {Notificaton, Recents, Settings} from '../assets/icons';
import {COLOR_ACCENT, COLOR_NEUTRAL} from '../constants';
import Config from 'react-native-config';
import { greetingMessage } from '../utils';

const HomeScreen = () => {
  console.log(Config);
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
            marginHorizontal: 15
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={[FONTS.heading2, {color: 'white'}]}>{greetingMessage()}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 18, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                console.log('Notification');
              }}>
              <Notificaton />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('Recents');
              }}>
              <Recents />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('Settings');
              }}>
              <Settings />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10, gap: 10, marginHorizontal: 10, justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor: COLOR_NEUTRAL.o4,
              flex: 1,
              height: 60,
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text>Hello</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLOR_NEUTRAL.o4,
              borderRadius: 5,
              height: 60,
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text>Hello</Text>
          </TouchableOpacity>
        </View>
        {/* <FlatList numColumns={2} data={[1, 2, 3, 4]} columnWrapperStyle={{justifyContent: 'space-between', gap: 10, marginTop: 10, paddingHorizontal: 10}} renderItem={() => {
          return (
            <TouchableOpacity
            style={{
              backgroundColor: COLOR_NEUTRAL.o4,
              borderRadius: 5,
              height: 60,
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text>Hello</Text>
          </TouchableOpacity>
          );
        }}/> */}
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
