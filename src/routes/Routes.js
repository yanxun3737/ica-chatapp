import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import UserAuthScreen from '../screens/UserAuthScreen';
import MainChatSceen from '../screens/MainChatScreen';

const MainChatSceenStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="mainChatScreen" component={MainChatSceen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="userAuth" component={UserAuthScreen} />
        <Stack.Screen name="mainChat" component={MainChatSceenStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
