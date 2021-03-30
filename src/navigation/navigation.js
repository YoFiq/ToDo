import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const AppTab = createBottomTabNavigator();
const ToDoStack = createStackNavigator();
const InfoStack = createStackNavigator();

export const HomeStackScreen = () => (
  <ToDoStack.Navigator>
    <ToDoStack.Screen name="Home" component={Authorization} />
  </ToDoStack.Navigator>
);
