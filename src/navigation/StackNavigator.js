import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR_NEUTRAL} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreen,
  SearchScreen,
  LibraryScreen,
  LauchScreen,
  LoginScreen,
} from '../screens';

import {
  Home,
  HomeFocus,
  Search,
  SearchFocus,
  Library,
  LibraryFocus,
} from '../assets/icons';


const Tab = createBottomTabNavigator();

function BottomTabs() {
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

const Stacks = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stacks.Navigator initialRouteName="Main">
        <Stacks.Screen
          name="Lauch"
          component={LauchScreen}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
