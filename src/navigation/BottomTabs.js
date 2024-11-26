import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR_NEUTRAL} from '../constants';
import {
  Home,
  HomeFocus,
  Search,
  SearchFocus,
  Library,
  LibraryFocus,
} from '../assets/icons';

import {HomeScreen, SearchScreen, LibraryScreen} from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {color: COLOR_NEUTRAL.o5},
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeFocus width={22} height={22} />
            ) : (
              <Home width={22} height={22} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          headerShown: false,
          tabBarLabelStyle: {
            color: COLOR_NEUTRAL.o5,
            fontFamily: 'Inter-Medium',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <SearchFocus width={22} height={22} />
            ) : (
              <Search width={22} height={22} />
            ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          headerShown: false,
          tabBarLabelStyle: {
            color: COLOR_NEUTRAL.o5,
            fontFamily: 'Inter-Medium',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <LibraryFocus width={22} height={22} />
            ) : (
              <Library width={22} height={22} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
