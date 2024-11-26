import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {LauchScreen, LoginScreen} from '../screens';
import BottomTabs from './BottomTabs';

const Stacks = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stacks.Navigator initialRouteName="Lauch">
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
